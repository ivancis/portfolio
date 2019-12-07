import '@webcomponents/webcomponentsjs';
import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { spy } from 'sinon';

describe('<magic-ui-switch>', () => {
    const checked = false;
    const content = 'Content text';

    let el: null | Element = null;
    let input: null | HTMLInputElement = null;
    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-switch value="${checked}">${content}</magic-ui-switch>
            `,
        );
        input = el.shadowRoot!.querySelector('input');
    });

    it('should switch on click', () => {
        input!.click();
        assert.isTrue(input!.checked);
    });

    it('should trigger a custom change event', () => {
        const callback = spy();
        el!.addEventListener('change', callback);
        input!.click();
        assert.isTrue(callback.called);
    });

    it('should show content text', () => {
        assert.include(el!.textContent as string, 'Content text');
    });
});
