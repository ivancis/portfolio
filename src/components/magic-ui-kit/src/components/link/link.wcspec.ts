import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';
import { nextTick } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-link>', () => {
    let el: null | Element = null;
    let magicLink: null | HTMLElement = null;
    let magicButton: null | HTMLElement = null;

    describe('Shown as button', () => {
        beforeEach(async () => {
            el = await fixture(html`
                <magic-ui-link></magic-ui-link>
            `);
        });

        it('should be shown as button', async () => {
            el!.setAttribute('button', 'true');
            el!.setAttribute('to', '3');
            await nextTick();
            magicButton = el!.shadowRoot!.querySelector('magic-ui-button');
            assert.exists(magicButton!);
            assert.equal(
                magicButton!.getAttribute('button-tag'),
                'magic-router-link',
            );
        });

        it('should be shown as link', () => {
            magicLink = el!.shadowRoot!.querySelector('a');
            assert.exists(magicLink!);
            assert.equal(magicLink!.className, 'link');
        });
    });
});
