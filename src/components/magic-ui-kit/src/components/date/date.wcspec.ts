import { nextTick } from '@gig/magic-test-helpers/dist/utils';
import { fixture, html } from '@open-wc/testing-helpers';
import { assert } from 'chai';

describe('<magic-ui-date>', () => {
    let el: null | Element = null;
    let date: null | HTMLElement = null;
    let day: null | HTMLElement = null;
    let month: null | HTMLElement = null;
    let year: null | HTMLElement = null;
    let dayfield: null | HTMLInputElement = null;
    let monthfield: null | HTMLInputElement = null;
    let yearfield: null | HTMLInputElement = null;

    describe('Default date', () => {
        beforeEach(async () => {
            el = await fixture(html`
                <magic-ui-date
                    no-margin
                />
            `);
            date = el!.shadowRoot!.querySelector('.date');
            day = el!.shadowRoot!.querySelector('.day');
            dayfield = day!.querySelector('magic-ui-number');
            dayfield = dayfield!
                .shadowRoot!.querySelector('magic-ui-input')!
                .shadowRoot!.querySelector('input');
            month = el!.shadowRoot!.querySelector('.month');
            monthfield = month!.querySelector('magic-ui-number');
            monthfield = monthfield!
                .shadowRoot!.querySelector('magic-ui-input')!
                .shadowRoot!.querySelector('input');
            year = el!.shadowRoot!.querySelector('.year');
            yearfield = year!.querySelector('magic-ui-number');
            yearfield = yearfield!
                .shadowRoot!.querySelector('magic-ui-input')!
                .shadowRoot!.querySelector('input');
        });

        it('should render default date', () => {
            assert.include(Array.from(date!.children[0].classList), 'day');
            assert.include(Array.from(date!.children[1].classList), 'month');
            assert.include(Array.from(date!.children[2].classList), 'year');
        });

        it('should display error on day field when day is out of range', async () => {
            dayfield!.value = '32';
            dayfield!.dispatchEvent(new Event('input'));
            await nextTick();
            let result = el!.shadowRoot!.querySelector('.day');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );

            dayfield!.value = '0';
            dayfield!.dispatchEvent(new Event('input'));
            await nextTick();
            result = el!.shadowRoot!.querySelector('.day');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );
        });

        it('should display success on day field when day is within range', async () => {
            dayfield!.value = '31';
            dayfield!.dispatchEvent(new Event('input'));
            await nextTick();
            let result = el!.shadowRoot!.querySelector('.day');
            assert.isTrue(
                result!.hasAttribute('has-success'),
                'success message is not displayed',
            );

            dayfield!.value = '1';
            dayfield!.dispatchEvent(new Event('input'));
            await nextTick();
            result = el!.shadowRoot!.querySelector('.day');
            assert.isTrue(
                result!.hasAttribute('has-success'),
                'success message is not displayed',
            );
        });

        it('should display error on month field when month is out of range', async () => {
            monthfield!.value = '13';
            monthfield!.dispatchEvent(new Event('input'));
            await nextTick();
            let result = el!.shadowRoot!.querySelector('.month');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );

            monthfield!.value = '0';
            monthfield!.dispatchEvent(new Event('input'));
            await nextTick();
            result = el!.shadowRoot!.querySelector('.month');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );
        });

        it('should display success on month field when month is within range', async () => {
            monthfield!.value = '12';
            monthfield!.dispatchEvent(new Event('input'));
            await nextTick();
            let result = el!.shadowRoot!.querySelector('.month');
            assert.isTrue(
                result!.hasAttribute('has-success'),
                'success message is not displayed',
            );

            monthfield!.value = '1';
            monthfield!.dispatchEvent(new Event('input'));
            await nextTick();
            result = el!.shadowRoot!.querySelector('.month');
            assert.isTrue(
                result!.hasAttribute('has-success'),
                'success message is not displayed',
            );
        });

        it('should display success on year field when year is within range', async () => {
            yearfield!.value = '2099';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            let result = el!.shadowRoot!.querySelector('.year');
            assert.isTrue(
                result!.hasAttribute('has-success'),
                'success message is not displayed',
            );

            yearfield!.value = '1890';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            result = el!.shadowRoot!.querySelector('.year');
            assert.isTrue(
                result!.hasAttribute('has-success'),
                'success message is not displayed',
            );
        });

        it('should display error on year field when year is out of range', async () => {
            yearfield!.value = '2100';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            let result = el!.shadowRoot!.querySelector('.year');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );

            yearfield!.value = '1889';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            result = el!.shadowRoot!.querySelector('.year');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );
        });

        it('should display has-error if when maxlenght exceded', async () => {
            dayfield!.value = '122';
            dayfield!.dispatchEvent(new Event('input'));
            dayfield!.blur();
            await nextTick();
            assert.isTrue(
                day!.hasAttribute('has-error'),
                'error message is not displayed',
            );

            monthfield!.value = '111';
            monthfield!.dispatchEvent(new Event('input'));
            monthfield!.blur();
            await nextTick();
            assert.isTrue(
                month!.hasAttribute('has-error'),
                'error message is not displayed',
            );

            yearfield!.value = '20001';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            assert.isTrue(
                year!.hasAttribute('has-error'),
                'error message is not displayed',
            );
        });

        it('should accept 29 of february on leap year', async () => {
            dayfield!.value = '29';
            dayfield!.dispatchEvent(new Event('input'));
            dayfield!.blur();
            await nextTick();

            monthfield!.value = '2';
            monthfield!.dispatchEvent(new Event('input'));
            monthfield!.blur();
            await nextTick();

            yearfield!.value = '1992';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();

            assert.isTrue(
                day!.hasAttribute('has-success'),
                'error message is not displayed',
            );
            assert.isTrue(
                month!.hasAttribute('has-success'),
                'error message is not displayed',
            );
            assert.isTrue(
                year!.hasAttribute('has-success'),
                'error message is not displayed',
            );
        });

        it('should not accept 29 of february on non leap year', async () => {
            dayfield!.value = '29';
            dayfield!.dispatchEvent(new Event('input'));
            dayfield!.blur();
            await nextTick();

            monthfield!.value = '2';
            monthfield!.dispatchEvent(new Event('input'));
            monthfield!.blur();
            await nextTick();

            yearfield!.value = '1991';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();

            assert.isTrue(
                day!.hasAttribute('has-error'),
                'error message is not displayed',
            );
            assert.isTrue(
                month!.hasAttribute('has-success'),
                'error message is not displayed',
            );
            assert.isTrue(
                year!.hasAttribute('has-success'),
                'error message is not displayed',
            );
        });
    });

    describe('With minimum age', () => {
        beforeEach(async () => {
            el = await fixture(html`
                <magic-ui-date
                    no-margin
                    minimum-age='18'
                />
            `);

            day = el!.shadowRoot!.querySelector('.day');
            dayfield = day!.querySelector('magic-ui-number');
            dayfield = dayfield!
                .shadowRoot!.querySelector('magic-ui-input')!
                .shadowRoot!.querySelector('input');
            month = el!.shadowRoot!.querySelector('.month');
            monthfield = month!.querySelector('magic-ui-number');
            monthfield = monthfield!
                .shadowRoot!.querySelector('magic-ui-input')!
                .shadowRoot!.querySelector('input');
            year = el!.shadowRoot!.querySelector('.year');
            yearfield = year!.querySelector('magic-ui-number');
            yearfield = yearfield!
                .shadowRoot!.querySelector('magic-ui-input')!
                .shadowRoot!.querySelector('input');
        });

        it('should display has-error on date component', async () => {
            dayfield!.value = '12';
            dayfield!.dispatchEvent(new Event('input'));
            monthfield!.value = '10';
            monthfield!.dispatchEvent(new Event('input'));
            yearfield!.value = '2015';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            const result = el!.shadowRoot!.querySelector('.date');
            assert.isTrue(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );
        });

        it('should display not display has-error on date component', async () => {
            dayfield!.value = '12';
            dayfield!.dispatchEvent(new Event('input'));
            monthfield!.value = '3';
            monthfield!.dispatchEvent(new Event('input'));
            yearfield!.value = '2001';
            yearfield!.dispatchEvent(new Event('input'));
            yearfield!.blur();
            await nextTick();
            const result = el!.shadowRoot!.querySelector('.date');
            assert.isFalse(
                result!.hasAttribute('has-error'),
                'error message is not displayed',
            );
        });
    });

    describe('With info', () => {
        beforeEach(async () => {
            const info = 'Enter your date of birth.';
            el = await fixture(html`
                <magic-ui-date
                    no-margin
                    info=${info}
                />
            `);
            date = el!.shadowRoot!.querySelector('.date');
        });

        it('should render date with info message', () => {
            const message = date!.getAttribute('info');
            assert.isTrue(date!.hasAttribute('has-info'));
            assert.equal(message, 'Enter your date of birth.');
        });

        it('should render date without info message', async () => {
            el!.removeAttribute('info');
            await nextTick();
            date = el!.shadowRoot!.querySelector('.date');
            assert.isFalse(date!.hasAttribute('has-info'));
        });
    });
});
