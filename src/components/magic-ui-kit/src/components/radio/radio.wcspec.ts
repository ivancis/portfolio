import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';
import { spy } from 'sinon';

describe('<magic-ui-radio>', () => {
    const checked = false;
    const label = 'Label text';

    let el: null | Element = null;
    let input: null | HTMLInputElement = null;

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-radio checked="${checked}">${label}</magic-ui-radio>
            `,
        );
        input = el.shadowRoot!.querySelector('input');
    });

    it('should ckecked on click', () => {
        input!.click();
        assert.isTrue(input!.checked);
    });

    it('should trigger a custom change event', () => {
        const callback = spy();
        el!.addEventListener('change', callback);
        input!.click();
        assert.isTrue(callback.called);
    });

    it('should show label text', () => {
        assert.include(el!.textContent as string, 'Label text');
    });
});
