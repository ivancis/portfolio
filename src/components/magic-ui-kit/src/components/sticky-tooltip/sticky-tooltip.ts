import { Component, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';
import '../icon';

// iOS doesn't fully support click on document
const documentClickEvent =
    'ontouchstart' in document.documentElement ? 'touchstart' : 'click';

/**
 * Component renders a tooltip with a close button inside. Tooltip allows the
 * user to interact in two ways: by clicking on a close button or clicking
 * outside to close a tooltip.
 */
@Component({
    name: 'ui-sticky-tooltip',
})
export default class StickyTooltipComponent extends Mixins(MagicConfigMixin) {
    isOpen = false;
    handler: StickyTooltipComponent['onDocumentClick'] | null = null;

    openTooltip() {
        this.handler = this.onDocumentClick.bind(this);
        document.addEventListener(documentClickEvent, this.handler);

        this.isOpen = true;
    }

    closeTooltip() {
        if (this.handler) {
            document.removeEventListener(documentClickEvent, this.handler);
        }

        this.isOpen = false;
    }

    onDocumentClick(event: Event) {
        const targets = event.composedPath
            ? event.composedPath()
            : [event.target];
        const isTooltip = targets.some((target) => target === this.$el);

        if (!isTooltip) {
            this.closeTooltip();
        }
    }
}
