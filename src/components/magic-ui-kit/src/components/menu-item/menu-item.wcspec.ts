import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';

describe('<magic-ui-menu-item>', () => {
    let el: null | any = null;
    let menu: null | HTMLElement;
    const isActive = false;
    const badge: number | boolean = false;
    let badgeContent: any;

    beforeEach(async () => {
        el = await fixture(
            html`
                <magic-ui-menu-item
                    is-active="${isActive}"
                    badge="${badge}"
                ></magic-ui-menu-item>
            `,
        );

        menu = el!.shadowRoot!.querySelector('.menu-item');
        badgeContent = el!.shadowRoot!.querySelector('magic-ui-badge');
    });

    it('should not render <magic-ui-badge>', async () => {
        el!.removeAttribute('badge');
        await Promise.resolve();
        assert.isNull(el!.shadowRoot!.querySelector('magic-ui-badge'));
    });

    it('should add "menu-item--active" as a class', async () => {
        el!.isActive = true;
        await Promise.resolve();
        assert.include(Array.from(menu!.classList), 'is-active');
    });

    it('should show an empty string as badge text', async () => {
        el!.badge = true;
        await Promise.resolve();
        assert.isString(badgeContent!.innerHTML);
    });

    it('should show 5 as badge text', async () => {
        el!.badge = 5;
        await Promise.resolve();
        assert.equal(badgeContent!.innerText, '5');
    });
});
