import { Component, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component used to indicate loading state.
 */
@Component({
    name: 'ui-loader',
})
export default class LoaderComponent extends Mixins(MagicConfigMixin) {}
