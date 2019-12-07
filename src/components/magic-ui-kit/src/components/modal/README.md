# Modal

Component used to display content (or page) in a modal dialog. By default
has action buttons back and close which allow the user to navigate. Also
displays title to indicate what component was injected into a modal dialog.

Tag name: `<magic-ui-modal />`

## Attributes

| Name        | Description                                           | Type      | Default |
| ----------- | ----------------------------------------------------- | --------- | ------- |
| backArrow   | Indicates whether to show back arrow inside a modal   | boolean   |
| dismissible | Indicates whether to show close button inside a modal | boolean   |
| size        | Modal dialog size                                     | ModalSize |

## Events

| Name  | Description                          | Type |
| ----- | ------------------------------------ | ---- |
| close | Emitted when close button is clicked | void |
| back  | Emitted when back arrow is clicked.  | void |
