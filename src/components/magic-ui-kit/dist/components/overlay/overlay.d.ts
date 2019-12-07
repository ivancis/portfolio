import Vue from 'vue';
import { IModal } from '@gig/magic-common';
export default class OverlayComponent extends Vue {
    modals: any;
    /**
     * Removes the last modal added
     */
    overlayClick(): void;
    close(modal: IModal): void;
}
