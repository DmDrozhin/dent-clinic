import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { LANGUAGES, META, CARDS, SLIDER } from '@/settings/Dent-Life.ts';
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
  const prices = ref<Record<string, { treatment: string; price: string }[]>>({});
  const userIcons = import.meta.glob<{ default: string }>('@/assets/images/ui/*', { eager: true });
  const userIconsMap = createAssetMap(userIcons);
  const currentMeta = computed(() => META[currentLang.value as 'ua' | 'ru' | 'en'] || META.ua);

  const currentCards = computed(() => {
    const cards = CARDS[currentLang.value as 'ua' | 'ru' | 'en'] || CARDS.ua;
    return cards.map((card) => ({
      ...card,
      // если имя есть в userIconsMap — подставляем путь
      image: userIconsMap[card.image] || card.image,
    }));
  });
  const currentSlider = computed(() => {
    return SLIDER[currentLang.value as 'ua' | 'ru' | 'en'] || SLIDER.ua;
  });

  async function getSheetData(sheetId: string, range: string, apiKey: string) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.values);
    return data.values;
  }
  const google_docs_api_key = import.meta.env.VITE_GOOGLE_DOCS_API_KEY;
  const google_sheet_id = import.meta.env.VITE_GOOGLE_SHEET_ID;

  async function fetchPrices() {
    try {
      const data = await getSheetData(google_sheet_id, 'Prices!A1:E100', google_docs_api_key);

      if (!data || data.length < 2) {
        console.warn('No data found in sheet.');
        prices.value = {};
        return;
      }

      const headers = data[0];
      const directionIndex = headers.indexOf('Treatment direction');
      const treatmentIndex = headers.indexOf('Treatment');
      const priceIndex = headers.indexOf('Price');

      const grouped: Record<string, { treatment: string; price: string }[]> = {};

      data.slice(1).forEach((row: string[]) => {
        const direction = row[directionIndex]?.trim();
        const treatment = row[treatmentIndex]?.trim();
        const price = row[priceIndex]?.trim();

        if (!direction || !treatment || !price) return;

        if (!grouped[direction]) {
          grouped[direction] = [];
        }

        grouped[direction].push({ treatment, price });
      });

      prices.value = grouped;

      console.log('Prices fetched and grouped:', prices.value);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  }
  return {
    currentLang,
    updateLanguage,
    currentMeta,
    currentCards,
    currentSlider,
    userIconsMap,
    fetchPrices,
    prices,
  };
});
