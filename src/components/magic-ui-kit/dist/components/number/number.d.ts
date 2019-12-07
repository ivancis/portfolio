import { MagicConfigMixin } from '@gig/magic-common';
declare const NumberComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component that renders an input field type number.
 */
export default class NumberComponent extends NumberComponent_base {
    readonly pattern: string;
    onKeyDown(event: KeyboardEvent, inputData?: string): void;
    getRealTarget(event: Event): HTMLInputElement;
}
export {};
