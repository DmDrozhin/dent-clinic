interface metaInfo {
  name: string;
  description: string;
  keywords: string; // SEO keywords
  banner: {
    text: string;
    doctor_name: string;
    doctor_title: string;
  };
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
    banner: {
      text: 'Стоматологія - наука, переважно прикладна, тому хороший стоматолог - це, як талановитий художник. Насправді неважливо які у лікаря дипломи та регалії, а важливо які у нього руки.',
      doctor_name: 'Максименко Олег В\'ячеславович',
      doctor_title: 'лікар-стоматолог, терапевт',
    }
  },
  ru: {
    name: 'Дент-Лайф',
    address: 'г. Вишневое, ул. Витянская, 1-А, офис 1',
    schedule: 'Пн-Сб 9:00-19:00 <br> Вс - выходной',
    description:
      'Стоматологическая клиника Dent-Life - современный подход к вашему здоровью и улыбке.',
    keywords:
      'стоматология, клиника, Dent-Life, лечение зубов, профилактика, улыбка, здоровье ротовой полости', // SEO keywords
    banner: {
      text: 'Стоматология - наука, по большей части прикладная, поэтому хороший стоматолог - это, как талантливый художник. На самом деле неважно какие у врача дипломы и регалии, а важно какие у него руки.',
      doctor_name: 'Максименко Олег Вячеславович',
      doctor_title: 'врач-стоматолог, терапевт',
    }
  },
  en: {
    name: 'Dent-Life',
    address: 'Vishneve, Vityanska St, 1-A, Office 1',
    schedule: 'Mon-Sat 9:00-19:00 <br> Sun - closed',
    description: 'Dent-Life Dental Clinic - a modern approach to your health and smile.',
    keywords: 'dentistry, clinic, Dent-Life, dental treatment, prevention, smile, oral health', // SEO keywords
    banner: {
      text: 'Dentistry is a science, mostly applied, so a good dentist is like a talented artist. In fact, it does not matter what diplomas and regalia the doctor has, but what kind of hands he has.',
      doctor_name: 'Maksymenko Oleg Vyacheslavovich',
      doctor_title: 'dentist-therapist',
    }
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
