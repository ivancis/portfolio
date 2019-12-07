import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { getSlot, nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-badge>', () => {
    let el: Element;
    let badge: Element;
    const content = '11';

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-badge>${content}</magic-ui-badge>
            `,
        );
        badge = el.shadowRoot!.querySelector('.badge')!;
    });

    it('should render a badge', async () => {
        const slot = await getSlot(badge!);
        assert.exists(slot, 'slot is non-existant');
        assert.equal(badge!.className, 'badge');
    });

    it('should add badge--floats as a class', async () => {
        el!.setAttribute('floats', 'true');
        await nextTick();
        const slot = await getSlot(badge!);
        assert.exists(slot, 'slot is non-existant');
        assert.include(Array.from(badge!.classList), 'badge--floats');
    });

    it('should show 11 as badge content', () => {
        assert.equal(el!.textContent, '11');
    });
});
