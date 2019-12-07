import Vue from 'vue';
/**
 * Component that injects inline SVG icons stored in /icons folder which
 * allows to have control over icon color, stroke and other decorative
 * attributes.
 */
export default class IconComponent extends Vue {
    /**
     * Name of the icon to load.
     */
    name: string;
    /**
     * Public path to icons directory
     */
    path: string;
    /**
     * Tag name to wrap SVG into.
     */
    tag: string;
    /**
     * Style variant for badge icons
     */
    badge: boolean;
    svg: string;
    attributes: Record<string, any>;
    loadSvg(): Promise<void>;
}
