# Button

Component used as call to action element which comes in various decorative
variants.

Tag name: `<magic-ui-button />`

## Attributes

| Name        | Description                                                                                    | Type                                   | Default            |
| ----------- | ---------------------------------------------------------------------------------------------- | -------------------------------------- | ------------------ |
| addSpace    | Add space button variant adds margin on the sides.                                             | boolean                                |
| buttonTag   |                                                                                                | string                                 | &#x27;button&#x27; |
| hollow      | Hollow button variant with no background and border only.                                      | boolean                                |
| icon        | Button with icon variant.                                                                      | boolean                                |
| left        | Button with icon aligned to the left.                                                          | boolean                                |
| lessMargin  | Less margin button variant has half of standard margin.                                        | boolean                                |
| lessPadding | Less padding button variant has half of standard padding.                                      | boolean                                |
| loading     | Loading button variant has loading icon inside.                                                | boolean                                |
| noMargin    | No margin button variant has no margins.                                                       | boolean                                |
| noPadding   | No padding button variant has no paddings.                                                     | boolean                                |
| right       | Button with icon aligned to the right.                                                         | boolean                                |
| round       | Round button variant is used with icons mostly.                                                | boolean                                |
| small       | Small button variant is with smaller font, paddings etc.                                       | boolean                                |
| tiny        | Tiny button variant is with even smaller font, paddings etc.                                   | boolean                                |
| to          | The link to link to. If Number/String is given it's presumed to be a RouteablePage enum value. | IRouteLink &#124; number &#124; string |
| variant     |                                                                                                | string                                 | &#x27;&#x27;       |
| wide        | Wide button variant occupies available space.                                                  | boolean                                |

## Events

Component doesn't emit any events
