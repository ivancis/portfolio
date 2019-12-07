import { Component, Mixins } from 'vue-property-decorator';
import {
    isSpecialKey,
    isNumericKey,
    isTextSelected,
    MagicConfigMixin,
} from '@gig/magic-common';

/**
 * Component that renders an input field type number.
 */
@Component({
    name: 'ui-number',
    inheritAttrs: true,
})
export default class NumberComponent extends Mixins(MagicConfigMixin) {
    get pattern() {
        const { pattern } = this.$attrs;

        if (pattern) {
            return pattern;
        }

        return '\\d*';
    }

    onKeyDown(event: KeyboardEvent) {
        // ignore all keydown events that are part of composition
        // @ts-ignore
        if (event.isComposing || event.keyCode === 229) {
            return;
        }

        const currValue = this.getRealTarget(event).value || '';
        const maxLength = this.$attrs.maxlength
            ? parseInt(this.$attrs.maxlength, 10)
            : -1;
        const isFieldComplete =
            currValue.length === maxLength && !isTextSelected(currValue);

        const isInRange = () => {
            if (this.$attrs.min && this.$attrs.max) {
                const min = parseInt(this.$attrs.min, 10);
                const max = parseInt(this.$attrs.max, 10);
                const value = parseInt(
                    `${currValue}${String.fromCharCode(event.keyCode)}`,
                    10,
                );
                return value >= min && value <= max;
            }

            return true;
        };

        if (
            !isSpecialKey(event) &&
            (!isNumericKey(event) || !isInRange() || isFieldComplete)
        ) {
            event.preventDefault();
        }
    }

    getRealTarget(event: Event): HTMLInputElement {
        if (!event.composedPath) {
            return event.target as HTMLInputElement;
        }

        const path = event.composedPath();
        return path[0] as HTMLInputElement;
    }
}
