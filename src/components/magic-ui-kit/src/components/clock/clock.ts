import Vue from 'vue';
import { Component } from 'vue-property-decorator';

/**
 * Component displays current time.
 */
@Component({
    name: 'ui-clock',
    inheritAttrs: false,
})
export default class ClockComponent extends Vue {
    hours = new Date().getHours();
    minutes = new Date().getMinutes();

    created() {
        setInterval(() => {
            const now = new Date();
            this.hours = now.getHours();
            this.minutes = now.getMinutes();
        }, 1000);
    }

    get formattedHours() {
        return this.pad(this.hours);
    }

    get formattedMinutes() {
        return this.pad(this.minutes);
    }

    private pad(n: number) {
        if (n < 10) {
            return '0' + n;
        }
        return `${n}`;
    }
}
