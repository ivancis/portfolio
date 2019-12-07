import { Mixins, Component, Prop, Emit, Watch } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

type HTMLMagicInput = Element & {
    checked: boolean;
    value: any;
    focused: boolean;
};

/**
 * Component that groups radios with different layout variants.
 */
@Component({
    name: 'ui-radio-group',
})
export default class RadioGroupComponent extends Mixins(MagicConfigMixin) {
    /**
     * selected radio value
     */
    @Prop(String) selected!: string;

    /**
     * Elements will get space between variant.
     */
    @Prop(Boolean)
    space!: boolean;

    /**
     * Aligned to left variant.
     */
    @Prop(Boolean)
    left!: boolean;

    /**
     * Display radios in a inline.
     */
    @Prop(Boolean)
    inline!: boolean;

    /**
     * Display radios in a column.
     */
    @Prop(Boolean)
    column!: boolean;

    /**
     * Value for the field
     */
    @Prop(String) value!: string;

    /**
     * Aligned to right variant.
     */
    @Prop(Boolean)
    right!: boolean;

    radios: Map<string, HTMLMagicInput> = new Map();
    currentFocused: number = -1;

    get radioElements() {
        return Array.from(this.radios.values());
    }

    register(e: CustomEvent) {
        const radio = e.detail[0];

        this.radios.set(radio.value, radio);

        radio.checked = this.value === radio.value;
    }

    @Watch('value', { immediate: true })
    valueChanged(newValue: string, oldValue: string) {
        if (newValue !== oldValue) {
            this.select(this.value);
        }
    }

    @Emit('changed')
    change(e: CustomEvent) {
        const value = e.detail[0];

        this.select(value);
        return value;
    }

    select(value: string) {
        this.radios.forEach((el) => {
            el.checked = el.value === value;
        });
    }

    setFocused(target: HTMLMagicInput) {
        this.currentFocused = this.radioElements.findIndex((radio) => {
            return radio === target;
        });
    }

    focusCurrent({ target }: { target: HTMLMagicInput | null }) {
        if (target) {
            this.setFocused(target);
        }
    }

    moveFocus(amount: -1 | 1, event: Event) {
        if (this.currentFocused === -1) {
            return;
        }

        let index = this.currentFocused + amount;
        const items = this.radioElements;

        if (!items.length) {
            return;
        }

        if (index < 0) {
            index = items.length - 1;
        }

        if (index >= items.length) {
            index = 0;
        }

        event.preventDefault();
        items.forEach((el, i) => {
            el.focused = i === index;
        });
    }
}
