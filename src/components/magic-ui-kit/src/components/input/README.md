# Input

Component that renders an input field with defined type. Allows to have
a space for icons or render centered text inside of input field.

Tag name: `<magic-ui-input />`

## Attributes

| Name     | Description                                          | Type    | Default |
| -------- | ---------------------------------------------------- | ------- | ------- |
| centered | Text inside of input is centered.                    | boolean |
| focused  | Focused, whether the input should be focused or not. | boolean |
| icon     | Input with space for icon.                           | boolean |

## Events

| Name   | Description | Type          |
| ------ | ----------- | ------------- |
| change |             | string        |
| erase  |             | KeyboardEvent |
| input  |             | string        |
