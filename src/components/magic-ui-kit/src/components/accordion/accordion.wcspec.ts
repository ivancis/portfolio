import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-accordion>', () => {
    let el: null | Element = null;
    let accordion: null | HTMLElement = null;
    let upArrow: null | HTMLElement = null;
    let downArrow: null | HTMLElement = null;
    let toggle: null | HTMLDivElement = null;
    let content: null | HTMLDivElement = null;

    beforeEach(async () => {
        el = await fixture(html`
            <magic-ui-accordion
                initially-visible="${false}"
                no-animation="${false}"
                wide="${false}"
            >
                Menu
            </magic-ui-accordion>
            )
        `);

        accordion = el!.shadowRoot!.querySelector('.accordion');
        toggle = accordion!.querySelector('.toggle');
        content = accordion!.querySelector('.content');
        upArrow = toggle!.querySelector('magic-ui-icon[name="up-arrow"]');
        downArrow = toggle!.querySelector('magic-ui-icon[name="down-arrow"]');
    });

    it('should expand accordion element on click', async () => {
        assert.equal(upArrow!.style!.display, 'none');
        assert.equal(downArrow!.style!.display, '');

        toggle!.click();
        await nextTick();

        assert.equal(upArrow!.style!.display, '');
        assert.equal(downArrow!.style!.display, 'none');
    });

    it('should render accordion with visible content', async () => {
        el!.setAttribute('initially-visible', 'true');
        await nextTick();

        content = accordion!.querySelector('.content');

        assert.exists(content!);
    });

    it('should collapse accordion element on click', async () => {
        el!.setAttribute('initially-visible', 'true');
        await nextTick();

        assert.equal(upArrow!.style!.display, '');
        assert.equal(downArrow!.style!.display, 'none');

        toggle!.click();
        await nextTick();

        assert.equal(upArrow!.style!.display, 'none');
        assert.equal(downArrow!.style!.display, '');
    });

    it('should render accordion variant with content--no-animation class', async () => {
        el!.setAttribute('initially-visible', 'true');
        el!.setAttribute('no-animation', 'true');
        await nextTick();

        content = accordion!.querySelector('.content');

        assert.include(Array.from(content!.classList), 'content--no-animation');
    });

    it('should render accordion variant with toggle--wide class', async () => {
        el!.setAttribute('wide', 'true');
        await nextTick();

        toggle = accordion!.querySelector('.toggle');

        assert.include(Array.from(toggle!.classList), 'toggle--wide');
    });
});
