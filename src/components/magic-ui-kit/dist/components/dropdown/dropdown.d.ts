import { MagicConfigMixin } from '@gig/magic-common';
export interface IDropdownOption {
    name: string;
    value: unknown;
}
declare const DropdownComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component that allows the user to select one of many options. A replacement
 * for the normal HTML `select` element.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
export default class DropdownComponent extends DropdownComponent_base {
    /**
     * Values of the options of this dropdown
     */
    options: IDropdownOption[];
    /**
     * Currently selected value.
     */
    value: unknown;
    /**
     * Default text to be displayed. This will be a non-selectable option
     * with empty value
     */
    placeholder: string | boolean;
    /**
     * Control is disabled. This means not clickable nor selectable by tabbing
     * and visually it's grayed-out.
     */
    disabled: boolean;
    /**
     * Light visual variant of a control, to be used on dark backgrounds.
     */
    light: boolean;
    /**
     * Link visual variant of a control, to have it look like a link.
     */
    link: boolean;
    /**
     * Allow empty value to be selected.
     */
    allowEmpty: boolean;
    isFocused: boolean;
    changed(target: HTMLSelectElement): unknown;
    setFocused(isFocused: boolean): void;
    readonly hasValue: boolean;
    readonly placeholderLabel: string | boolean;
    readonly hasEmptyPlaceholder: boolean;
}
export {};
