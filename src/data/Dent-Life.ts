interface metaInfo {
  name: string;
  address: string;
  schedule: string;
  description: string;
  keywords: string; // SEO keywords
  banner: {
    slogan: string;
    text: string;
    doctor_name: string;
    doctor_title: string;
  };
}

export const META: Record<'ua' | 'ru' | 'en', metaInfo> = {
  ua: {
    name: 'Дент-Лайф',
    address: 'м. Вишневе, вул. Вітянська, 1-А, офіс 1',
    schedule: 'Пн-Сб 9:00-19:00 <br> Нд - вихідний',
    description: "Стоматологічна клініка Дент-Лайф - сучасний підхід до вашого здоров'я та посмішки.",
    keywords:
      "стоматологія, клініка, Dent-Life, лікування зубів, профілактика, посмішка, здоров'я ротової порожнини", // SEO keywords
    banner: {
      slogan: '<span class="slogan">Стоматологія</span> &nbsp; <wbr> для всієї родини! <wbr>місто Вишневе',
      text: 'Стоматологія - наука, переважно прикладна, тому хороший стоматолог - це, як талановитий художник. Насправді неважливо які у лікаря дипломи та регалії, а важливо які у нього руки.',
      doctor_name: "Максименко Олег В'ячеславович",
      doctor_title: 'лікар-стоматолог, терапевт'
    }
  },
  ru: {
    name: 'Дент-Лайф',
    address: 'г. Вишневое, ул. Витянская, 1-А, офис 1',
    schedule: 'Пн-Сб 9:00-19:00 <br> Вс - выходной',
    description: 'Стоматологическая клиника Дент-Лайф - современный подход к вашему здоровью и улыбке.',
    keywords:
      'стоматология, клиника, Dent-Life, лечение зубов, профилактика, улыбка, здоровье ротовой полости', // SEO keywords
    banner: {
      slogan: '<span class="slogan">Стоматология</span> &nbsp; <wbr> для всей семьи! <wbr>город Вишневое',
      text: 'Стоматология - наука, преимущественно прикладная, поэтому хороший стоматолог - это, как талантливый художник. На самом деле неважно какие у врача дипломы и регалии, а важно какие у него руки.',
      doctor_name: 'Максименко Олег Вячеславович',
      doctor_title: 'врач-стоматолог, терапевт'
    }
  },
  en: {
    name: 'Dent-Life',
    address: 'Vishneve, Vityanska St, 1-A, Office 1',
    schedule: 'Mon-Sat 9:00-19:00 <br> Sun - closed',
    description: 'Dent-Life Dental Clinic - a modern approach to your health and smile.',
    keywords: 'dentistry, clinic, Dent-Life, dental treatment, prevention, smile, oral health', // SEO keywords
    banner: {
      slogan: '<span class="slogan">Dentistry</span> &nbsp; <wbr> for the whole family! <wbr>Vishneve city',
      text: 'Dentistry is a science, mostly applied, so a good dentist is like a talented artist. In fact, it does not matter what diplomas and regalia the doctor has, but what kind of hands he has.',
      doctor_name: 'Maksymenko Oleg Vyacheslavovich',
      doctor_title: 'dentist-therapist'
    }
  }
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
  viber: '+380965411999'
};
export const LANGUAGES = ['ua', 'ru', 'en'];
const languageNames: Record<string, string> = { ua: 'Українська', ru: 'Русский', en: 'English' };
export const LANGUAGE_OPTIONS = LANGUAGES.map((lang) => ({
  value: lang,
  text: languageNames[lang] || lang
}));
export const getLanguageText = (lang: string) => {
  return languageNames[lang] || lang;
};
interface cardInfo {
  title: string;
  cards: Card[];
}
interface Card {
  id: number;
  title: string;
  image: string;
  image_size: number;
  image_bg: string;
  details: { title: string }[]; // details is an array of objects with title string
}
export const CARDS: Record<'ua' | 'ru' | 'en', cardInfo> = {
  ua: {
    title: 'Наші послуги:',
    cards: [
      {
        id: 1,
        title: 'Чищення зубів',
        image: 'dl-cleaning.svg',
        image_size: 48,
        image_bg: '01-profilactic.jpg',
        details: [
          { title: 'Професійне чищення зубів' },
          { title: 'Видалення зубного нальоту ультразвуком' },
          { title: 'Видалення зубного каменю' },
          { title: 'Чищення зубів Air Flow' },
          { title: 'Відбілювання зубів' }
        ]
      },
      {
        id: 2,
        title: 'Лікування зубів',
        image: 'dl-tooth-filling.svg',
        image_size: 42,
        image_bg: '02-treatment.jpg',
        details: [
          { title: 'Лікування карієсу' },
          { title: 'Лікування пульпіту' },
          { title: 'Лікування періодонтиту' },
          { title: 'Реставрація зубів' },
          { title: 'Лікування коренів зубів' }
        ]
      },
      {
        id: 3,
        title: 'Протезування зубів',
        image: 'dl-koronka.svg',
        image_size: 38,
        image_bg: '03-prosthetics.jpg',
        details: [
          { title: 'Встановлення коронок' },
          { title: 'Цирконієві коронки' },
          { title: 'Коронки на імплантах' },
          { title: 'Вініри' },
          { title: 'Металокерамічні коронки' }
        ]
      },
      {
        id: 4,
        title: 'Імплантація зубів',
        image: 'dl-implant.svg',
        image_size: 40,
        image_bg: '04-implantation.jpg',
        details: [
          { title: 'Встановлення зубних імплантів' },
          { title: 'Імплантація All-on-4' },
          { title: 'Синус-ліфтинг' },
          { title: 'Кісткова пластика' }
        ]
      },
      {
        id: 5,
        title: 'Рентген діагностика',
        image: 'dl-x-ray.svg',
        image_size: 48,
        image_bg: '05-x-ray.jpg',
        details: [{ title: 'Прицільний знімок' }]
      },
      {
        id: 6,
        title: 'Дитяча стоматологія',
        image: 'dl-happy-tooth.svg',
        image_size: 48,
        image_bg: '06-children.jpg',
        details: [
          { title: 'Лікування молочних зубів' },
          { title: 'Профілактика карієсу у дітей' },
          { title: 'Фторування зубів' },
          { title: 'Герметизація фісур' }
        ]
      }
    ]
  },
  ru: {
    title: 'Наши услуги:',
    cards: [
      {
        id: 1,
        title: 'Чистка зубов',
        image: 'dl-cleaning.svg',
        image_size: 48,
        image_bg: '01-profilactic.jpg',
        details: [
          { title: 'Профессиональная чистка зубов' },
          { title: 'Удаление зубного налета ультразвуком' },
          { title: 'Удаление зубного камня' },
          { title: 'Чистка зубов Air Flow' },
          { title: 'Отбеливание зубов' }
        ]
      },
      {
        id: 2,
        title: 'Лечение зубов',
        image: 'dl-tooth-filling.svg',
        image_size: 42,
        image_bg: '02-treatment.jpg',
        details: [
          { title: 'Лечение кариеса' },
          { title: 'Лечение пульпита' },
          { title: 'Лечение периодонтита' },
          { title: 'Реставрация зубов' },
          { title: 'Лечение корней зубов' }
        ]
      },
      {
        id: 3,
        title: 'Протезирование зубов',
        image: 'dl-koronka.svg',
        image_size: 38,
        image_bg: '03-prosthetics.jpg',
        details: [
          { title: 'Установка коронок' },
          { title: 'Циркониевые коронки' },
          { title: 'Коронки на имплантах' },
          { title: 'Виниры' },
          { title: 'Металлокерамические коронки' }
        ]
      },
      {
        id: 4,
        title: 'Имплантация зубов',
        image: 'dl-implant.svg',
        image_size: 40,
        image_bg: '04-implantation.jpg',
        details: [
          { title: 'Установка зубных имплантов' },
          { title: 'Имплантация All-on-4' },
          { title: 'Синус-лифтинг' },
          { title: 'Костная пластика' }
        ]
      },
      {
        id: 5,
        title: 'Рентген диагностика',
        image: 'dl-x-ray.svg',
        image_size: 48,
        image_bg: '05-x-ray.jpg',
        details: [{ title: 'Прицельный снимок' }]
      },
      {
        id: 6,
        title: 'Детская стоматология',
        image: 'dl-happy-tooth.svg',
        image_size: 48,
        image_bg: '06-children.jpg',
        details: [
          { title: 'Лечение молочных зубов' },
          { title: 'Профилактика кариеса у детей' },
          { title: 'Фторирование зубов' },
          { title: 'Герметизация фиссур' }
        ]
      }
    ]
  },

  en: {
    title: 'Our services:',
    cards: [
      {
        id: 1,
        title: 'Teeth cleaning',
        image: 'dl-tooth-filling.svg',
        image_size: 42,
        image_bg: '01-profilactic.jpg',
        details: [
          { title: 'Professional teeth cleaning' },
          { title: 'Removal of dental plaque with ultrasound' },
          { title: 'Removal of tartar' },
          { title: 'Air Flow teeth cleaning' },
          { title: 'Teeth whitening' }
        ]
      },
      {
        id: 2,
        title: 'Dental treatment',
        image: 'dl-cleaning.svg',
        image_size: 48,
        image_bg: '02-treatment.jpg',
        details: [
          { title: 'Caries treatment' },
          { title: 'Pulpitis treatment' },
          { title: 'Periodontitis treatment' },
          { title: 'Tooth restoration' },
          { title: 'Root canal treatment' }
        ]
      },
      {
        id: 3,
        title: 'Dental prosthetics',
        image: 'dl-koronka.svg',
        image_size: 38,
        image_bg: '03-prosthetics.jpg',
        details: [
          { title: 'Crown installation' },
          { title: 'Zirconia crowns' },
          { title: 'Crowns on implants' },
          { title: 'Veneers' },
          { title: 'Metal-ceramic crowns' }
        ]
      },
      {
        id: 4,
        title: 'Dental implantation',
        image: 'dl-implant.svg',
        image_size: 40,
        image_bg: '04-implantation.jpg',
        details: [
          { title: 'Dental implant placement' },
          { title: 'All-on-4 implantation' },
          { title: 'Sinus lift' },
          { title: 'Bone grafting' }
        ]
      },
      {
        id: 5,
        title: 'X-ray diagnostics',
        image: 'dl-x-ray.svg',
        image_size: 48,
        image_bg: '05-x-ray.jpg',
        details: [{ title: 'Targeted image' }]
      },
      {
        id: 6,
        title: 'Pediatric dentistry',
        image: 'dl-happy-tooth.svg',
        image_size: 48,
        image_bg: '06-children.jpg',
        details: [
          { title: 'Treatment of baby teeth' },
          { title: 'Prevention of caries in children' },
          { title: 'Tooth fluoridation' },
          { title: 'Fissure sealing' }
        ]
      }
    ]
  }
};

