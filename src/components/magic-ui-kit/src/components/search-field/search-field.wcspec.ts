import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { spy, SinonSpy } from 'sinon';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-search-field>', () => {
    let el: null | Element = null;
    let search: null | HTMLElement = null;
    let input: null | HTMLInputElement = null;
    let button: null | HTMLButtonElement = null;
    let icon: null | HTMLElement = null;
    const callback: null | (() => void) = spy();

    beforeEach(async () => {
        el = await fixture(
            html`<magic-ui-search-field
                @clear="${callback!}"
            />`,
        );
        search = el!.shadowRoot!.querySelector('.search-field');
        input = search!.querySelector('magic-ui-form-field');
        icon = search!.querySelector('.icon');
    });

    it('should render search field with icon', async () => {
        assert.exists(search);
        assert.exists(icon);
    });

    it('should render search field with button', async () => {
        assert.exists(icon);
        el!.setAttribute('value', 'sjhgdsaja');
        await nextTick();
        button = search!.querySelector('.button');
        assert.exists(button);
        assert.equal(input!.getAttribute('value'), 'sjhgdsaja');
    });

    it('should trigger a clear event', async () => {
        const event = new Event('click');
        el!.addEventListener('clear', callback, false);
        el!.setAttribute('value', 'jsghdjanad');
        await nextTick();
        button = search!.querySelector('.button');
        assert.equal(input!.getAttribute('value'), 'jsghdjanad');
        button!.dispatchEvent(event);
        await nextTick();
        assert.isTrue((callback as SinonSpy).called);
    });
});
