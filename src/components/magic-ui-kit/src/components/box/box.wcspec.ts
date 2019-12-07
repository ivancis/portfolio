import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';

describe('<magic-ui-box>', () => {
    let el: null | Element = null;
    let box: null | Element = null;
    const elevation = 0;
    const content = 'Text content';

    beforeEach(async () => {
        el = await fixture(html`
            <magic-ui-box .elevation="${elevation}">${content}</magic-ui-box>
        `);
        box = el!.shadowRoot!.querySelector('.box');
    });

    it('Should not add "elevation" class on default', () => {
        assert.equal(el!.textContent!.trim(), 'Text content');
        assert.notMatch(box!.className, /\bbox--elevation/);
        assert.include(Array.from(box!.classList), 'box');
    });
    it('Should have "box--elevation-3" as class name', async () => {
        el!.setAttribute('elevation', '3');
        await Promise.resolve();
        assert.include(Array.from(box!.classList), 'box--elevation-3');
        assert.include(Array.from(box!.classList), 'box');
    });
    it('Should not have "elevation" class if elevation value is 6', async () => {
        el!.setAttribute('elevation', '6');
        await Promise.resolve();
        assert.notMatch(box!.className, /\bbox--elevation/);
        assert.include(Array.from(box!.classList), 'box');
    });
});
