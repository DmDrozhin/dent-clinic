import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles'

import customTheme from '@/plugins/themes';
import defaults from '@/plugins/defaults';
import '@/styles/settings.scss';

export default createVuetify({
  components,
  directives,
  theme: customTheme,
  defaults: defaults,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
