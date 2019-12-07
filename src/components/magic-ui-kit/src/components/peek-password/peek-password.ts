import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
import { MuggleMixin, MagicConfigMixin } from '@gig/magic-common';
import { FormFieldComponent } from '../form-field';

/**
 * Component that renders an input field type password by default. The user
 * can interact with this component by clicking on peek password icon. That
 * kind of interaction toggles input field type password to text and as an
 * result shows password to the user as a plain text.
 */
@Component({
    name: 'ui-peek-password',
    inheritAttrs: false,
    components: {
        'ui-form-field': FormFieldComponent,
    },
})
export default class PeekPasswordComponent extends Mixins(
    MuggleMixin,
    MagicConfigMixin,
) {
    /**
     * For external control, the shown attribute is used
     * to set the hidden/not-hidden state.
     */
    @Prop({ type: Boolean, default: false })
    shown!: boolean;

    /**
     * Represents whether the password is
     * shown or hidden.
     */
    isShown: boolean = false;

    /**
     * Whether the input should be focused
     */
    focused: boolean = false;

    /**
     * Toggles between showing and hiding the
     * password.
     */
    togglePassword() {
        this.isShown = !this.isShown;

        this.focused = false;
        this.$nextTick(() => {
            this.focused = true;
        });
    }

    @Watch('shown', { immediate: true })
    onShownChange(shown: boolean) {
        this.isShown = shown;
    }
}
