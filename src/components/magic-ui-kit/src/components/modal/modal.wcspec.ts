import { fixture, html } from '@open-wc/testing-helpers';
import { nextTick, getSlot } from '@gig/magic-test-helpers/dist/utils';
import { assert } from 'chai';
import { spy } from 'sinon';

describe('<magic-ui-modal>', () => {
    let el: null | any = null;
    let modal: null | Element = null;

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-modal dismissible size="small"></magic-ui-modal>
            `,
        );
        modal = el.shadowRoot!.querySelector('.modal')!;
    });

    it('should render text in the modal body', async () => {
        el!.appendChild(document.createTextNode('This is the modal body'));

        const slot = await getSlot(el);

        assert.exists(slot, 'slot is non-existant');
        assert.equal(slot!.assignedNodes().length, 1);
        assert.equal(
            slot!.assignedNodes()[0]!.textContent,
            'This is the modal body',
        );
    });

    it('should render an element into the modal body', async () => {
        let slot = await getSlot(el);

        assert.notExists(
            slot,
            'slot element should not exist when no content is available',
        );

        el!.appendChild(document.createElement('button'));

        slot = await getSlot(el);
        const nodes = slot!.assignedNodes();

        assert.equal(nodes.length, 1);
        assert.equal(nodes[0]!.nodeName, 'BUTTON');
    });

    it('should set default modal size', () => {
        assert.include(Array.from(modal!.classList), 'modal--small');
    });

    it('should set large as modal size', async () => {
        el!.setAttribute('size', 'large');

        await nextTick();

        assert.include(Array.from(modal!.classList), 'modal--large');
    });

    it('should render close right button', async () => {
        const closeBtn = el.shadowRoot!.querySelector(
            'magic-ui-icon[name=close]',
        );
        assert.isNotNull(closeBtn);
    });

    it('should not render close right button', async () => {
        el!.setAttribute('dismissible', 'false');

        await nextTick();

        const closeBtn = el.shadowRoot!.querySelector(
            'magic-ui-icon[name=close]',
        );
        assert.isNull(closeBtn);
    });

    it('should trigger a custom close event', () => {
        const closeBtn = modal!.querySelector(
            'magic-ui-icon[name=close]',
        ) as HTMLElement;
        const callback = spy();
        el!.addEventListener('close', callback);
        closeBtn.click();
        assert.isTrue(callback.called);
    });
});
