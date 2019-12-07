import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';

describe('<magic-ui-step-progress-bar>', () => {
    let el: null | Element = null;
    let bar: null | Element = null;

    beforeEach(async () => {
        el = await fixture(
            html`<magic-ui-step-progress-bar steps=5 current-step=2/>`,
        );
        bar = el.shadowRoot!.querySelector('.step-progress-bar');
    });

    it('should have 5 steps', () => {
        assert.equal(5, bar!.childNodes.length);
    });

    it('should have class "step--done" on its first step', () => {
        assert.include(Array.from(bar!.children[0].classList), 'step--done');
    });

    it('should have class "step--current" on current step', () => {
        assert.include(Array.from(bar!.children[1].classList), 'step--current');
    });

    it('should not have class "step--done" on incompleted step', () => {
        assert.notInclude(Array.from(bar!.children[4].classList), 'step--done');
        assert.include(Array.from(bar!.children[4].classList), 'step');
    });

    it('should move the progress bar along', async () => {
        el!.setAttribute('current-step', '3');
        await Promise.resolve();
        assert.equal(5, bar!.childNodes.length);
        assert.include(Array.from(bar!.children[2].classList), 'step--current');
    });

    it('should increse the number of steps', async () => {
        el!.setAttribute('steps', '10');
        await Promise.resolve();
        assert.equal(10, bar!.childNodes.length);
    });
});
