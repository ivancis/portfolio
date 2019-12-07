import { getSelectorFunction } from '@gig/magic-test-helpers/dist/cypress/selector';

export const FormField = {
    successIcon: getSelectorFunction('icon-success'),
    errorIcon: getSelectorFunction('icon-error'),
    message: getSelectorFunction('message-test'),
};
