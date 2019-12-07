import { Mixins, Component, Prop, Emit } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

export interface IDropdownOption {
    name: string;
    value: unknown;
}

/**
 * Component that allows the user to select one of many options. A replacement
 * for the normal HTML `select` element.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
@Component({
    name: 'ui-dropdown',
})
export default class DropdownComponent extends Mixins(MagicConfigMixin) {
    /**
     * Control has ellipsis. This means that currently selected option name
     * will not exceed a max width of pixels.
     */
    @Prop(Boolean) ellipsis!: boolean;

    /**
     * Values of the options of this dropdown
     */
    @Prop({
        validator: (options: IDropdownOption[]) => {
            if (!options || !Array.isArray(options)) {
                return true;
            }

            return options.every(
                ({ name, value }) => !!name && value !== undefined,
            );
        },
    })
    options!: IDropdownOption[];

    /**
     * Currently selected value.
     */
    @Prop() value!: unknown;

    /**
     * Default text to be displayed. This will be a non-selectable option
     * with empty value
     */
    @Prop({
        validator: (value: unknown) => {
            return typeof value === 'string' || typeof value === 'boolean';
        },
        default: false,
    })
    placeholder!: string | boolean;

    /**
     * Control is disabled. This means not clickable nor selectable by tabbing
     * and visually it's grayed-out.
     */
    @Prop(Boolean) disabled!: boolean;

    /**
     * Light visual variant of a control, to be used on dark backgrounds.
     */
    @Prop(Boolean) light!: boolean;

    /**
     * Link visual variant of a control, to have it look like a link.
     */
    @Prop(Boolean) link!: boolean;

    /**
     * Allow empty value to be selected.
     */
    @Prop(Boolean) allowEmpty!: boolean;

    isFocused: boolean = false;

    @Emit('change')
    changed(target: HTMLSelectElement) {
        target.blur();
        return this.options[+target.value].value;
    }

    setFocused(isFocused: boolean) {
        this.isFocused = isFocused;
    }

    get hasValue() {
        return (
            this.value &&
            (this.options || []).some((option) => {
                return option.value === this.value;
            })
        );
    }

    get placeholderLabel() {
        return this.hasEmptyPlaceholder ? '' : this.placeholder;
    }

    get hasEmptyPlaceholder() {
        return ['true', '', 'placeholder', true].includes(this.placeholder);
    }

    get currentOption() {
        const selected = this.options.find((option) => {
            return option.value === this.value;
        });

        if (!selected) {
            return this.placeholderLabel;
        }

        return selected.name;
    }
}
