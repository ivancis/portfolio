# Collapsible Row

Component used to show only the amount of links that are possible to put
on one row. Emits any elements that are not able to fit so they can be displayed
with other methods (eg. in a dropdown).

Tag name: `<magic-ui-collapsible-row />`

## Attributes

| Name       | Description                       | Type               | Default |
| ---------- | --------------------------------- | ------------------ | ------- |
| activeItem | Active item name                  | string             |
| items      | List of items to potentially show | ICollapsibleItem[] |

## Events

| Name   | Description | Type               |
| ------ | ----------- | ------------------ |
| hidden |             | ICollapsibleItem[] |
