import { MagicConfigMixin } from '@gig/magic-common';
declare const ProgressBarComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used to indicate progress in some process.
 */
export default class ProgressBarComponent extends ProgressBarComponent_base {
    /**
     * Current progress of the progress bar (0 - 100)
     */
    progress: number;
    /**
     * Make sure progress is a number between 0 and 100
     */
    readonly progressValue: number;
    readonly isComplete: boolean;
}
export {};
