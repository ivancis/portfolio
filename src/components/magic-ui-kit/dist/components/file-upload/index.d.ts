import FileUploadComponent from './file-upload.vue';
export { UploadStatus } from './file-upload';
export declare const FileUpload: import("vue").VueConstructor<FileUploadComponent>;
/**
 * Event fired when a user selects a file, either clicking on the button or
 * dragging and dropping it. If multiple files are selected, this event is
 * fired once per file.
 */
export interface ISelectedFileEvent {
    /**
     * File selected by the user
     */
    file: File;
    /**
     * Handler that should be called when the file upload progress changes.
     * @param progress Upload progress as a number between 0 and 1, where 0
     *                 means 0%, 0.5 means 50%, 1 means 100%, etc.
     */
    onProgressChange: (progress: number, hasError: boolean) => void;
}
