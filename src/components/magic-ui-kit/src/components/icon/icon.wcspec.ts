import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { waitFor } from '@gig/magic-test-helpers/dist/utils';

describe('<magic-ui-icon>', () => {
    let el: null | Element = null;
    let icon: null | any = null;
    const iconNames = ['eye', 'info'];

    iconNames.forEach((name) => {
        it(`Should load ${name} icon`, async () => {
            el = await fixture(
                html`
                <magic-ui-icon name="${name}" path="/_karma_webpack_/img/icons" />
                `,
            );

            await waitFor(() => {
                return !!el!.shadowRoot!.querySelector('svg > path');
            });

            icon = el!.shadowRoot!.querySelector('svg > path');
            assert.equal(icon!.id, name);
        });
    });

    it('Should load message icon with badge', async () => {
        el = await fixture(
            html`
            <magic-ui-icon name="message" path="/_karma_webpack_/img/icons" badge/>
            `,
        );

        await waitFor(() => {
            return !!el!.shadowRoot!.querySelector('svg > path');
        });

        icon = el!.shadowRoot!.querySelector('svg');
        assert.include(Array.from(icon!.classList), 'icon--badge');
    });
});
