import { Component, Prop, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component used to indicate progress in some process.
 */
@Component({
    name: 'ui-progress-bar',
})
export default class ProgressBarComponent extends Mixins(MagicConfigMixin) {
    /**
     * Current progress of the progress bar (0 - 100)
     */
    @Prop({ type: Number, default: 0 }) progress!: number;

    /**
     * Make sure progress is a number between 0 and 100
     */
    get progressValue() {
        let progress = Math.round(Number(this.progress) || 0);
        if (progress < 0) {
            progress = 0;
        }
        if (progress > 100) {
            progress = 100;
        }
        return progress;
    }

    get isComplete() {
        return this.progressValue === 100;
    }

    get styles() {
        if (!this.progressValue) {
            return {};
        }

        return {
            '--magic-progress-bar-width': `${this.progressValue}%`,
        };
    }
}
