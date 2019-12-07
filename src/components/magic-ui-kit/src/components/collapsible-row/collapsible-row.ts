import { Component, Mixins, Watch, Prop, Emit } from 'vue-property-decorator';
import { MagicConfigMixin, Debounce, IRouteLink } from '@gig/magic-common';

export interface ICollapsibleItem {
    name: string;
    link: IRouteLink;
}

/* TODO: Make this component more general use */

/**
 * Component used to show only the amount of links that are possible to put
 * on one row. Emits any elements that are not able to fit so they can be displayed
 * with other methods (eg. in a dropdown).
 */
@Component({
    name: 'ui-collapsible-row',
})
export default class CollapsibleRowComponent extends Mixins(MagicConfigMixin) {
    /**
     * List of items to potentially show
     */
    @Prop(Array) items!: ICollapsibleItem[];

    /**
     * Active item name
     */
    @Prop(String) activeItem!: string;

    private resizeObserver: any;

    private skipResize = true;

    mounted() {
        // @ts-ignore
        this.resizeObserver = new ResizeObserver(() => {
            if (this.skipResize) {
                this.skipResize = false;
                return;
            }
            this.checkVisibilityChange();
            this.skipResize = true;
        });

        this.resizeObserver.observe(this.$el);
    }

    destroyed() {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
    }

    @Watch('items', { immediate: true })
    onItemsChange() {
        this.checkVisibilityChange();
    }

    itemRefs(): Element[] {
        const refs = this.$refs.item;
        if (!refs || !Array.isArray(refs) || !(refs[0] instanceof Element)) {
            return [];
        }

        return refs as Element[];
    }

    @Debounce(100)
    checkVisibilityChange() {
        const itemRefs = this.itemRefs();
        if (itemRefs.length === 0) {
            this.emitHidden([]);
            return;
        }

        const { clientWidth: contWidth } = this.$el;

        let index = 0;
        let usedWidth = 0;
        const hiddenItems = [];

        for (const item of itemRefs) {
            usedWidth += item.clientWidth;

            if (usedWidth > contWidth) {
                hiddenItems.push(this.items[index]);
            }

            index++;
        }
        this.emitHidden(hiddenItems);
    }

    @Emit('hidden')
    emitHidden(items: ICollapsibleItem[]) {
        return items;
    }
}
