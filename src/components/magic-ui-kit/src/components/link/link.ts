import { Component, Mixins, Prop } from 'vue-property-decorator';
import { MagicConfigMixin, IRouteLink } from '@gig/magic-common';

/**
 * Component that renders a link, also allows links to look like buttons.
 */
@Component({
    name: 'ui-link',
})
export default class LinkComponent extends Mixins(MagicConfigMixin) {
    /**
     * If true the link is shown as a button, otherwise as a normal anchor
     */
    @Prop(Boolean) button!: boolean;

    /**
     * Whether the link is disabled or not.
     */
    @Prop(Boolean) disabled!: boolean;

    /**
     * Route object indicating where this link should point to or
     * RoutablePage value itself
     */
    @Prop({
        validator(value) {
            return (
                typeof value === 'number' ||
                typeof value === 'string' ||
                typeof value === 'object'
            );
        },
    })
    to!: IRouteLink | string | number;

    clicked(event: MouseEvent) {
        if (!this.disabled) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
    }
}
