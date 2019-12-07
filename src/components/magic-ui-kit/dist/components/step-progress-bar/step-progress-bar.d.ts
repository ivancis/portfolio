import { MagicConfigMixin } from '@gig/magic-common';
declare const StepProgressBarComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used to indicate how many steps are needed to finish the user flow
 * in some process.
 */
export default class StepProgressBarComponent extends StepProgressBarComponent_base {
    steps: number;
    currentStep: number;
    stepClass(step: number): "step--done" | "step--current" | undefined;
}
export {};
