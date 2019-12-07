import Vue from 'vue';
/**
 * Component is used to show and hide content. Collapsing an element will
 * animate the height from it’s current value to 0. Given how CSS handles
 * animations max-height should be explicitly declared.
 */
export default class AccordionComponent extends Vue {
    /**
     * Whether to show the content initially.
     * When changed component will be updated accordingly
     */
    initiallyVisible: boolean;
    /**
     * Accordion variant with no animation.
     */
    noAnimation: boolean;
    /**
     * Accordion variant wide takes all available space.
     */
    wide: boolean;
    visible: boolean;
    toggle(): boolean;
    changeVisibility(): void;
}
