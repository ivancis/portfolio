import { Component, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component used to indicate loading state after connection drop was detected.
 */
@Component({
    name: 'ui-reconnect-loader',
})
export default class ReconnectLoaderComponent extends Mixins(
    MagicConfigMixin,
) {}
