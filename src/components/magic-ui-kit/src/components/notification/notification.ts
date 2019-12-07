import { Component, Mixins, Emit, Prop, Watch } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component shows notifications to the user. Comes in few different variants
 * that indicate what type of notification is shown. Also has an option to
 * force interaction from the user side where you choose if it's dismissible
 * or not.
 */
@Component({
    name: 'ui-notification',
})
export default class NotificationComponent extends Mixins(MagicConfigMixin) {
    /**
     * Whether the notification is dismissible or not.
     */
    @Prop(Boolean) dismissible!: boolean;

    /**
     * Notification content.
     */
    @Prop({ type: [String, Element], default: null })
    content!: string | Element | null;

    /**
     * Variant of the notification.
     */
    @Prop(String) variant!: string;

    mounted() {
        this.contentChanged();
    }

    @Watch('content')
    contentChanged() {
        const contentElement = this.$refs.content as Element;
        if (typeof this.content === 'string') {
            contentElement.innerHTML = this.content;
        } else if (this.content) {
            while (contentElement.firstChild) {
                contentElement.removeChild(contentElement.firstChild);
            }
            contentElement.appendChild(this.content);
        }
    }

    @Emit('close')
    close() {
        return;
    }

    get iconVariant() {
        switch (this.variant) {
            case 'info':
                return 'info-solid';
            case 'success':
                return 'tick-solid';
            case 'alert':
                return 'alert-solid';
            case 'error':
                return 'close-solid';
            default:
                return 'icon-content';
        }
    }
}