export const SLIDER: Record<'ua' | 'ru' | 'en', { title: string }> = {
  ua: {
    title:
      'За кожною усмішкою наших пацієнтів стоїть команда Dent Life — лікарі, які люблять свою справу, мають великий досвід і щиро піклуються про результат.'
  },
  ru: {
    title:
      'За каждой улыбкой наших пациентов стоит команда Dent Life — врачи, которые любят свое дело, имеют большой опыт и искренне заботятся о результате.'
  },
  en: {
    title:
      'Behind every smile of our patients is the Dent Life team - doctors who love their work, have extensive experience and sincerely care about the result.'
  }
};

export interface AboutItem {
  title: string;
  image: string;
  image_size: number;
  image_url?: string;
}

export interface AboutLocale {
  title: string;
  subtitle?: string;
  image?: string;
  items?: AboutItem[];
}

export const ABOUT_US: Record<string, AboutLocale> = {
  ua: {
    title:
      'Дент-Лайф — це простір сучасної стоматології, де турбота про пацієнта поєднується з новітніми технологіями.',
    subtitle: 'Ми працюємо, щоб кожен візит до стоматолога був комфортним, безболісним і результативним.',
    image: '01-about-us-wt.svg',
    items: [
      { title: 'Більше 10 років досвіду', image: '01-about-us.svg', image_size: 56 },
      {
        title: 'Сучасне обладнання європейського рівня',
        image: '02-about-us.svg',
        image_size: 56
      },
      { title: 'Команда сертифікованих фахівців', image: '03-about-us.svg', image_size: 56 },
      {
        title: 'Індивідуальний підхід до кожного пацієнта',
        image: '04-about-us.svg',
        image_size: 56
      }
    ]
  },
  ru: {
    title:
      'Дент-Лайф — это пространство современной стоматологии, где забота о пациенте сочетается с новейшими технологиями.',
    subtitle:
      'Мы работаем, чтобы каждый визит к стоматологу был комфортным, безболезненным и результативным.',
    image: '01-about-us.svg',
    items: [
      { title: 'Более 10 лет опыта', image: '01-about-us.svg', image_size: 56 },
      {
        title: 'Современное оборудование европейского уровня',
        image: '02-about-us.svg',
        image_size: 56
      },
      { title: 'Команда сертифицированных специалистов', image: '03-about-us.svg', image_size: 56 },
      {
        title: 'Индивидуальный подход к каждому пациенту',
        image: '04-about-us.svg',
        image_size: 56
      }
    ]
  },
  en: {
    title:
      'Dent-Life is a space of modern dentistry where patient care is combined with the latest technologies.',
    subtitle: 'We work to make every visit to the dentist comfortable, painless and effective.',
    image: '01-about-us.svg',
    items: [
      { title: 'Over 10 years of experience', image: '01-about-us.svg', image_size: 56 },
      { title: 'Modern European-level equipment', image: '02-about-us.svg', image_size: 56 },
      { title: 'A team of certified specialists', image: '03-about-us.svg', image_size: 56 },
      { title: 'An individual approach to each patient', image: '04-about-us.svg', image_size: 56 }
    ]
  }
};
