# Accordion

Component is used to show and hide content. Collapsing an element will
animate the height from it’s current value to 0. Given how CSS handles
animations max-height should be explicitly declared.

Tag name: `<magic-ui-accordion />`

## Attributes

| Name             | Description                                                                               | Type    | Default |
| ---------------- | ----------------------------------------------------------------------------------------- | ------- | ------- |
| initiallyVisible | Whether to show the content initially. When changed component will be updated accordingly | boolean | false   |
| noAnimation      | Accordion variant with no animation.                                                      | boolean | false   |
| wide             | Accordion variant wide takes all available space.                                         | boolean | false   |

## Events

| Name   | Description | Type    |
| ------ | ----------- | ------- |
| toggle |             | boolean |
