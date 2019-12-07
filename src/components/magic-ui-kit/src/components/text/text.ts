import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin, interpolate } from '@gig/magic-common';

/**
 * Component used to display mostly text content coming from CMS in different
 * decorative variants. Allows to display Markdown or HTML content.
 */
@Component({
    name: 'ui-text',
})
export default class TextComponent extends Mixins(MagicConfigMixin) {
    /**
     * Text to be displayed in this element. It can have params written like
     * {{this}} for param substitution
     */
    @Prop(String) content!: string;

    /**
     * Whether to render the text as Markdown (true) or HTML (false).
     */
    @Prop(Boolean) isMarkdown!: boolean;

    /**
     * Params to be substituted for this particular element only. The general
     * substitution params should be set with `setInterpolationParams`.
     * This has priority over general params.
     */
    @Prop(Object) params!: Record<string, string>;

    /**
     * Tag name to use.
     */
    @Prop(String) tag!: string;

    /**
     * Text component comes with special styles as text used on offer pages.
     */
    @Prop(Boolean) offerText!: boolean;

    /**
     * Text component comes with special styles as text used on static pages.
     */
    @Prop(Boolean) contentText!: boolean;

    /**
     * Text component comes with special styles as text used on carousel.
     */
    @Prop(Boolean) carouselText!: boolean;

    /**
     * Text component comes with special styles as text used on marketing
     * banner.
     */
    @Prop(Boolean) marketingBannerText!: boolean;

    get processedText() {
        let interpolateParams = this.magicConfig.interpolationParams;
        if (this.params) {
            interpolateParams = { ...interpolateParams, ...this.params };
        }

        return interpolate(
            this.content || '',
            interpolateParams,
            this.isMarkdown,
        );
    }
}
