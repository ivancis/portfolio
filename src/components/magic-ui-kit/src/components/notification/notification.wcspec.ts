import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { spy } from 'sinon';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-notification>', () => {
    const variants = ['info', 'success', 'alert', 'error'];
    const callback = spy();

    let el: null | any = null;
    let notification: HTMLElement | null = null;
    let btn: HTMLButtonElement | null = null;
    beforeEach(async () => {
        el = await fixture(
            html`<magic-ui-notification
            variant=""
            dismissible="${false}"
            .content='Notification content'
            @close=${callback}
        />`,
        );
        notification = el!.shadowRoot!.querySelector('.notification');
    });

    it('Should render non dismisible notification', async () => {
        assert.notExists(notification!.querySelector('.button'));
    });

    it('Should render dismisible notification', async () => {
        assert.notExists(notification!.querySelector('.button'));
        el!.setAttribute('dismissible', true);
        await nextTick();
        assert.exists(notification!.querySelector('.button'));
    });

    variants.forEach((variant) => {
        it(`Should render ${variant} notification`, async () => {
            el!.setAttribute('variant', variant as string);
            await nextTick();
            assert.include(
                Array.from(notification!.classList),
                'notification--' + variant,
            );
        });
    });

    it('Should trigger a close event', async () => {
        el!.setAttribute('dismissible', true);
        await nextTick();
        btn = notification!.querySelector('.button');
        el!.addEventListener('click', callback);
        btn!.click();
        assert.isTrue(callback.called);
    });
});
