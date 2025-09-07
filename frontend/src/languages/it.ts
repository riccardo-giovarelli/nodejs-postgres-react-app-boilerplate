import { authentication } from './authentication.it';
import { indoorMenu } from './indoor-menu.it';
import { userMenu } from './user-menu.it';
import { userProfile } from './user-profile.it';
import { home } from './home.it';

export const it = {
  translation: {
    ...authentication.translation,
    ...indoorMenu.translation,
    ...userMenu.translation,
    ...userProfile.translation,
    ...home.translation,
  },
};
