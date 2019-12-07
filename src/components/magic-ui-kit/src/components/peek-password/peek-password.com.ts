import { getSelectorFunction } from '@gig/magic-test-helpers/dist/cypress/selector';

export const PeekPassword = {
    eyeButton: getSelectorFunction('eye-password'),
    eyeIcon: getSelectorFunction('eye-icon'),
};
