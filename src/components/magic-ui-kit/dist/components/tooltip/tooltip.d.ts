import Vue from 'vue';
/**
 * Component renders a tooltip without a close button. Only way to interact by
 * the user is by hovering the area to trigger a tooltip. To close a tooltip
 * user can hover out the area that triggered a tooltip.
 */
export default class TooltipComponent extends Vue {
    label: string;
    isOpen: boolean;
    openTooltip(): void;
    closeTooltip(): void;
}
