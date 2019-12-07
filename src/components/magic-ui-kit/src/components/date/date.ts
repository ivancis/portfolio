import { validationMixin } from 'vuelidate';
import { Component, Mixins, Watch, Emit, Prop } from 'vue-property-decorator';
import { required } from 'vuelidate/lib/validators';
import {
    MagicConfigMixin,
    validDay,
    validMonth,
    validYear,
    validAge,
    isoDate,
    fromIsoDate,
} from '@gig/magic-common';
import { RuleDecl } from 'vue/types/options';

enum DateField {
    NONE,
    DAY,
    MONTH,
    YEAR,
}

/**
 * Component for the user to enter a date without time. It does not display
 * any calendar to pick it, just 3 inputs.
 * @remarks If using v-wmodel always use the modifier .lazy
 */
@Component({
    name: 'ui-date',
    validations(this: DateComponent) {
        const validations: RuleDecl = {
            fullDate: {
                day: {
                    required,
                    validDay,
                },
                month: {
                    required,
                    validMonth,
                },
                year: {
                    required,
                    validYear,
                },
            },
        };

        if (this.minimumAge) {
            validations.age = validAge(this.minimumAge, 'fullDate');
        }

        return validations;
    },
})
export default class DateComponent extends Mixins(
    validationMixin,
    MagicConfigMixin,
) {
    /**
     * Initial value of the field
     */
    @Prop(String) value!: string;

    /**
     * Minimum age (if any) to validate
     */
    @Prop(Number) minimumAge!: number;

    /**
     * Additional information field to be displayed
     * below the input.
     */
    @Prop(String) info!: string;

    fullDate: {
        day: string | null;
        month: string | null;
        year: string | null;
    } = {
        day: null,
        month: null,
        year: null,
    };

    currentField: DateField = DateField.NONE;
    DateField: typeof DateField = DateField;

    handleInput(
        field: keyof DateComponent['fullDate'],
        nextField: DateField,
        max: number,
    ) {
        if (this.canMoveNext(this.fullDate[field], max)) {
            this.currentField = nextField;
        }
    }

    handleDelete(
        event: CustomEvent,
        currentField: keyof DateComponent['fullDate'],
        previousField: DateField,
    ) {
        const field = this.fullDate[currentField];

        if (field === '' || field === null) {
            event.detail[0].preventDefault();
            this.currentField = previousField;
        }
    }

    get date() {
        const { $invalid: invalid } = this.$v.fullDate as any;
        if (!invalid && !this.$v.age) {
            const { day, month, year } = this.fullDate;
            return isoDate(day, month, year);
        }

        return null;
    }

    @Watch('value', { immediate: true })
    onValueChange(value: string) {
        if (!value || value === this.date) {
            return;
        }

        this.fullDate = fromIsoDate(value);
    }

    @Watch('date')
    @Emit('change')
    onDateChange(date: string | null) {
        return date;
    }

    get message() {
        if (this.$v.age) {
            return this.$t('ui-date.date.error', {
                minimumAge: this.minimumAge,
            });
        }

        return this.$t('ui-date.date.invalid');
    }

    private canMoveNext(strValue: string | null, maximum: number) {
        const value = parseInt(strValue || '', 10);
        const isMaxLength =
            (strValue || '').length >= maximum.toString().length;

        if (value === null || Number.isNaN(value)) {
            return false;
        }

        const highestPossibleValid = value * 10 < maximum;
        return (
            isMaxLength ||
            (value <= maximum && value > 0 && !highestPossibleValid)
        );
    }
}
