# Magic Ui Kit

Library containing components relating to Magic Ui Kit

## Commands

### Build

```
npm run build
```

### Watch

```
npm run watch
```

## Components

List of components included in this library:

### [Accordion](src/components/accordion#readme)

Component is used to show and hide content. Collapsing an element will
animate the height from it’s current value to 0. Given how CSS handles
animations max-height should be explicitly declared.

### [Background](src/components/background#readme)

Component is used to display responsive images.

### [Badge](src/components/badge#readme)

Component used as an indicator to show how many actions or items user has
to interact with.

### [Box](src/components/box#readme)

Component used as an decorative box in which content goes.

### [Button](src/components/button#readme)

Component used as call to action element which comes in various decorative
variants.

### [Checkbox](src/components/checkbox#readme)

Component to let the user select a boolean value. It is displayed as
a checkbox.

### [Clock](src/components/clock#readme)

Component displays current time.

### [Code Entry](src/components/code-entry#readme)

### [Collapsible Row](src/components/collapsible-row#readme)

Component used to show only the amount of links that are possible to put
on one row. Emits any elements that are not able to fit so they can be displayed
with other methods (eg. in a dropdown).

### [Date](src/components/date#readme)

Component for the user to enter a date without time. It does not display
any calendar to pick it, just 3 inputs.

### [Dropdown](src/components/dropdown#readme)

Component that allows the user to select one of many options. A replacement
for the normal HTML `select` element.

### [File Upload](src/components/file-upload#readme)

Component that allows the user to upload files both on mobile and dekstop
devices. Additionally it allows drag-and-drop functionality on desktop.

### [Form Field](src/components/form-field#readme)

Form field with a customizable slot that defaults to an input. It
has capabilities to show an error/warning message and an info
message. Use hasError, hasWarning and hasInfo to control their
display.

### [Icon](src/components/icon#readme)

Component that injects inline SVG icons stored in /icons folder which
allows to have control over icon color, stroke and other decorative
attributes.

### [Input](src/components/input#readme)

Component that renders an input field with defined type. Allows to have
a space for icons or render centered text inside of input field.

### [Link](src/components/link#readme)

Component that renders a link, also allows links to look like buttons.

### [Loader](src/components/loader#readme)

Component used to indicate loading state.

### [Menu Item](src/components/menu-item#readme)

### [Modal](src/components/modal#readme)

Component used to display content (or page) in a modal dialog. By default
has action buttons back and close which allow the user to navigate. Also
displays title to indicate what component was injected into a modal dialog.

### [Notification](src/components/notification#readme)

Component shows notifications to the user. Comes in few different variants
that indicate what type of notification is shown. Also has an option to
force interaction from the user side where you choose if it's dismissible
or not.

### [Number](src/components/number#readme)

Component that renders an input field type number.

### [Peek Password](src/components/peek-password#readme)

Component that renders an input field type password by default. The user
can interact with this component by clicking on peek password icon. That
kind of interaction toggles input field type password to text and as an
result shows password to the user as a plain text.

### [Progress Bar](src/components/progress-bar#readme)

Component used to indicate progress in some process.

### [Radio](src/components/radio#readme)

Component to let the user select a boolean value. It is displayed as a
radio.

### [Radio Group](src/components/radio-group#readme)

Component that groups radios with different layout variants.

### [Reconnect Loader](src/components/reconnect-loader#readme)

Component used to indicate loading state after connection drop was detected.

### [Search Field](src/components/search-field#readme)

Component that renders an input field for searching purposes. It has a
search button that allows the user to trigger action after clicking it or
hitting an enter key. Also has a clear button to clear the value of input
field after the user typed something.

### [Step Progress Bar](src/components/step-progress-bar#readme)

Component used to indicate how many steps are needed to finish the user flow
in some process.

### [Sticky Tooltip](src/components/sticky-tooltip#readme)

Component renders a tooltip with a close button inside. Tooltip allows the
user to interact in two ways: by clicking on a close button or clicking
outside to close a tooltip.

### [Switch](src/components/switch#readme)

Component to let the user select a boolean value. It is displayed as a
switch.

### [Tag](src/components/tag#readme)

Component renders a small tag defined in CMS as a game configuration on a
particular game in the games list.

### [Text](src/components/text#readme)

Component used to display mostly text content coming from CMS in different
decorative variants. Allows to display Markdown or HTML content.

### [Tooltip](src/components/tooltip#readme)

Component renders a tooltip without a close button. Only way to interact by
the user is by hovering the area to trigger a tooltip. To close a tooltip
user can hover out the area that triggered a tooltip.
