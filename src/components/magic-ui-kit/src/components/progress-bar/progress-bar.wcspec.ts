import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-progress-bar>', () => {
    let el: Element | null = null;
    let progressBar: HTMLElement | null = null;

    beforeEach(async () => {
        el = await fixture(html`
            <magic-ui-progress-bar />
        `);

        progressBar = el!.shadowRoot!.querySelector('.progress-bar');
    });

    function getProgressCssVar() {
        return getComputedStyle(progressBar!).getPropertyValue(
            '--magic-progress-bar-width',
        );
    }

    it('should render progress bar without progress', () => {
        assert.include(Array.from(progressBar!.classList), 'progress-bar');
        assert.equal(getProgressCssVar(), '');
    });

    it('should show current progress', async () => {
        el!.setAttribute('progress', '10');
        await nextTick();
        assert.equal(getProgressCssVar(), '10%');

        el!.setAttribute('progress', '50');
        await nextTick();
        assert.equal(getProgressCssVar(), '50%');

        el!.setAttribute('progress', '100');
        await nextTick();
        assert.equal(getProgressCssVar(), '100%');
    });

    it('should set state to complete when progress is 100', async () => {
        el!.setAttribute('progress', '100');
        await nextTick();
        assert.include(Array.from(progressBar!.classList), 'is-complete');
    });
});
