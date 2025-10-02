
interface metaInfo {
  name: string;
  address: string;
  schedule: string;
  description: string;
  keywords: string; // SEO keywords
  banner: {
    text: string;
    doctor_name: string;
    doctor_title: string;
  };
  services?: {
    id: number;
    title: string;
    image: string;
    details: { title: string }[];
  }[];
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
      doctor_name: "Максименко Олег В'ячеславович",
      doctor_title: 'лікар-стоматолог, терапевт',
    },
    services: [
      {
        id: 1,
        title: 'Чищення зубів',
        image: 'dl-tooth-filling.svg',
        details: [
          {
            title: 'Професійне чищення зубів',
          },
          {
            title: 'Видалення зубного нальоту ультразвуком',
          },
          {
            title: 'Видалення зубного каменю',
          },
          {
            title: 'Чищення зубів Air Flow',
          },
          {
            title: 'Відбілювання зубів',
          },
        ],
      },
      {
        id: 2,
        title: 'Лікування зубів',
        image: 'dl-care.svg',
        details: [
          {
            title: 'Лікування карієсу',
          },
          {
            title: 'Лікування пульпіту',
          },
          {
            title: 'Лікування періодонтиту',
          },
          {
            title: 'Реставрація зубів',
          },
          {
            title: 'Лікування коренів зубів',
          },
          {
            title: 'Лікування ясен',
          },
          {
            title: 'Лікування зубів під наркозом',
          },
          { title: 'Видалення зубів' },
        ],
      },
      {
        id: 3,
        title: 'Протезування зубів',
        image: 'dl-koronka.svg',
        details: [
          {
            title: 'Встановлення коронок',
          },
          {
            title: 'Цирконієві коронки',
          },
          {
            title: 'Коронки на імплантах',
          },
          { title: 'Вініри' },
          {
            title: 'Металокерамічні коронки',
          },
        ],
      },
      {
        id: 4,
        title: 'Імплантація зубів',
        image: 'dl-implant.svg',
        details: [
          {
            title: 'Встановлення зубних імплантів',
          },
          {
            title: 'Імплантація All-on-4',
          },
          {
            title: 'Синус-ліфтинг',
          },
          {
            title: 'Кісткова пластика',
          },
        ],
      },
      {
        id: 5,
        title: 'Рентген діагностика',
        image: 'dl-x-ray.svg',
        details: [
          { title: 'Прицільний знімок' },
          { title: 'Ортопантомограма (панорамний знімок)' },
        ],
      },
      {
        id: 6,
        title: "Дитяча стоматологія",
        image: 'dl-happy-tooth.svg',
        details: [
          { title: 'Лікування молочних зубів' },
          { title: 'Профілактика карієсу у дітей' },
          { title: 'Фторування зубів' },
          { title: 'Герметизація фісур' },
        ],
      },
    ],
  },
  ru: {
    name: 'Дент-Лайф',
    address: 'г. Вишневое, ул. Витянская, 1-А, офис 1',
    schedule: 'Пн-Сб 9:00-19:00 <br> Вс - выходной',
    description: 'Стоматологическая клиника Dent-Life - современный подход к вашему здоровью и улыбке.',
    keywords:
      'стоматология, клиника, Dent-Life, лечение зубов, профилактика, улыбка, здоровье ротовой полости', // SEO keywords
    banner: {
      text: 'Стоматология - наука, преимущественно прикладная, поэтому хороший стоматолог - это, как талантливый художник. На самом деле неважно какие у врача дипломы и регалии, а важно какие у него руки.',
      doctor_name: 'Максименко Олег Вячеславович',
      doctor_title: 'врач-стоматолог, терапевт',
    },
    services: [
      {
        id: 1,
        title: 'Чистка зубов',
        image: 'dl-tooth-filling.svg',
        details: [
          {
            title: 'Профессиональная чистка зубов',
          },
          {
            title: 'Удаление зубного налета ультразвуком',
          },
          {
            title: 'Удаление зубного камня',
          },
          {
            title: 'Чистка зубов Air Flow',
          },
          {
            title: 'Отбеливание зубов',
          },
        ],
      },
      {
        id: 2,
        title: 'Лечение зубов',
        image: 'dl-care.svg',
        details: [
          {
            title: 'Лечение кариеса',
          },
          {
            title: 'Лечение пульпита',
          },
          {
            title: 'Лечение периодонтита',
          },
          {
            title: 'Реставрация зубов',
          },
          {
            title: 'Лечение корней зубов',
          },
          {
            title: 'Лечение десен',
          },
          {
            title: 'Лечение зубов под наркозом',
          },
          { title: 'Удаление зубов' },
        ],
      },
      {
        id: 3,
        title: 'Протезирование зубов',
        image: 'dl-koronka.svg',
        details: [
          {
            title: 'Установка коронок',
          },
          {
            title: 'Циркониевые коронки',
          },
          {
            title: 'Коронки на имплантах',
          },
          { title: 'Виниры' },
          {
            title: 'Металлокерамические коронки',
          },
        ],
      },
      {
        id: 4,
        title: 'Имплантация зубов',
        image: 'dl-implant.svg',
        details: [
          {
            title: 'Установка зубных имплантов',
          },
          {
            title: 'Имплантация All-on-4',
          },
          {
            title: 'Синус-лифтинг',
          },
          {
            title: 'Костная пластика',
          },
        ],
      },
      {
        id: 5,
        title: 'Рентген диагностика',
        image: 'dl-x-ray.svg',
        details: [
          { title: 'Прицельный снимок' },
          { title: 'Ортопантомограмма (панорамный снимок)' },
        ],
      },
      {
        id: 6,
        title: 'Детская стоматология',
        image: 'dl-happy-tooth.svg',
        details: [
          { title: 'Лечение молочных зубов' },
          { title: 'Профилактика кариеса у детей' },
          { title: 'Фторирование зубов' },
          { title: 'Герметизация фиссур' },
        ],
      },
    ],
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
    },
    services: [
      {
        id: 1,
        title: 'Teeth cleaning',
        image: 'dl-tooth-filling.svg',
        details: [
          {
            title: 'Professional teeth cleaning',
          },
          {
            title: 'Removal of dental plaque with ultrasound',
          },
          {
            title: 'Removal of tartar',
          },
          {
            title: 'Air Flow teeth cleaning',
          },
          {
            title: 'Teeth whitening',
          },
        ],
      },
      {
        id: 2,
        title: 'Dental treatment',
        image: 'dl-care.svg',
        details: [
          {
            title: 'Caries treatment',
          },
          {
            title: 'Pulpitis treatment',
          },
          {
            title: 'Periodontitis treatment',
          },
          {
            title: 'Tooth restoration',
          },
          {
            title: 'Root canal treatment',
          },
          {
            title: 'Gum treatment',           },
        ],
      },
      {
        id: 3,
        title: 'Dental prosthetics',
        image: 'dl-koronka.svg',
        details: [
          {
            title: 'Crown installation',
          },
          {
            title: 'Zirconia crowns',
          },
          {
            title: 'Crowns on implants',
          },
          { title: 'Veneers' },
          {
            title: 'Metal-ceramic crowns',
          },
        ],
      },
      {
        id: 4,
        title: 'Dental implantation',
        image: 'dl-implant.svg',
        details: [
          {
            title: 'Dental implant placement',
          },
          {
            title: 'All-on-4 implantation',
          },
          {
            title: 'Sinus lift',
          },
          {
            title: 'Bone grafting',
          },
        ],
      },
      {
        id: 5,
        title: 'X-ray diagnostics',
        image: 'dl-x-ray.svg',
        details: [
          { title: 'Targeted image' },
          { title: 'Orthopantomogram (panoramic image)' },
        ],
      },
      {
        id: 6,
        title: 'Pediatric dentistry',
        image: 'dl-happy-tooth.svg',
        details: [
          { title: 'Treatment of baby teeth' },
          { title: 'Prevention of caries in children' },
          { title: 'Tooth fluoridation' },
          { title: 'Fissure sealing' },
        ],
      },
    ],
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
