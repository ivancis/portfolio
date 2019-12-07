# Dropdown

Component that allows the user to select one of many options. A replacement
for the normal HTML `select` element.

Tag name: `<magic-ui-dropdown />`

## Attributes

| Name        | Description                                                                                                 | Type                  | Default |
| ----------- | ----------------------------------------------------------------------------------------------------------- | --------------------- | ------- |
| allowEmpty  | Allow empty value to be selected.                                                                           | boolean               |
| disabled    | Control is disabled. This means not clickable nor selectable by tabbing and visually it's grayed-out.       | boolean               |
| ellipsis    | Control has ellipsis. This means that currently selected option name will not exceed a max width of pixels. | boolean               |
| light       | Light visual variant of a control, to be used on dark backgrounds.                                          | boolean               |
| link        | Link visual variant of a control, to have it look like a link.                                              | boolean               |
| options     | Values of the options of this dropdown                                                                      | IDropdownOption[]     |
| placeholder | Default text to be displayed. This will be a non-selectable option with empty value                         | string &#124; boolean | false   |
| value       | Currently selected value.                                                                                   | unknown               |

## Events

| Name   | Description | Type    |
| ------ | ----------- | ------- |
| change |             | unknown |
