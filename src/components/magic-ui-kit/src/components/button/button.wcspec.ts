import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';
import { spy, SinonSpy } from 'sinon';

describe('<magic-ui-button>', () => {
    const variants = ['primary', 'success', 'alert', 'error', 'light'];
    let el: null | Element = null;
    let buttonElement: HTMLButtonElement | null = null;
    let callback: null | (() => void);

    beforeEach(() => {
        callback = spy();
    });

    describe('Not loading', () => {
        beforeEach(async () => {
            el = await fixture(html`
                <magic-ui-button
                    variant=""
                    ?loading="${false}"
                    ?disabled="${false}"
                    @click="${callback!}"
                >
                    Click Me
                </magic-ui-button>
            `);

            buttonElement = el!.shadowRoot!.querySelector('.button');
        });

        it('should trigger a button click event', () => {
            const btn = buttonElement! as HTMLElement;
            el!.addEventListener('click', callback!);
            btn!.click();
            assert.isTrue((callback as SinonSpy).called);
        });

        it('Should render default button', async () => {
            assert.equal(buttonElement!.className, 'button');
            assert.notInclude(
                Array.from(buttonElement!.classList),
                'is-loading',
            );
        });

        variants.forEach((variant) => {
            it(`Should render ${variant} button`, async () => {
                el!.setAttribute('variant', variant as string);
                await Promise.resolve();
                assert.include(
                    Array.from(buttonElement!.classList),
                    'button--' + variant,
                );
                assert.notInclude(
                    Array.from(buttonElement!.classList),
                    'is-loading',
                );
            });
        });
    });
    describe('Is loading', () => {
        const variants = [
            'icon',
            'hollow',
            'round',
            'small',
            'tiny',
            'wide',
            'no-margin',
            'less-margin',
            'no-padding',
            'less-padding',
            'add-space',
        ];
        beforeEach(async () => {
            el = await fixture(html`
                <magic-ui-button
                    variant="error"
                    ?loading="${true}"
                    ?disabled="${false}"
                >
                    Click Me
                </magic-ui-button>
                )
            `);

            buttonElement = el!.shadowRoot!.querySelector('.button');
        });

        variants.forEach((variant) => {
            it(`Should render ${variant} button`, async () => {
                el!.setAttribute(variant, 'true');
                await Promise.resolve();
                assert.include(
                    Array.from(buttonElement!.classList),
                    'button--' + variant,
                );
                assert.include(
                    Array.from(buttonElement!.classList),
                    'is-loading',
                );
                assert.isFalse(buttonElement!.disabled);
            });
        });
    });
});
