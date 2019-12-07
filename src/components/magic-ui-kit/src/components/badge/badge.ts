import { Prop, Component, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component used as an indicator to show how many actions or items user has
 * to interact with.
 */
@Component({
    name: 'ui-badge',
})
export default class BadgeComponent extends Mixins(MagicConfigMixin) {
    /**
     * Makes the badge float on the top-right corner of parent.
     */
    @Prop(Boolean) floats!: boolean;
}
