import { MagicConfigMixin } from '@gig/magic-common';
declare const CodeEntryComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * @remarks If using v-wmodel always use the modifier .lazy
 */
export default class CodeEntryComponent extends CodeEntryComponent_base {
    /**
     * Length of the code input.
     */
    length: number;
    /**
     * Value to synchronize with.
     */
    value: string;
    digits: Array<{
        digit: string | null;
    }>;
    currentField: number | null;
    handleInput(index: number): void;
    handleDelete(event: CustomEvent, index: number): void;
    onValueChange(value: string | null | undefined): void;
    digitLengthChange(): void;
    digitsChanged(digits: CodeEntryComponent['digits']): string;
}
export {};
