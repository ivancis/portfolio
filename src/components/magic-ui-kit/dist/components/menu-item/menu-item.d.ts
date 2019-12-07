import { IRouteLink, MagicConfigMixin } from '@gig/magic-common';
declare const MenuItemComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
export default class MenuItemComponent extends MenuItemComponent_base {
    /**
     * Toggle active css class
     */
    isActive: boolean;
    /**
     * Sets the badge value, displayed next to the item content.
     * Hidden if it's not set
     */
    badge: number | boolean;
    /**
     * Route object indicating where this link should point to or
     * RoutablePage value itself
     */
    link: IRouteLink | string | number;
    readonly badgeText: number | "";
}
export {};
