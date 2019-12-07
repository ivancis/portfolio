import { Component, Emit, Mixins, Prop } from 'vue-property-decorator';
import { formatDate, MagicConfigMixin } from '@gig/magic-common';
import {
    AmlStatus,
    IAmlUploadedFile,
} from '@gig/magic-sdk/dist/src/adapter/users/getAmlStatus';

export enum UploadStatus {
    NORMAL = 'normal',
    FAILED = 'failed',
    PENDING = 'pending',
    VERIFIED = 'verified',
    REJECTED = 'rejected',
}

const amlToUploadStatus: Record<AmlStatus, UploadStatus> = {
    [AmlStatus.NOT_SET]: UploadStatus.NORMAL,
    [AmlStatus.PENDING]: UploadStatus.NORMAL,
    [AmlStatus.PROCESSING]: UploadStatus.PENDING,
    [AmlStatus.REQUESTED]: UploadStatus.NORMAL,
    [AmlStatus.USER_REQUESTED]: UploadStatus.NORMAL,
    [AmlStatus.REJECTED]: UploadStatus.REJECTED,
    [AmlStatus.APPROVED]: UploadStatus.VERIFIED,
    [AmlStatus.PENDING_REQUEST]: UploadStatus.NORMAL,
};

const documentRequestStatuses = [AmlStatus.REQUESTED, AmlStatus.USER_REQUESTED];

interface IUploadedFile {
    file: File;
    progress: number;
    hasError: boolean;
}

/**
 * Component that allows the user to upload files both on mobile and dekstop
 * devices. Additionally it allows drag-and-drop functionality on desktop.
 */
@Component({
    name: 'ui-file-upload',
    filters: {
        formatDate,
    },
})
export default class FileUploadComponent extends Mixins(MagicConfigMixin) {
    files: IUploadedFile[] = [];
    supportedFileTypes = [
        'image/bmp',
        'image/png',
        'image/gif',
        'image/jpeg',
        'application/pdf',
    ];

    UploadStatus = UploadStatus;

    /**
     * Header to be displayed on top of the file upload.
     */
    @Prop(String) header!: string;

    /**
     * Hint to be displayed when you click on the title. If present, there will
     * be an info icon next to the title, if missing there won't be any.
     */
    @Prop(String) hint!: string;

    /**
     * Upload section status
     */
    @Prop({
        type: String,
        default: UploadStatus.NORMAL,
    })
    status!: UploadStatus;

    /**
     * Whether upload should be disabled
     */
    @Prop({ type: Boolean, default: false }) disabled!: boolean;

    /**
     * Files history
     */
    @Prop({
        type: Array,
        default: () => [],
    })
    previousFiles!: IAmlUploadedFile[];

    get uploadedFiles() {
        return this.previousFiles.filter(
            (file) => !documentRequestStatuses.includes(file.statusText),
        );
    }

    get hasPendingUpload() {
        return this.files.some(({ progress }) => progress < 100);
    }

    fileChosen() {
        const fileInput = this.$refs.fileInput as HTMLInputElement;
        for (const file of Array.from(fileInput.files!)) {
            this.addFile(file);
        }
    }

    fileDropped(event: DragEvent) {
        if (!event.dataTransfer) {
            return;
        }
        if (event.dataTransfer.items) {
            const eventFiles = Array.from(event.dataTransfer.items);
            for (const file of eventFiles) {
                if (file.kind === 'file') {
                    this.addFile(file.getAsFile()!);
                }
            }
        } else {
            const eventFiles = Array.from(event.dataTransfer.files);
            for (const file of eventFiles) {
                this.addFile(file);
            }
        }
    }

    /**
     * Adds a new file that was selected either with the button or with
     * drag&drop. Emits a `selected` event with an event listener for progress.
     */
    @Emit('selected')
    addFile(file: File) {
        if (!this.supportedFileTypes.includes(file.type)) {
            this.uploadError(
                this.$t('file-upload.unsupported-type', {
                    file: file.name,
                }),
            );
            return;
        }

        const fileStatus = {
            file,
            progress: 0,
            hasError: false,
        };

        this.files.push(fileStatus);

        return {
            file,
            onProgressChange: (progress: number, hasError: boolean) => {
                if (hasError) {
                    fileStatus.hasError = true;
                    return;
                }

                fileStatus.progress = Math.round(progress * 100);
            },
        };
    }

    @Emit('error')
    uploadError(message: string) {
        return message;
    }

    isNormal(status: AmlStatus) {
        return amlToUploadStatus[status] === UploadStatus.NORMAL;
    }

    isFailed(status: AmlStatus) {
        return amlToUploadStatus[status] === UploadStatus.FAILED;
    }

    isPending(status: AmlStatus) {
        return amlToUploadStatus[status] === UploadStatus.PENDING;
    }

    isVerified(status: AmlStatus) {
        return amlToUploadStatus[status] === UploadStatus.VERIFIED;
    }

    isRejected(status: AmlStatus) {
        return amlToUploadStatus[status] === UploadStatus.REJECTED;
    }

    getStatusTranslation(status: AmlStatus) {
        switch (amlToUploadStatus[status]) {
            case UploadStatus.FAILED:
                return 'file-upload.failed';
            case UploadStatus.REJECTED:
                return 'file-upload.error';
            case UploadStatus.VERIFIED:
                return 'file-upload.verified';
            default:
                return 'file-upload.pending';
        }
    }

    getStatusIcon(status: AmlStatus) {
        switch (amlToUploadStatus[status]) {
            case UploadStatus.FAILED:
            case UploadStatus.REJECTED:
                return 'close-solid';
            case UploadStatus.PENDING:
                return 'timestamp';
            case UploadStatus.VERIFIED:
                return 'checked';
            default:
                return '';
        }
    }

    getStatusIconClass(status: AmlStatus) {
        switch (amlToUploadStatus[status]) {
            case UploadStatus.FAILED:
            case UploadStatus.REJECTED:
                return 'icon--file-rejected';
            case UploadStatus.NORMAL:
            case UploadStatus.PENDING:
                return 'icon--file-pending';
            case UploadStatus.VERIFIED:
                return 'icon--file-verified';
            default:
                return '';
        }
    }
}
