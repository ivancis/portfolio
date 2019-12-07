import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

/**
 * Component renders a tooltip without a close button. Only way to interact by
 * the user is by hovering the area to trigger a tooltip. To close a tooltip
 * user can hover out the area that triggered a tooltip.
 */
@Component({
    name: 'ui-tooltip',
    inheritAttrs: false,
})
export default class TooltipComponent extends Vue {
    @Prop(String)
    label!: string;

    isOpen: boolean = false;

    openTooltip() {
        this.isOpen = true;
    }

    closeTooltip() {
        this.isOpen = false;
    }
}
