import { MagicConfigMixin } from '@gig/magic-common';
declare const RadioComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component to let the user select a boolean value. It is displayed as a
 * radio.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
export default class RadioComponent extends RadioComponent_base {
    /**
     * Value represented by this radio button.
     */
    value: string;
    /**
     * Whether the radio button is checked or not
     */
    checked: boolean;
    /**
     * Bold label variant.
     */
    bold: boolean;
    /**
     * Inline variant.
     */
    inline: boolean;
    onChange(): string;
    mounted(): void;
    register(): Element;
}
export {};
