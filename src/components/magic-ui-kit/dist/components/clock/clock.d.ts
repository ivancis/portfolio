import Vue from 'vue';
/**
 * Component displays current time.
 */
export default class ClockComponent extends Vue {
    hours: number;
    minutes: number;
    created(): void;
    readonly formattedHours: string;
    readonly formattedMinutes: string;
    private pad;
}
