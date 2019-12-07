import { MagicConfigMixin } from '@gig/magic-common';
declare const NotificationComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component shows notifications to the user. Comes in few different variants
 * that indicate what type of notification is shown. Also has an option to
 * force interaction from the user side where you choose if it's dismissible
 * or not.
 */
export default class NotificationComponent extends NotificationComponent_base {
    /**
     * Whether the notification is dismissible or not.
     */
    dismissible: boolean;
    /**
     * Notification content.
     */
    content: string | Element | null;
    /**
     * Variant of the notification.
     */
    variant: string;
    mounted(): void;
    contentChanged(): void;
    close(): void;
    readonly iconVariant: "close-solid" | "info-solid" | "tick-solid" | "alert-solid" | "icon-content";
}
export {};
