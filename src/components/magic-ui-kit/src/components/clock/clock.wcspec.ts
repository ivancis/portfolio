import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';

describe('<magic-ui-clock>', () => {
    let el: null | Element = null;
    let clock: null | HTMLElement = null;

    beforeEach(async () => {
        el = await fixture(html`
        <magic-ui-clock 
        />
        `);

        clock = el!.shadowRoot!.querySelector('.clock');
    });

    it('should render clock component', () => {
        assert.equal(clock!.className, 'clock');
        assert.match(
            clock!.innerText,
            /\d\d(?: : )\d\d/,
            'Clock format does not match',
        );
    });
});
