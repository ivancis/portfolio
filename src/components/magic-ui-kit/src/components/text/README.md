# Text

Component used to display mostly text content coming from CMS in different
decorative variants. Allows to display Markdown or HTML content.

Tag name: `<magic-ui-text />`

## Attributes

| Name                | Description                                                                                                                                                                    | Type                   | Default |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------- | ------- |
| carouselText        | Text component comes with special styles as text used on carousel.                                                                                                             | boolean                |
| content             | Text to be displayed in this element. It can have params written like {{this}} for param substitution                                                                          | string                 |
| contentText         | Text component comes with special styles as text used on static pages.                                                                                                         | boolean                |
| isMarkdown          | Whether to render the text as Markdown (true) or HTML (false).                                                                                                                 | boolean                |
| marketingBannerText | Text component comes with special styles as text used on marketing banner.                                                                                                     | boolean                |
| offerText           | Text component comes with special styles as text used on offer pages.                                                                                                          | boolean                |
| params              | Params to be substituted for this particular element only. The general substitution params should be set with `setInterpolationParams`. This has priority over general params. | Record<string, string> |
| tag                 | Tag name to use.                                                                                                                                                               | string                 |

## Events

Component doesn't emit any events
