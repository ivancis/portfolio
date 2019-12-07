import Vue from 'vue';
/**
 * Component that renders an input field type password by default. The user
 * can interact with this component by clicking on peek password icon. That
 * kind of interaction toggles input field type password to text and as an
 * result shows password to the user as a plain text.
 */
export default class PeekPasswordComponent extends Vue {
    /**
     * Represents whether the password is
     * shown or hidden.
     */
    isShown: boolean;
    /**
     * Whether the input should be focused
     */
    focused: boolean;
    /**
     * Toggles between showing and hiding the
     * password.
     */
    togglePassword(): void;
}
