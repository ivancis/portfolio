# Notification

Component shows notifications to the user. Comes in few different variants
that indicate what type of notification is shown. Also has an option to
force interaction from the user side where you choose if it's dismissible
or not.

Tag name: `<magic-ui-notification />`

## Attributes

| Name        | Description                                     | Type                              | Default |
| ----------- | ----------------------------------------------- | --------------------------------- | ------- |
| content     | Notification content.                           | string &#124; Element &#124; null | null    |
| dismissible | Whether the notification is dismissible or not. | boolean                           |
| variant     | Variant of the notification.                    | string                            |

## Events

| Name  | Description | Type |
| ----- | ----------- | ---- |
| close |             | void |
