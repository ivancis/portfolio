import { registerComponent } from '@gig/magic-common';
export { IDropdownOption } from './dropdown';

import DropdownComponent from './dropdown.vue';

export const Dropdown = registerComponent(DropdownComponent);
