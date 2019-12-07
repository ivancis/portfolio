import { MagicConfigMixin, IRouteLink } from '@gig/magic-common';
export interface ICollapsibleItem {
    name: string;
    link: IRouteLink;
}
declare const CollapsibleRowComponent_base: import("vue-class-component/lib/declarations").VueClass<MagicConfigMixin>;
/**
 * Component used to display game categories which collapse to a drop down.
 */
export default class CollapsibleRowComponent extends CollapsibleRowComponent_base {
    /**
     * List of items to potentially show
     */
    items: ICollapsibleItem[];
    /**
     * Active item name
     */
    activeItem: string;
    /**
     * Bound clone of the visibility change method.
     */
    private resizeListener;
    created(): void;
    destroyed(): void;
    onItemsChange(): void;
    itemRefs(): Element[];
    checkVisibilityChange(): void;
    emitHidden(items: ICollapsibleItem[]): ICollapsibleItem[];
}
export {};
