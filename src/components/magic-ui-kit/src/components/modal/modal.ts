import Vue from 'vue';
import { Prop, Component, Emit } from 'vue-property-decorator';
import { ModalSize } from '@gig/magic-common';

/**
 * Component used to display content (or page) in a modal dialog. By default
 * has action buttons back and close which allow the user to navigate. Also
 * displays title to indicate what component was injected into a modal dialog.
 */
@Component({
    name: 'ui-modal',
    inheritAttrs: false,
})
export default class ModalComponent extends Vue {
    /**
     * Modal dialog size
     */
    @Prop({ type: String, default: ModalSize.DEFAULT })
    size!: ModalSize;

    /**
     * Indicates whether to show close button inside a modal
     */
    @Prop(Boolean)
    dismissible!: boolean;

    /**
     * Indicates whether to show back arrow inside a modal
     */
    @Prop(Boolean)
    backArrow!: boolean;

    /**
     * Emitted when close button is clicked
     */
    @Emit('close')
    close() {
        return;
    }

    /**
     * Emitted when back arrow is clicked.
     */
    @Emit('back')
    goBack() {
        return;
    }
}
