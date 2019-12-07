import { MagicConfigMixin } from '@gig/magic-common';
declare const SearchFieldComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component that renders an input field for searching purposes. It has a
 * search button that allows the user to trigger action after clicking it or
 * hitting an enter key. Also has a clear button to clear the value of input
 * field after the user typed something.
 */
export default class SearchFieldComponent extends SearchFieldComponent_base {
    onClear(): string;
}
export {};
