import { validationMixin } from 'vuelidate';
import { Component, Mixins, Watch, Emit, Prop } from 'vue-property-decorator';
import { required, maxLength, minLength } from 'vuelidate/lib/validators';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * @remarks If using v-wmodel always use the modifier .lazy
 */
@Component({
    name: 'ui-code-entry',
    validations: {
        digits: {
            $each: {
                digit: {
                    required,
                    minLength: minLength(1),
                    maxLength: maxLength(1),
                },
            },
        },
    },
})
export default class CodeEntryComponent extends Mixins(
    validationMixin,
    MagicConfigMixin,
) {
    /**
     * Length of the code input.
     */
    @Prop({ type: Number, default: 4 }) length!: number;

    /**
     * Value to synchronize with.
     */
    @Prop(String) value!: string;

    digits: Array<{ digit: string | null }> = [];

    currentField: number | null = null;

    handleInput(index: number) {
        const value = this.digits[index].digit || '';
        const nextIndex = index + 1;

        if (
            this.digits.length > nextIndex &&
            value.length === 1 &&
            !isNaN(+value)
        ) {
            this.currentField = nextIndex;
        }
    }

    handleDelete(event: CustomEvent, index: number) {
        const field = this.digits[index].digit;
        const prevIndex = index - 1;

        if (prevIndex >= 0 && (field === '' || field === null)) {
            event.detail[0].preventDefault();
            this.currentField = prevIndex;
        }
    }

    @Watch('length', { immediate: true })
    digitLengthChange() {
        // TODO: Maybe modify the behavior so the below isn't an issue?
        // NOTE: This method must be before `onValueChange` to ensure that
        // the watcher is executed before the length change.

        // Fill then map to generate a new object per index.
        this.digits = new Array(this.length)
            .fill(null)
            .map(() => ({ digit: null }));
    }

    @Watch('value', { immediate: true })
    onValueChange(value: string | null | undefined) {
        if (value === null || value === undefined) {
            return;
        }

        this.digits = value
            .split('')
            .map((digit) => ({ digit }))
            .concat(Array(this.length - value.length).fill({ digit: null }));
    }

    @Watch('digits', { deep: true })
    @Emit('change')
    digitsChanged(digits: CodeEntryComponent['digits']) {
        const code = digits.map(({ digit }) => digit).join('');
        return code;
    }
}
