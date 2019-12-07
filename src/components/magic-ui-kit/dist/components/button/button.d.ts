import { MagicConfigMixin, IRouteLink } from '@gig/magic-common';
declare const ButtonComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used as call to action element which comes in various decorative
 * variants.
 */
export default class ButtonComponent extends ButtonComponent_base {
    variant: string;
    buttonTag: string;
    /**
     * Button with icon variant.
     */
    icon: boolean;
    /**
     * Hollow button variant with no background and border only.
     */
    hollow: boolean;
    /**
     * Round button variant is used with icons mostly.
     */
    round: boolean;
    /**
     * Small button variant is with smaller font, paddings etc.
     */
    small: boolean;
    /**
     * Tiny button variant is with even smaller font, paddings etc.
     */
    tiny: boolean;
    /**
     * Wide button variant occupies available space.
     */
    wide: boolean;
    /**
     * No margin button variant has no margins.
     */
    noMargin: boolean;
    /**
     * Less margin button variant has half of standard margin.
     */
    lessMargin: boolean;
    /**
     * No padding button variant has no paddings.
     */
    noPadding: boolean;
    /**
     * Less padding button variant has half of standard padding.
     */
    lessPadding: boolean;
    /**
     * Add space button variant adds margin on the sides.
     */
    addSpace: boolean;
    /**
     * Loading button variant has loading icon inside.
     */
    loading: boolean;
    /**
     * The link to link to. If Number/String is given it's presumed to be a
     * RouteablePage enum value.
     */
    to: IRouteLink | number | string;
    readonly buttonVariant: string;
}
export {};
