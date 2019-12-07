import { MagicConfigMixin } from '@gig/magic-common';
declare const SwitchComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component to let the user select a boolean value. It is displayed as a
 * switch.
 * @remarks If using v-wmodel, always add the modifier .lazy
 */
export default class SwitchComponent extends SwitchComponent_base {
    value: boolean;
    right: boolean;
    onChange(val: boolean): boolean;
}
export {};
