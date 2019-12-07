import Vue from 'vue';
import { IModalOptions } from '@gig/magic-common';
/**
 * Component used to display content (or page) in a modal dialog. By default
 * has action buttons back and close which allow the user to navigate. Also
 * displays title to indicate what component was injected into a modal dialog.
 */
export default class ModalComponent extends Vue {
    options: IModalOptions;
    close(): void;
    goBack(): void;
}
