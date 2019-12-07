import '@webcomponents/webcomponentsjs';
import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { spy } from 'sinon';

describe('<magic-ui-checkbox>', () => {
    const content = 'Checkbox content';
    let el: null | Element = null;
    let input: null | HTMLInputElement = null;

    const createCheckbox = async (isRadio: boolean = false) => {
        el = await fixture(
            html`
                <magic-ui-checkbox value="false" ?radio="${isRadio}">
                    ${content}
                </magic-ui-checkbox>
            `,
        );
        input = el.shadowRoot!.querySelector('input');
    };

    describe('when radio option is non-existent', () => {
        beforeEach(async () => {
            await createCheckbox();
        });

        it('should be checked on click', () => {
            input!.click();
            assert.isTrue(input!.checked);
        });
        it('should be unchecked when clicked twice', () => {
            input!.click();
            input!.click();
            assert.isFalse(input!.checked);
        });

        it('should trigger a custom change event', () => {
            const callback = spy();
            el!.addEventListener('change', callback);
            input!.click();
            assert.isTrue(callback.called);
        });

        it('should show component content', () => {
            assert.include(el!.textContent as string, 'Checkbox content');
        });
    });

    describe('when radio option is truthy', () => {
        beforeEach(async () => {
            await createCheckbox(true);
        });

        it('should be checked on click', () => {
            input!.click();
            assert.isTrue(input!.checked);
        });

        it('should keep the truthy value when clicked twice', () => {
            input!.click();
            input!.click();

            assert.isTrue(input!.checked);
        });

        it('should only emit a change event when clicked once', () => {
            const callback = spy();
            el!.addEventListener('change', callback);

            input!.click();
            assert.isTrue(callback.calledOnce);

            input!.click();
            assert.isTrue(callback.calledOnce);
        });
    });
});
