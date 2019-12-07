import { Mixins, Prop, Component } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component used as an decorative box in which content goes.
 */
@Component({
    name: 'ui-box',
})
export default class BoxComponent extends Mixins(MagicConfigMixin) {
    /**
     * Elevation box variant adds shadow by giving a number.
     */
    @Prop({
        default: 0,
        type: Number,
    })
    elevation!: number;

    /**
     * No bottom padding box variant has no padding from bottom. This allows
     * to keep the flow of the form for example.
     */
    @Prop(Boolean) noBottomPadding!: boolean;

    /**
     * Add bottom margin box variant adds margin form bottom.
     */
    @Prop(Boolean) addBottomMargin!: boolean;

    get elevationClass() {
        if (this.elevation <= 0 || this.elevation > 5) {
            return '';
        }
        return `box--elevation-${this.elevation}`;
    }
}
