import { assert } from 'chai';
import { html, fixture } from '@open-wc/testing-helpers';
import { getSlot } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-form-field>', () => {
    let el: null | any = null;
    let fieldForm: Element | any = null;
    let field: null | Element = null;

    const placeholder: any = 'Input placeholder';
    const messageType = false;

    beforeEach(async () => {
        el = await fixture(html`
            <magic-ui-form-field
                ?has-error="${messageType}"
                ?has-success="${messageType}"
                ?has-warning="${messageType}"
                ?has-info="${messageType}"
                placeholder="${placeholder}"
            ></magic-ui-form-field>
        `);
        fieldForm = el!.shadowRoot!.querySelector('.form-field');
        field = el!.shadowRoot!.querySelector('.field');
    });

    it('should render default input field', async () => {
        const slot = await getSlot(el);
        assert.equal(field!.getAttribute('placeholder'), 'Input placeholder');
        assert.notExists(
            slot,
            'slot element should not exist when no content is available',
        );
    });

    it('should render radio element into the form field', async () => {
        let slot = await getSlot(el);
        assert.notExists(
            slot,
            'slot element should not exist when no content is available',
        );

        el!.appendChild(document.createElement('radio'));
        slot = await getSlot(el);
        const nodes = slot!.assignedNodes();

        assert.equal(nodes.length, 1);
        assert.equal(nodes[0]!.nodeName, 'RADIO');
    });

    it('should return has-alert as class name and show error message', async () => {
        el!.setAttribute('message', 'Warning this might be wrong!');
        el!.setAttribute('has-warning', 'true');
        await Promise.resolve();
        const message = el!.shadowRoot!.querySelector('.text');
        assert.include(Array.from(fieldForm!.classList), 'has-alert');
        assert.equal(
            message!.getAttribute('content'),
            'Warning this might be wrong!',
        );
    });

    it('should return has-error as class name and show error message', async () => {
        el!.setAttribute('message', 'Check your input file');
        el!.setAttribute('has-error', 'true');
        await Promise.resolve();
        const message = el!.shadowRoot!.querySelector('.text');
        assert.include(Array.from(fieldForm!.classList), 'has-error');
        assert.equal(message!.getAttribute('content'), 'Check your input file');
    });

    it('should return has-success as class name', async () => {
        el!.setAttribute('message', 'Success');
        el!.setAttribute('has-success', 'true');
        await Promise.resolve();
        assert.include(Array.from(fieldForm!.classList), 'has-success');
        assert.notExists(
            el!.shadowRoot!.querySelector('.message'),
            'Message should not exist when success',
        );
    });
});
