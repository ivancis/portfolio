import { MagicConfigMixin } from '@gig/magic-common';
import '../icon';
declare const StickyTooltipComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component renders a tooltip with a close button inside. Tooltip allows the
 * user to interact in two ways: by clicking on a close button or clicking
 * outside to close a tooltip.
 */
export default class StickyTooltipComponent extends StickyTooltipComponent_base {
    isOpen: boolean;
    handler: StickyTooltipComponent['onDocumentClick'] | null;
    openTooltip(): void;
    closeTooltip(): void;
    onDocumentClick(event: Event): void;
}
export {};
