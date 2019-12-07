import { MagicConfigMixin } from '@gig/magic-common';
declare enum DateField {
    NONE = 0,
    DAY = 1,
    MONTH = 2,
    YEAR = 3
}
declare const DateComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component for the user to enter a date without time. It does not display
 * any calendar to pick it, just 3 inputs.
 * @remarks If using v-wmodel always use the modifier .lazy
 */
export default class DateComponent extends DateComponent_base {
    /**
     * Initial value of the field
     */
    value: string;
    /**
     * Minimum age (if any) to validate
     */
    minimumAge: number;
    /**
     * Additional information field to be displayed
     * below the input.
     */
    info: string;
    fullDate: {
        day: string | null;
        month: string | null;
        year: string | null;
    };
    currentField: DateField;
    DateField: typeof DateField;
    handleInput(field: keyof DateComponent['fullDate'], nextField: DateField, max: number): void;
    handleDelete(event: CustomEvent, currentField: keyof DateComponent['fullDate'], previousField: DateField): void;
    readonly date: string | null;
    onValueChange(value: string): void;
    onDateChange(date: string | null): string | null;
    private canMoveNext;
}
export {};
