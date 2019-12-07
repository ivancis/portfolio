import { MagicConfigMixin } from '@gig/magic-common';
declare const TextComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used to display mostly text content coming from CMS in different
 * decorative variants. Allows to display Markdown or HTML content.
 */
export default class TextComponent extends TextComponent_base {
    /**
     * Text to be displayed in this element. It can have params written like
     * {{this}} for param substitution
     */
    content: string;
    /**
     * Whether to render the text as Markdown (true) or HTML (false).
     */
    isMarkdown: boolean;
    /**
     * Params to be substituted for this particular element only. The general
     * substitution params should be set with `setInterpolationParams`.
     * This has priority over general params.
     */
    params: Record<string, string>;
    /**
     * Tag name to use.
     */
    tag: string;
    /**
     * Text component comes with special styles as text used on offer pages.
     */
    offerText: boolean;
    /**
     * Text component comes with special styles as text used on static pages.
     */
    contentText: boolean;
    /**
     * Text component comes with special styles as text used on carousel.
     */
    carouselText: boolean;
    /**
     * Text component comes with special styles as text used on marketing
     * banner.
     */
    marketingBannerText: boolean;
    readonly filteredAttrs: {
        [x: string]: string;
    };
    readonly processedText: string;
}
export {};
