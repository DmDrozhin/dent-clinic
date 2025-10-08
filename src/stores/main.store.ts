import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { LANGUAGES, META, CARDS, SLIDER, ABOUT_US } from '@/data/Dent-Life';
import { PRICES_LIST } from '@/data/Price-List';
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
  interface Card {
    id: number;
    title: string;
    image: string;
    image_url?: string;
    image_size: number;
    details: { title: string }[];
  }
  interface CardInfo {
    title: string;
    cards: Card[];
  }
  // currentCards has to return an object with title and cards array according to current language
  const currentCards = computed<CardInfo>(() => {
    const cardsObj = CARDS[currentLang.value as 'ua' | 'ru' | 'en'] || CARDS.ua;
    return {
      title: cardsObj.title,
      cards: Array.isArray(cardsObj.cards)
        ? cardsObj.cards.map((card) => ({
            ...card,
            image_url: userIconsMap[card.image] || card.image
          }))
        : []
    };
  });
  const currentSlider = computed(() => {
    return SLIDER[currentLang.value as 'ua' | 'ru' | 'en'] || SLIDER.ua;
  });
  interface AboutItem {
    title: string;
    image: string;
    image_size: number;
    image_url?: string;
  }
  interface AboutLocale {
    title: string;
    subtitle?: string;
    image?: string;
    items?: AboutItem[];
  }
  const currentAbout = computed<AboutLocale>(() => {
    const about = ABOUT_US[currentLang.value as 'ua' | 'ru' | 'en'] || ABOUT_US.ua;
    return {
      title: about.title,
      subtitle: about.subtitle,
      items: Array.isArray(about.items)
        ? about.items.map((item) => ({
            ...item,
            image_url: userIconsMap[item.image] || item.image
          }))
        : []
    };
  });
  const currentPrices = computed(() => {
    return {
      ...PRICES_LIST[currentLang.value as 'ua' | 'ru' | 'en'] || PRICES_LIST.ua,
      categories: (PRICES_LIST[currentLang.value as 'ua' | 'ru' | 'en'] || PRICES_LIST.ua).categories.map((cat) => ({
        ...cat,
        image_url: typeof cat.image === 'string' ? (userIconsMap[cat.image] || cat.image) : ''
      }))
    }
  });

// Fetching and grouping prices from Google Sheets
  async function getSheetData(sheetId: string, range: string, apiKey: string) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(range)}?key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
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

      console.log('Prices fetched and grouped:');
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
    currentAbout,
    currentPrices
  };
});
