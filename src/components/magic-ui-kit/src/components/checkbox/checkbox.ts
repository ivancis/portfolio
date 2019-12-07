import { Mixins, Component, Emit, Prop } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component to let the user select a boolean value. It is displayed as
 * a checkbox.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
@Component({
    name: 'ui-checkbox',
})
export default class CheckboxComponent extends Mixins(MagicConfigMixin) {
    /**
     * Initial value of the checkbox.
     * @type {boolean}
     */
    @Prop(Boolean) value!: boolean;

    /**
     * Bold label variant.
     */
    @Prop(Boolean) bold!: boolean;

    /**
     * Inline variant.
     */
    @Prop(Boolean) inline!: boolean;

    /**
     * No label variant.
     */
    @Prop(Boolean) noLabel!: boolean;

    /**
     * No margin variant.
     */
    @Prop(Boolean) noMargin!: boolean;

    /**
     * Treat control like a radio button where control can only
     * be toggled to true and programmatically toggled to false.
     */
    @Prop(Boolean) radio!: boolean;

    /**
     * Toggles the indeterminate state on the checkbox element
     */
    @Prop(Boolean) indeterminate!: boolean;

    handleChange(event: Event) {
        if (!(event.target instanceof HTMLInputElement)) {
            return;
        }

        const isChecked = event.target!.checked;

        if (this.radio && isChecked === false) {
            event.target.checked = true;
            event.preventDefault();
            return;
        }

        this.onChange(isChecked);
    }

    @Emit('change')
    onChange(isChecked: boolean) {
        return isChecked;
    }
}
