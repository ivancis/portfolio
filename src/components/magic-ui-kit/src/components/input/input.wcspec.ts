import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';
import { spy } from 'sinon';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-input>', () => {
    let el: null | Element = null;
    let input: null | HTMLInputElement = null;
    const centered: null | boolean = false;
    const icon: null | boolean = false;

    beforeEach(async () => {
        const callback = spy();
        el = await fixture(html`
            <magic-ui-input
                ?centered="${centered}"
                ?icon="${icon}"
                @change="${callback}"
                @input="${callback}"
            ></magic-ui-input>
        `);

        input = el!.shadowRoot!.querySelector('.input');
    });

    it('should render default input field', () => {
        assert.equal(input!.className, 'input');
    });

    it('should add input--centered ass a class', async () => {
        el!.setAttribute('centered', 'true');
        await nextTick();
        input = el!.shadowRoot!.querySelector('.input');
        assert.include(Array.from(input!.classList), 'input--centered');
    });

    it('should add has-icon ass a class and render magic-ui-icon', async () => {
        el!.setAttribute('icon', 'true');
        await nextTick();
        input = el!.shadowRoot!.querySelector('.input');
        assert.include(Array.from(input!.classList), 'has-icon');
    });

    it('should trigger an input event', async () => {
        const callbackInput = spy();
        const event = new Event('input');
        el!.addEventListener('input', callbackInput, false);
        input!.dispatchEvent(event);
        assert.isTrue(callbackInput.called);
    });

    it('should trigger an change event', async () => {
        const callbackChange = spy();
        const event = new Event('change');
        el!.addEventListener('change', callbackChange, false);
        input!.dispatchEvent(event);
        assert.isTrue(callbackChange.called);
    });

    it('should trigger an erase event', async () => {
        const callbackErase = spy();
        const event = new KeyboardEvent('keydown', { key: 'Backspace' });
        el!.addEventListener('erase', callbackErase, false);
        input!.dispatchEvent(event);
        assert.isTrue(callbackErase!.called);
    });
});
