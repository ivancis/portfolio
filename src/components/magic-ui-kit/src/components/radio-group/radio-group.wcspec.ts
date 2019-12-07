import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-radio-group>', () => {
    let el: null | Element = null;
    let input: HTMLInputElement & { __vue__: any } | null;
    const variant: boolean = false;

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-radio-group
                    space="${variant}"
                    left="${variant}"
                    right="${variant}"
                    inline="${variant}"
                    column="${variant}"
                />
            `,
        );
        input = el.shadowRoot!.querySelector('.radio-group');
    });

    it('should display elements with space between variant', async () => {
        el!.setAttribute('space', 'true');
        await nextTick();
        assert.include(Array.from(input!.classList), 'radio-group--space');
    });
    it('should display radios aligned to left', async () => {
        el!.setAttribute('left', 'true');
        await nextTick();
        assert.include(Array.from(input!.classList), 'radio-group--left');
    });
    it('should display radios aligned to right', async () => {
        el!.setAttribute('right', 'true');
        await nextTick();
        assert.include(Array.from(input!.classList), 'radio-group--right');
    });
    it('should display radios in a inline', async () => {
        el!.setAttribute('inline', 'true');
        await nextTick();
        assert.include(Array.from(input!.classList), 'radio-group--inline');
    });
    it('should display radios in a column', async () => {
        el!.setAttribute('column', 'true');
        await nextTick();
        assert.include(Array.from(input!.classList), 'radio-group--column');
    });
    it('should registered and change selected radio', async () => {
        const radio1 = el!.appendChild(
            document.createElement('magic-ui-radio'),
        );
        const radio2 = el!.appendChild(
            document.createElement('magic-ui-radio'),
        );
        input = el!.shadowRoot!.querySelector('.radio-group');

        radio1!.setAttribute('value', 'A');
        radio2!.setAttribute('value', 'B');
        await nextTick();

        assert.equal(input!.__vue__.radios.size, 2);

        const radio3 = el!.appendChild(
            document.createElement('magic-ui-radio'),
        );

        radio3!.setAttribute('value', 'C');
        await nextTick();

        assert.equal(input!.__vue__.radios.size, 3);

        const inputRadio3 = radio3!.shadowRoot!.querySelector('input');
        const inputRadio1 = radio1!.shadowRoot!.querySelector('input');

        inputRadio1!.click();
        await nextTick();

        assert.isTrue(inputRadio1!.checked);

        inputRadio3!.click();
        await nextTick();

        assert.isTrue(inputRadio3!.checked);
        assert.isFalse(inputRadio1!.checked);
    });
});
