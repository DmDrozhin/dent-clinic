import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { LANGUAGES, META } from '@/settings/Dent-Life.ts';
import { createAssetMap } from '@/utils/assets.ts';

export const useMaineStore = defineStore('main', () => {
  const currentLang = ref('ua');
  function updateLanguage(language: string) {
    if (!LANGUAGES.includes(language)) {
      console.warn(`Language ${language} is not supported.`);
      return;
    }
    currentLang.value = language;
  }

  const userIcons = import.meta.glob<{ default: string }>('@/assets/images/ui/*', { eager: true });
  const userIconsMap = createAssetMap(userIcons);
  const currentMeta = computed(() => META[currentLang.value as 'ua' | 'ru' | 'en'] || META.ua);

  return { currentLang, updateLanguage, userIconsMap, currentMeta };
});
