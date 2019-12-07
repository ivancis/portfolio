import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

// Global Icons map -> content to avoid re-requesting icons when unneeded.
const LOADED_ICONS = new Map<string, Promise<string>>();

/**
 * Component that injects inline SVG icons stored in /icons folder which
 * allows to have control over icon color, stroke and other decorative
 * attributes.
 */
@Component({
    inheritAttrs: false,
    name: 'ui-icon',
})
export default class IconComponent extends Vue {
    /**
     * Name of the icon to load.
     */
    @Prop(String) name!: string;

    /**
     * Public path to icons directory
     */
    @Prop({ type: String, default: '/img/icons' })
    path!: string;

    /**
     * Tag name to wrap SVG into.
     */
    @Prop({ type: String, default: 'div' })
    tag!: string;

    /**
     * Style variant for badge icons
     */
    @Prop(Boolean) badge!: boolean;

    svg: Element | null = null;

    attributes: Record<string, any> = {};

    isMounted: boolean = false;

    @Watch('path', { immediate: true })
    @Watch('name', { immediate: true })
    async loadSvg() {
        if (!this.name || !this.path) {
            return;
        }

        this.clearElement();

        this.isMounted = false;
        const path = `${this.path}/${this.name}.svg`;

        // Cache and load the icon.
        if (!LOADED_ICONS.has(path)) {
            LOADED_ICONS.set(
                path,
                fetch(path).then((resp) => {
                    const contentType = resp.headers.get('Content-Type');
                    if (
                        !contentType ||
                        !contentType.includes('image/svg+xml')
                    ) {
                        console.error(
                            new Error(
                                `Could not load SVG as '${contentType}' content type is incorrect: ${path}`,
                            ),
                        );
                        return 'Error';
                    }

                    return resp.text();
                }),
            );
        }

        const svgText = await LOADED_ICONS.get(path)!;
        const fragment = document.createElement('template');
        fragment.innerHTML = svgText;
        const svg = fragment.content.querySelector('svg')!;

        if (!svg) {
            console.error(
                new Error(`SVG '${path}' did not contain an SVG element`),
            );
            return;
        }
        this.svg = svg;
        this.mountSvgContent();

        // Loop over attributes (support for Edge 16)
        const attributes: IconComponent['attributes'] = {};
        for (const attribute of Array.from(svg.attributes)) {
            this.$set(attributes, attribute.nodeName, attribute.nodeValue);
        }
        this.attributes = attributes;
    }

    @Watch('$attrs', { deep: true })
    onAttributesChange() {
        for (const attribute of Object.keys(this.$attrs)) {
            this.$set(this.attributes, attribute, this.$attrs[attribute]);
        }
    }

    clearElement() {
        if (!this.$refs.svg) {
            return;
        }
        // Clear element
        const svgRef: Element = this.$refs.svg! as Element;

        while (svgRef.firstChild) {
            svgRef.removeChild(svgRef.firstChild);
        }
    }

    mounted() {
        this.mountSvgContent();
    }

    mountSvgContent() {
        if (!this.svg || !this.$refs.svg || this.isMounted) {
            return;
        }

        const svg = this.svg;
        const nodes = svg.children;
        const svgRef: Element = this.$refs.svg! as Element;

        this.clearElement();

        for (const node of Array.from(nodes)) {
            svgRef.appendChild(node);
        }

        this.isMounted = true;
    }
}
