import { Component, Mixins, Prop } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component used to indicate how many steps are needed to finish the user flow
 * in some process.
 */
@Component({
    name: 'ui-step-progress-bar',
})
export default class StepProgressBarComponent extends Mixins(MagicConfigMixin) {
    /**
     * Number of steps to display
     */
    @Prop(Number) steps!: number;

    /**
     * Step number to be marked as current.
     * Previous steps will be marked as done
     */
    @Prop({ type: Number, default: 1 }) currentStep!: number;

    stepClass(step: number) {
        if (step < this.currentStep) {
            return 'step--done';
        } else if (step === this.currentStep) {
            return 'step--current';
        }
    }
}
