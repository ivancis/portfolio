import Vue from 'vue';
/**
 * Component that renders an input field with defined type. Allows to have
 * a space for icons or render centered text inside of input field.
 */
export default class InputComponent extends Vue {
    /**
     * Input with space for icon.
     */
    icon: boolean;
    /**
     * Text inside of input is centered.
     */
    centered: boolean;
    /**
     * Focused, whether the input should be focused
     * or not.
     */
    focused: boolean;
    onChange(value: string): string;
    onFocusChange(): void;
    onInput(value: string): string;
    onErase(event: KeyboardEvent): KeyboardEvent;
}
