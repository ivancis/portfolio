import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-peek-password>', () => {
    let el: null | Element = null;
    let peekPassword: null | HTMLElement = null;
    let passwordInput: null | HTMLInputElement = null;
    let toggleButton: null | HTMLButtonElement = null;
    let toggleIcon: null | HTMLElement = null;
    const shownPasswordIcon: string = 'eye-solid';
    const hiddenPasswordIcon: string = 'eye';

    describe('Toggle password', () => {
        beforeEach(async () => {
            el = await fixture(html`
                <magic-ui-peek-password></magic-ui-peek-password>
            `);

            peekPassword = el!.shadowRoot!.querySelector('.peek-password');
            passwordInput = peekPassword!
                .querySelector('magic-ui-form-field')!
                .shadowRoot!.querySelector('div > magic-ui-input');
            toggleButton = peekPassword!.querySelector('button');
            toggleIcon = toggleButton!.querySelector('magic-ui-icon');
        });

        it('Password should be visible after clicking the eye button', async () => {
            passwordInput!.dispatchEvent(new Event('input'));
            await nextTick();
            toggleButton!.dispatchEvent(new Event('click'));
            await nextTick();
            assert.equal(passwordInput!.getAttribute('type'), 'text');
            assert.equal(toggleIcon!.getAttribute('name'), shownPasswordIcon);
        });

        it('Password should not be visible after clicking twice the eye button', async () => {
            passwordInput!.dispatchEvent(new Event('input'));
            await nextTick();
            toggleButton!.dispatchEvent(new Event('click'));
            await nextTick();
            toggleButton!.dispatchEvent(new Event('click'));
            await nextTick();
            assert.equal(passwordInput!.getAttribute('type'), 'password');
            assert.equal(toggleIcon!.getAttribute('name'), hiddenPasswordIcon);
        });
    });
});
