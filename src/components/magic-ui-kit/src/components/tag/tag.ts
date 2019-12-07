import { Component, Mixins } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component renders a small tag defined in CMS as a game configuration on a
 * particular game in the games list.
 */
@Component({
    name: 'ui-tag',
})
export default class TagComponent extends Mixins(MagicConfigMixin) {}
