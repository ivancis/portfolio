import { getSelectorFunction } from '@gig/magic-test-helpers/dist/cypress/selector';
import { within } from '@gig/magic-test-helpers/dist/cypress/within';

export const UiDate = {
    day: getSelectorFunction('date-day', 'input'),
    month: getSelectorFunction('date-month', 'input'),
    year: getSelectorFunction('date-year', 'input'),
    complete(
        { day, month, year }: { day: string; month: string; year: string },
        chain?: any,
    ) {
        within(($subject) => {
            UiDate.day($subject).type(day);
            UiDate.month($subject).type(month);
            UiDate.year($subject).type(year);
        }, chain);
    },
};
