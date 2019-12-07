import { Component, Prop, Emit, Watch, Mixins } from 'vue-property-decorator';
import { MagicEmit } from '@gig/magic-common/dist/util';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component that renders an input field with defined type. Allows to have
 * a space for icons or render centered text inside of input field.
 */
@Component({
    name: 'ui-input',
    inheritAttrs: false,
})
export default class InputComponent extends Mixins(MagicConfigMixin) {
    /**
     * Input with space for icon.
     */
    @Prop(Boolean) icon!: boolean;

    /**
     * Text inside of input is centered.
     */
    @Prop(Boolean) centered!: boolean;

    /**
     * Focused, whether the input should be focused
     * or not.
     */
    @Prop(Boolean) focused!: boolean;

    @MagicEmit('change')
    onChange(event: Event) {
        const target = event.target as HTMLInputElement;
        return target.value;
    }

    @Watch('focused', { immediate: true })
    onFocusChange() {
        if (this.focused) {
            (this.$el as HTMLInputElement).focus();
        }
    }

    @MagicEmit('input')
    onInput(event: Event) {
        const target = event.target as HTMLInputElement;
        return target.value;
    }

    @Emit('erase')
    onErase(event: KeyboardEvent) {
        return event;
    }
}
