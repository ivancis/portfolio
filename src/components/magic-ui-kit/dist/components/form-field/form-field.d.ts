import Vue from 'vue';
/**
 * Form field with a customizable slot that defaults to an input. It
 * has capabilities to show an error/warning message and an info
 * message. Use hasError, hasWarning and hasInfo to control their
 * display.
 */
export default class FormFieldComponent extends Vue {
    hasError: boolean;
    hasSuccess: boolean;
    hasWarning: boolean;
    hasInfo: boolean;
    /**
     * If true an error status will be immediately shown no matter what
     */
    forceError: boolean;
    focused: boolean;
    /**
     * Indicates if a problem (error or warning) was present when
     * the input lost focus last time. It is only updated to true
     * on blur, but it's updated to false immediately.
     */
    hadProblem: boolean;
    message: string;
    info: string;
    label: string;
    /**
     * Variant with no margin.
     */
    noMargin: boolean;
    /**
     * Variant with centered content.
     */
    centered: boolean;
    /**
     * Variant for no validation icon.
     */
    noIcon: boolean;
    readonly hasMessage: boolean;
    readonly hasProblem: boolean;
    readonly shouldDisplayMessage: boolean;
    readonly hasValidationState: boolean;
    mounted(): void;
    onBlur(): void;
    onHasProblemChanged(val: boolean): void;
    onInput(event: CustomEvent): any;
    onChange(event: CustomEvent): any;
    getCustomEventValue(event: CustomEvent | Event): any;
}
