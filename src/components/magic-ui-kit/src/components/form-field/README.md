# Form Field

Form field with a customizable slot that defaults to an input. It
has capabilities to show an error/warning message and an info
message. Use hasError, hasWarning and hasInfo to control their
display.

Tag name: `<magic-ui-form-field />`

## Attributes

| Name       | Description                                                      | Type    | Default |
| ---------- | ---------------------------------------------------------------- | ------- | ------- |
| centered   | Variant with centered content.                                   | boolean |
| forceError | If true an error status will be immediately shown no matter what | boolean |
| hasError   | Indicates error state of the form input                          | boolean |
| hasInfo    | Indicates info state of the form input                           | boolean |
| hasSuccess | Indicates success state of the form input                        | boolean |
| hasWarning | Indicates warning state of the form input                        | boolean |
| info       | Information shown below the input                                | string  |
| label      | Input label                                                      | string  |
| message    | Error message shown below the input                              | string  |
| noIcon     | Variant for no validation icon.                                  | boolean |
| noMargin   | Variant with no margin.                                          | boolean |

## Events

| Name   | Description                                                                            | Type |
| ------ | -------------------------------------------------------------------------------------- | ---- |
| change | Re-emitted `change` event of the input inside form field. Provides current input value | any  |
| input  | Re-emitted `input` event of the input inside form field. Provides current input value  | any  |
