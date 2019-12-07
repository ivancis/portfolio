import { Mixins, Prop, Component } from 'vue-property-decorator';
import { MagicConfigMixin, IRouteLink } from '@gig/magic-common';

/**
 * Component used as call to action element which comes in various decorative
 * variants.
 */
@Component({
    name: 'ui-button',
})
export default class ButtonComponent extends Mixins(MagicConfigMixin) {
    @Prop({
        validator(type) {
            return (
                [
                    'primary',
                    'success',
                    'alert',
                    'error',
                    'light',
                    'transparent',
                    '',
                ].indexOf(type) !== -1
            );
        },
        default: '',
    })
    variant!: string;

    @Prop({ type: String, default: 'button' }) buttonTag!: string;

    /**
     * Button with icon variant.
     */
    @Prop(Boolean) icon!: boolean;

    /**
     * Button with icon aligned to the left.
     */
    @Prop(Boolean) left!: boolean;

    /**
     * Button with icon aligned to the right.
     */
    @Prop(Boolean) right!: boolean;

    /**
     * Hollow button variant with no background and border only.
     */
    @Prop(Boolean) hollow!: boolean;

    /**
     * Round button variant is used with icons mostly.
     */
    @Prop(Boolean) round!: boolean;

    /**
     * Small button variant is with smaller font, paddings etc.
     */
    @Prop(Boolean) small!: boolean;

    /**
     * Tiny button variant is with even smaller font, paddings etc.
     */
    @Prop(Boolean) tiny!: boolean;

    /**
     * Wide button variant occupies available space.
     */
    @Prop(Boolean) wide!: boolean;

    /**
     * No margin button variant has no margins.
     */
    @Prop(Boolean) noMargin!: boolean;

    /**
     * Less margin button variant has half of standard margin.
     */
    @Prop(Boolean) lessMargin!: boolean;

    /**
     * No padding button variant has no paddings.
     */
    @Prop(Boolean) noPadding!: boolean;

    /**
     * Less padding button variant has half of standard padding.
     */
    @Prop(Boolean) lessPadding!: boolean;

    /**
     * Add space button variant adds margin on the sides.
     */
    @Prop(Boolean) addSpace!: boolean;

    /**
     * Loading button variant has loading icon inside.
     */
    @Prop(Boolean) loading!: boolean;

    /**
     * The link to link to. If Number/String is given it's presumed to be a
     * RouteablePage enum value.
     */
    @Prop([Object, Number, String]) to!: IRouteLink | number | string;

    get buttonVariant() {
        if (!this.variant) {
            return '';
        }
        return `button--${this.variant}`;
    }
}
