# File Upload

Component that allows the user to upload files both on mobile and dekstop
devices. Additionally it allows drag-and-drop functionality on desktop.

Tag name: `<magic-ui-file-upload />`

## Attributes

| Name          | Description                                                                                                                                | Type                              | Default             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------------- |
| disabled      | Whether upload should be disabled                                                                                                          | boolean                           | false               |
| header        | Header to be displayed on top of the file upload.                                                                                          | string                            |
| hint          | Hint to be displayed when you click on the title. If present, there will be an info icon next to the title, if missing there won't be any. | string                            |
| previousFiles | Files history                                                                                                                              | IAmlUploadedFile[]                | ()                  |
| status        | Upload section status                                                                                                                      | [UploadStatus](file-upload.ts#L8) | UploadStatus.NORMAL |

## Events

| Name     | Description                                                                                                                               | Type                    |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| selected | Adds a new file that was selected either with the button or with drag&drop. Emits a `selected` event with an event listener for progress. | undefined &#124; object |
| error    |                                                                                                                                           | string                  |
