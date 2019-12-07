import { Component, Mixins, Prop } from 'vue-property-decorator';
import {
    MagicConfigMixin,
    cdnService,
    ImageFit,
    ImageFormat,
    ImageType,
    getImagePath,
    IImageParams,
} from '@gig/magic-common';

const cssBreakpoints = [
    1050, // Desktop wide
    896, // Desktop
    672, // Tablet
    525, // Phablet
    524, // Mobile
];

const heights = [
    1.3, // Desktop wide
    1.5, // Desktop
    2, // Tablet
    2.5, // Phablet
    3, // Mobile
];

/**
 * Component is used to display responsive images.
 */
@Component({
    name: 'ui-background',
})
export default class BackgroundComponent extends Mixins(MagicConfigMixin) {
    /**
     * Image name/file path. Directory on the CDN
     * is assumed by the `imageType` property.
     */
    @Prop(String)
    path!: string;

    /**
     * The image type to determine the full path on the CDN.
     */
    @Prop({ type: String, default: ImageType.PAGE_BACKGROUND })
    imageType!: ImageType;

    originalHeight = -1;
    originalWidth = -1;

    created() {
        (async () => {
            const result = await fetch(
                this.getPath({
                    format: ImageFormat.JSON,
                }),
            );
            const json: {
                PixelHeight: number;
                PixelWidth: number;
            } = await result.json();
            this.originalHeight = json.PixelHeight;
            this.originalWidth = json.PixelWidth;
        })();
    }

    get cdnPath() {
        return this.getPath();
    }

    get alternatives() {
        if (this.originalHeight === -1) {
            return [];
        }
        const originalRatio = this.originalHeight / this.originalWidth;
        return cssBreakpoints.map((width, i) => ({
            srcset: this.dprSrcset(
                i === 0 ? this.originalWidth : cssBreakpoints[i - 1],
                i === 0
                    ? this.originalHeight
                    : width * originalRatio * heights[i],
            ),
            mediaQuery: `(${
                i < cssBreakpoints.length - 1 ? 'min' : 'max'
            }-width: ${width}px)`,
        }));
    }

    private dprSrcset(width: number, height: number) {
        return [1, 2]
            .map(
                (i) =>
                    this.getPath({
                        minWidth: width,
                        minHeight: height,
                        retina: i === 2,
                        fit: ImageFit.CROP,
                    }) +
                    ' ' +
                    i +
                    'x',
            )
            .join(', ');
    }

    private getPath(params?: IImageParams) {
        return cdnService.getImageUrl(
            getImagePath(this.imageType, this.path),
            params,
        );
    }
}
