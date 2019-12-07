import '@webcomponents/webcomponentsjs';
import { assert } from 'chai';
import { fixture, html } from '@open-wc/testing-helpers';

describe('<magic-ui-dropdown>', () => {
    const options = [
        { name: 'test1', value: 'test1' },
        { name: 'test2', value: 'test2' },
    ];
    let el: null | Element = null;
    let select: null | HTMLSelectElement = null;

    describe('custom attributes', () => {
        beforeEach(async () => {
            el = await fixture(
                html`
                    <magic-ui-dropdown
                        .options="${options}"
                    ></magic-ui-dropdown>
                `,
            );
            select = el.shadowRoot!.querySelector('select');
        });

        it('should have two options', () => {
            assert.equal(2, select!.getElementsByTagName('option').length);
        });

        it('the first option should have the right value', () => {
            assert.equal(
                select!.getElementsByTagName('option')[0].getAttribute('value'),
                '0',
            );
        });
    });

    describe('with a value', () => {
        beforeEach(async () => {
            el = await fixture(
                html`
                    <magic-ui-dropdown
                        .options="${options}"
                        value="test2"
                    ></magic-ui-dropdown>
                `,
            );
            select = el.shadowRoot!.querySelector('select');
        });

        it('should set the right option as selected on when value attribute is set', async () => {
            // Index of the `test2` option:
            assert.equal(select!.value, '1');
            assert.isTrue(select!.getElementsByTagName('option')[1].selected);
        });
    });
});
