import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-sticky-tooltip>', () => {
    let el: null | any = null;
    let sticky: null | HTMLElement = null;
    let stickyClick: null | HTMLElement = null;
    let stickyClose: null | HTMLElement = null;
    let stickyContent: null | HTMLElement = null;
    let slotContent: null | HTMLElement = null;

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-sticky-tooltip>
                    <div slot="clickable">Click me!</div>
                    <div slot="content">Sticky tooltip content</div>
                </magic-ui-sticky-tooltip>
            `,
        );
    });

    it('should open the sticky tooltip', async () => {
        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyClick = sticky!.querySelector('.clickable');
        stickyClick!.dispatchEvent(new Event('click', { bubbles: true }));
        await nextTick();

        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        slotContent = stickyContent!.querySelector("slot[name='content']");
        stickyClose = stickyContent!.querySelector(
            "magic-ui-icon[name='close']",
        );

        assert.exists(stickyClose);
        assert.exists(slotContent);
    });

    it('should open the sticky tooltip and close clicking close icon', async () => {
        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        stickyClick = sticky!.querySelector('.clickable');

        assert.notExists(stickyContent);

        stickyClick!.dispatchEvent(
            new Event('click', { bubbles: true, composed: true }),
        );
        await nextTick();

        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        slotContent = stickyContent!.querySelector("slot[name='content']");

        assert.exists(slotContent);

        stickyClose = stickyContent!.querySelector(
            "magic-ui-icon[name='close']",
        );
        stickyClose!.dispatchEvent(
            new Event('click', { bubbles: true, composed: true }),
        );
        await nextTick();

        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        assert.notExists(stickyContent);
    });

    it('should open the sticky tooltip and close clicking outside', async () => {
        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        stickyClick = sticky!.querySelector('.clickable');

        assert.notExists(stickyContent);

        stickyClick!.dispatchEvent(
            new Event('click', { bubbles: true, composed: true }),
        );
        await nextTick();

        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        slotContent = stickyContent!.querySelector("slot[name='content']");
        document.body.dispatchEvent(
            new Event('click', { bubbles: true, composed: true }),
        );

        await nextTick();

        sticky = el.shadowRoot!.querySelector('.sticky-tooltip');
        stickyContent = sticky!.querySelector('.content');
        assert.notExists(stickyContent);
    });
});
