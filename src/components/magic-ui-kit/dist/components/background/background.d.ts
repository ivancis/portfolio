import { MagicConfigMixin } from '@gig/magic-common';
declare const BackgroundComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component is used to display responsive images.
 */
export default class BackgroundComponent extends BackgroundComponent_base {
    path: string;
    originalHeight: number;
    originalWidth: number;
    created(): void;
    readonly cdnPath: string;
    readonly alternatives: {
        srcset: string;
        mediaQuery: string;
    }[];
    private dprSrcset;
}
export {};
