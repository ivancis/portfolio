import { MagicConfigMixin, IRouteLink } from '@gig/magic-common';
declare const LinkComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component that renders a link, also allows links to look like buttons.
 */
export default class LinkComponent extends LinkComponent_base {
    /**
     * If true the link is shown as a button, otherwise as a normal anchor
     */
    button: boolean;
    /**
     * Route object indicating where this link should point to or
     * RoutablePage value itself
     */
    to: IRouteLink | string | number;
}
export {};
