import { Component, Mixins, Emit, Prop } from 'vue-property-decorator';
import { MagicConfigMixin } from '@gig/magic-common';

/**
 * Component that renders an input field for searching purposes. It has a
 * search button that allows the user to trigger action after clicking it or
 * hitting an enter key. Also has a clear button to clear the value of input
 * field after the user typed something.
 */
@Component({
    name: 'ui-search-field',
    inheritAttrs: false,
})
export default class SearchFieldComponent extends Mixins(MagicConfigMixin) {
    /**
     * Search query value
     */
    @Prop(String)
    value!: string;

    /**
     * Emitted when clear button has been clicked
     */
    @Emit('clear')
    onClear() {
        this.afterClear();
        return;
    }

    @Emit('input')
    @Emit('change')
    private afterClear() {
        return '';
    }
}
