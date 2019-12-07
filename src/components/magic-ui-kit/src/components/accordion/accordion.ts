import Vue from 'vue';
import { Prop, Component, Emit, Watch } from 'vue-property-decorator';

/**
 * Component is used to show and hide content. Collapsing an element will
 * animate the height from it’s current value to 0. Given how CSS handles
 * animations max-height should be explicitly declared.
 */
@Component({
    name: 'ui-accordion',
    inheritAttrs: false,
})
export default class AccordionComponent extends Vue {
    /**
     * Whether to show the content initially.
     * When changed component will be updated accordingly
     */
    @Prop({ type: Boolean, default: false }) initiallyVisible!: boolean;

    /**
     * Accordion variant with no animation.
     */
    @Prop({ type: Boolean, default: false }) noAnimation!: boolean;

    /**
     * Accordion variant wide takes all available space.
     */
    @Prop({ type: Boolean, default: false }) wide!: boolean;

    visible = false;

    @Emit('toggle')
    toggle() {
        this.visible = !this.visible;
        return this.visible;
    }

    @Watch('initiallyVisible', { immediate: true })
    changeVisibility() {
        if (
            (this.initiallyVisible && !this.visible) ||
            (!this.initiallyVisible && this.visible)
        ) {
            this.toggle();
        }
    }
}
