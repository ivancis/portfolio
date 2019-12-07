import { MagicConfigMixin } from '@gig/magic-common';
declare const BoxComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used as an decorative box in which content goes.
 */
export default class BoxComponent extends BoxComponent_base {
    /**
     * Elevation box variant adds shadow by giving a number.
     */
    elevation: number;
    /**
     * No bottom padding box variant has no padding from bottom. This allows
     * to keep the flow of the form for example.
     */
    noBottomPadding: boolean;
    /**
     * Add bottom margin box variant adds margin form bottom.
     */
    addBottomMargin: boolean;
    /**
     * Add side padding box variant adds padding from left and right.
     */
    addSidePadding: boolean;
    readonly elevationClass: string;
}
export {};
