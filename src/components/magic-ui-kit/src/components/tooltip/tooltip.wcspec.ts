import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-tooltip>', () => {
    let el: null | Element = null;
    let tooltip: null | HTMLElement = null;

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-tooltip label="Sticky content">
                    <div>Place the mouse over</div>
                </magic-ui-tooltip>
            `,
        );

        tooltip = el!.shadowRoot!.querySelector('.tooltip');
    });

    it('should display tooltip when mouse over', async () => {
        assert.equal(tooltip!.textContent!.trim(), '');
        tooltip!.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
        await nextTick();
        assert.equal(tooltip!.textContent!.trim(), 'Sticky content');
    });
});
