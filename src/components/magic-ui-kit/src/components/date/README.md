# Date

Component for the user to enter a date without time. It does not display
any calendar to pick it, just 3 inputs.

Tag name: `<magic-ui-date />`

## Attributes

| Name       | Description                                                   | Type   | Default |
| ---------- | ------------------------------------------------------------- | ------ | ------- |
| info       | Additional information field to be displayed below the input. | string |
| minimumAge | Minimum age (if any) to validate                              | number |
| value      | Initial value of the field                                    | string |

## Events

| Name   | Description | Type               |
| ------ | ----------- | ------------------ |
| change |             | null &#124; string |
