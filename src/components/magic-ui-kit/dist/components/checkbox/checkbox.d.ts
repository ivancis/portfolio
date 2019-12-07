import { MagicConfigMixin } from '@gig/magic-common';
declare const CheckboxComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component to let the user select a boolean value. It is displayed as
 * a checkbox.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
export default class CheckboxComponent extends CheckboxComponent_base {
    /**
     * Initial value of the checkbox.
     * @type {boolean}
     */
    value: boolean;
    /**
     * Bold label variant.
     */
    bold: boolean;
    /**
     * Inline variant.
     */
    inline: boolean;
    /**
     * No label variant.
     */
    noLabel: boolean;
    /**
     * No margin variant.
     */
    noMargin: boolean;
    /**
     * Treat control like a radio button where control can only
     * be toggled to true and programmatically toggled to false.
     */
    radio: boolean;
    /**
     * Toggles the indeterminate state on the checkbox element
     */
    indeterminate: boolean;
    handleChange(event: Event): void;
    onChange(isChecked: boolean): boolean;
}
export {};
