import { MagicConfigMixin } from '@gig/magic-common';
declare const TopCoverComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
export default class TopCoverComponent extends TopCoverComponent_base {
    /**
     * Variant for set height = 1/4 of width
     */
    fourth: boolean;
    /**
     * Variant for keeping height proportion, when no content is needed.
     */
    noContent: boolean;
    /**
     *
     */
    background: string;
    /**
     *
     */
    image: string;
    /**
     *
     */
    header: string;
    /**
     *
     */
    description: string;
    /**
     *
     */
    content: string;
}
export {};
