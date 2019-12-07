import { Component, Prop, Watch, Mixins } from 'vue-property-decorator';
import { InputComponent } from '../input';
import { MagicEmit, MuggleMixin, MagicConfigMixin } from '@gig/magic-common';

const isAndroid = /Android/.test(navigator.appVersion);

/**
 * Form field with a customizable slot that defaults to an input. It
 * has capabilities to show an error/warning message and an info
 * message. Use hasError, hasWarning and hasInfo to control their
 * display.
 */
@Component({
    name: 'ui-form-field',
    inheritAttrs: false,
    components: {
        'ui-input': InputComponent,
    },
})
export default class FormFieldComponent extends Mixins(
    MuggleMixin,
    MagicConfigMixin,
) {
    /**
     * Indicates error state of the form input
     */
    @Prop(Boolean)
    hasError!: boolean;

    /**
     * Indicates success state of the form input
     */
    @Prop(Boolean)
    hasSuccess!: boolean;

    /**
     * Indicates warning state of the form input
     */
    @Prop(Boolean)
    hasWarning!: boolean;

    /**
     * Indicates info state of the form input
     */
    @Prop(Boolean)
    hasInfo!: boolean;

    /**
     * If true an error status will be immediately shown no matter what
     */
    @Prop(Boolean)
    forceError!: boolean;

    focused = false;

    /**
     * Indicates if a problem (error or warning) was present when
     * the input lost focus last time. It is only updated to true
     * on blur, but it's updated to false immediately.
     */
    hadProblem = false;

    /**
     * Error message shown below the input
     */
    @Prop(String)
    message!: string;

    /**
     * Information shown below the input
     */
    @Prop(String)
    info!: string;

    /**
     * Input label
     */
    @Prop(String)
    label!: string;

    /**
     * Variant with no margin.
     */
    @Prop(Boolean)
    noMargin!: boolean;

    /**
     * Variant with centered content.
     */
    @Prop(Boolean)
    centered!: boolean;

    /**
     * Variant for no validation icon.
     */
    @Prop(Boolean)
    noIcon!: boolean;

    get hasMessage(): boolean {
        return !!this.message;
    }

    get hasProblem(): boolean {
        return this.hasError || this.hasWarning || this.forceError;
    }

    get shouldDisplayMessage(): boolean {
        return (
            ((this.hasProblem && (this.hadProblem || !this.focused)) ||
                this.forceError) &&
            this.$attrs.disabled === undefined
        );
    }

    get hasValidationState() {
        return this.hasSuccess || this.hasError || this.hasWarning;
    }

    mounted() {
        const { customElement } = this.$root.$options as any;
        if (!customElement) {
            return;
        }

        customElement.addEventListener('focus', () => {
            const input = this.$refs.input as HTMLElement;
            if (!input) {
                return;
            }
            input.focus();
        });
    }

    onBlur() {
        this.hadProblem = this.hasProblem;
        this.focused = false;
    }

    @Watch('hasProblem')
    onHasProblemChanged(val: boolean) {
        if (!val) {
            this.hadProblem = false;
        } else if (!this.focused) {
            // problems that appear when the field doesn't have the focus
            // appear right away
            this.hadProblem = true;
        }
    }

    onFocus({ target }: { target: Element }) {
        this.focused = true;
        const focused =
            (target.shadowRoot && target.shadowRoot.activeElement) ||
            document.activeElement;

        if (isAndroid && focused) {
            // Android devices do not always correctly scroll to element
            // this handler essentially ensures that the input always shows
            // centered on page.
            setTimeout(() => {
                const { height, top } = focused.getBoundingClientRect();
                const centerY = window.scrollY + top + height / 2;
                window.scrollTo(0, centerY - window.innerHeight / 2);
            }, 200);
        }
    }

    /**
     * Re-emitted `input` event of the input inside form field.
     * Provides current input value
     */
    @MagicEmit('input')
    onInput(event: CustomEvent) {
        return this.getCustomEventValue(event);
    }

    /**
     * Re-emitted `change` event of the input inside form field.
     * Provides current input value
     */
    @MagicEmit('change')
    onChange(event: CustomEvent) {
        return this.getCustomEventValue(event);
    }

    getCustomEventValue(event: CustomEvent | Event) {
        const e = event as CustomEvent;
        if (e.detail && e.detail[0]) {
            return e.detail[0];
        }

        const target = event.target as HTMLInputElement;
        if (target && target.value) {
            return target.value;
        }

        /**
         * if this wraps a select
         * none of the above will return
         */
        return null;
    }
}
