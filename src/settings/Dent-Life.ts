interface metaInfo {
  name: string;
  description: string;
  keywords: string; // SEO keywords
  address: string;
  schedule: string;
}
export const META: Record<'ua' | 'ru' | 'en', metaInfo> = {
  ua: {
    name: 'Дент-Лайф',
    address: 'м. Вишневе, вул. Вітянська, 1-А, офіс 1',
    schedule: 'Пн-Сб 9:00-19:00 <br> Нд - вихідний',
    description:
      "Стоматологічна клініка Dent-Life - сучасний підхід до вашого здоров'я та посмішки.",
    keywords:
      "стоматологія, клініка, Dent-Life, лікування зубів, профілактика, посмішка, здоров'я ротової порожнини", // SEO keywords
  },
  ru: {
    name: 'Дент-Лайф',
    address: 'г. Вишневое, ул. Витянская, 1-А, офис 1',
    schedule: 'Пн-Сб 9:00-19:00 <br> Вс - выходной',
    description:
      'Стоматологическая клиника Dent-Life - современный подход к вашему здоровью и улыбке.',
    keywords:
      'стоматология, клиника, Dent-Life, лечение зубов, профилактика, улыбка, здоровье ротовой полости', // SEO keywords
  },
  en: {
    name: 'Dent-Life',
    address: 'Vishneve, Vityanska St, 1-A, Office 1',
    schedule: 'Mon-Sat 9:00-19:00 <br> Sun - closed',
    description: 'Dent-Life Dental Clinic - a modern approach to your health and smile.',
    keywords: 'dentistry, clinic, Dent-Life, dental treatment, prevention, smile, oral health', // SEO keywords
  },
};
interface contactInfo {
  phone_1: string;
  phone_2: string;
  email: string;
  viber: string;
}
export const CONTACTS: contactInfo = {
  phone_1: '+380965411999',
  phone_2: '+380505185188',
  email: 'maksimenko-oleg@ukr.net',
  viber: '+380965411999',
};
export const LANGUAGES = ['ua', 'ru', 'en'];
const languageNames: Record<string, string> = { ua: 'Українська', ru: 'Русский', en: 'English' };
export const LANGUAGE_OPTIONS = LANGUAGES.map((lang) => ({
  value: lang,
  text: languageNames[lang] || lang,
}));
export const getLanguageText = (lang: string) => {
  return languageNames[lang] || lang;
};
