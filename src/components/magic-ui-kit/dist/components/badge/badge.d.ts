import { MagicConfigMixin } from '@gig/magic-common';
declare const BadgeComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used as an indicator to show how many actions or items user has
 * to interact with.
 */
export default class BadgeComponent extends BadgeComponent_base {
    /**
     * Makes the badge float on the top-right corner of parent.
     */
    floats: boolean;
}
export {};
