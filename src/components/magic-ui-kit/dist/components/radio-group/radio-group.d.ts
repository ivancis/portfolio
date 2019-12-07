import { MagicConfigMixin } from '@gig/magic-common';
declare const RadioGroupComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component that groups radios with different layout variants.
 */
export default class RadioGroupComponent extends RadioGroupComponent_base {
    /**
     * selected radio value
     */
    selected: string;
    /**
     * Elements will get space between variant.
     */
    space: boolean;
    /**
     * Aligned to left variant.
     */
    left: boolean;
    /**
     * Display radios in a inline.
     */
    inline: boolean;
    /**
     * Display radios in a column.
     */
    column: boolean;
    /**
     * Value for the field
     */
    value: string;
    /**
     * Aligned to right variant.
     */
    right: boolean;
    radios: Map<string, HTMLInputElement>;
    register(e: CustomEvent): void;
    valueChanged(newValue: string, oldValue: string): void;
    change(e: CustomEvent): any;
    select(value: string): void;
}
export {};
