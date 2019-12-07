import { Mixins, Component, Emit, Prop } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component to let the user select a boolean value. It is displayed as a
 * switch.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
@Component({
    name: 'ui-switch',
    inheritAttrs: false,
})
export default class SwitchComponent extends Mixins(MagicConfigMixin) {
    /**
     * Bindable value of the switch control
     */
    @Prop(Boolean)
    value!: boolean;

    /**
     * Control is aligned to the right
     */
    @Prop(Boolean)
    right!: boolean;

    /**
     * Emitted when control state has changed.
     * Provides value indicating whether the control is switched on or off
     */
    @Emit('change')
    onChange(val: boolean) {
        return val;
    }
}
