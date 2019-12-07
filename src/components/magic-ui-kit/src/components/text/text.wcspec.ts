import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';

describe('<magic-ui-text>', () => {
    let el: null | Element = null;
    let text: null | Element = null;
    const isMarkdown: null | boolean = false;
    const content: any = `My name is <b>{name}</b>`;
    const params: any = { name: 'Allan' };

    beforeEach(async () => {
        el = await fixture(html`
            <magic-ui-text
                is-markdown=${isMarkdown}
                content=${content}
                tag="h2"
                .params=${params}
            />
        `);

        text = el!.shadowRoot!.querySelector('.text');
    });

    it('should render a h2 component with normal content', () => {
        assert.equal(text!.tagName, 'H2');
        assert.equal(text!.textContent!.trim(), 'My name is Allan'),
            assert.equal(text!.innerHTML, 'My name is <b>Allan</b>');
    });
    it('should render a h2 component with markdown content', async () => {
        el!.setAttribute('is-markdown', 'true');
        el!.setAttribute('content', 'My name is **{name}**');
        await Promise.resolve();
        assert.equal(text!.tagName, 'H2');
        assert.equal(text!.textContent!.trim(), 'My name is Allan'),
            assert.equal(
                text!.innerHTML!.trim(),
                '<p>My name is <strong>Allan</strong></p>',
            );
    });
    it('should render a div component as default', async () => {
        el!.removeAttribute('tag');
        await Promise.resolve();
        text = el!.shadowRoot!.querySelector('.text');
        assert.equal(text!.tagName, 'DIV');
        assert.equal(text!.textContent!.trim(), 'My name is Allan'),
            assert.equal(text!.innerHTML, 'My name is <b>Allan</b>');
    });
});
