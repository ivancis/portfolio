import { Mixins, Component, Emit, Prop, Watch } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component to let the user select a boolean value. It is displayed as a
 * radio.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
@Component({
    name: 'ui-radio',
})
export default class RadioComponent extends Mixins(MagicConfigMixin) {
    /**
     * Value represented by this radio button.
     */
    @Prop(String) value!: string;

    /**
     * Whether the radio button is checked or not
     */
    @Prop(Boolean) checked!: boolean;

    /**
     * Bold label variant.
     */
    @Prop(Boolean) bold!: boolean;

    /**
     * Inline variant.
     */
    @Prop(Boolean) inline!: boolean;

    /**
     * Focused, whether the radio should be focused
     * or not.
     */
    @Prop(Boolean) focused!: boolean;

    @Emit('change')
    onChange() {
        return this.value;
    }

    @Watch('focused', { immediate: true })
    onFocusChange() {
        if (this.focused) {
            (this.$refs.input as HTMLInputElement).focus();
        }
    }

    mounted() {
        this.$nextTick(() => {
            // Once element has been upgraded to a web component (next tick after mounted).
            this.register();
        });
    }

    @Emit('register')
    register() {
        return (this.$el.getRootNode() as ShadowRoot).host;
    }
}
