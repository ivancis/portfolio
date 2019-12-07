import { MagicConfigMixin } from '@gig/magic-common';
import { AmlStatus, IAmlUploadedFile } from '@gig/magic-sdk/dist/src/adapter/users/getAmlStatus';
export declare enum UploadStatus {
    NORMAL = "normal",
    FAILED = "failed",
    PENDING = "pending",
    VERIFIED = "verified",
    REJECTED = "rejected"
}
interface IUploadedFile {
    file: File;
    progress: number;
    hasError: boolean;
}
declare const FileUploadComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component that allows the user to upload files both on mobile and dekstop
 * devices. Additionally it allows drag-and-drop functionality on desktop.
 */
export default class FileUploadComponent extends FileUploadComponent_base {
    files: IUploadedFile[];
    supportedFileTypes: string[];
    UploadStatus: typeof UploadStatus;
    /**
     * Header to be displayed on top of the file upload.
     */
    header: string;
    /**
     * Hint to be displayed when you click on the title. If present, there will
     * be an info icon next to the title, if missing there won't be any.
     */
    hint: string;
    /**
     * Upload section status
     */
    status: UploadStatus;
    /**
     * Whether upload should be disabled
     */
    disabled: boolean;
    /**
     * Files history
     */
    previousFiles: IAmlUploadedFile[];
    readonly uploadedFiles: IAmlUploadedFile[];
    readonly hasPendingUpload: boolean;
    fileChosen(): void;
    fileDropped(event: DragEvent): void;
    /**
     * Adds a new file that was selected either with the button or with
     * drag&drop. Emits a `selected` event with an event listener for progress.
     */
    addFile(file: File): {
        file: File;
        onProgressChange: (progress: number, hasError: boolean) => void;
    } | undefined;
    uploadError(message: string): string;
    isNormal(status: AmlStatus): boolean;
    isFailed(status: AmlStatus): boolean;
    isPending(status: AmlStatus): boolean;
    isVerified(status: AmlStatus): boolean;
    isRejected(status: AmlStatus): boolean;
    getStatusTranslation(status: AmlStatus): "file-upload.failed" | "file-upload.error" | "file-upload.verified" | "file-upload.pending";
    getStatusIcon(status: AmlStatus): "" | "checked" | "timestamp" | "close-solid";
    getStatusIconClass(status: AmlStatus): "" | "icon--file-rejected" | "icon--file-pending" | "icon--file-verified";
}
export {};
