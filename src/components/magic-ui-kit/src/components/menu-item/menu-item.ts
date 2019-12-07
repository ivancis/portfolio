import { Prop, Component, Mixins } from 'vue-property-decorator';
import { IRouteLink, MagicConfigMixin } from '@gig/magic-common';

@Component({
    name: 'ui-menu-item',
})
export default class MenuItemComponent extends Mixins(MagicConfigMixin) {
    /**
     * Toggle active css class
     */
    @Prop(Boolean)
    isActive!: boolean;

    /**
     * Sets the badge value, displayed next to the item content.
     * Hidden if it's not set
     */
    @Prop({
        validator(value) {
            return typeof value === 'boolean' || typeof value === 'number';
        },
    })
    badge!: number | boolean;

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
    link!: IRouteLink | string | number;

    get badgeText() {
        if (typeof this.badge === 'boolean') {
            return '';
        }
        return this.badge;
    }
}
