interface Service {
  name: string;
  price: string;
}
interface Category {
  title: string;
  services: Service[];
  image?: string;
  image_size?: number;
}
interface PriceListLocale {
  title: string;
  subtitle: string;
  categories: Category[];
}

export const PRICES_LIST: Record<'ua' | 'ru' | 'en', PriceListLocale> = {
  ua: {
    title: 'Прайс на стоматологічні послуги',
    subtitle:
      'Орієнтовні ціни на основні стоматологічні послуги в клініці Dent Life. Точну вартість лікування можна дізнатися після консультації з лікарем.',
    categories: [
      {
        title: 'Чищення зубів (Професійна гігієна)',
        image: 'dl-cleaning.svg',
        image_size: 38,
        services: [
          { name: 'Професійне чищення (ультразвук + Air-Flow + полірування)', price: '≈ 2 200 грн' },
          { name: 'Комплексна гігієна (2 щелепи, акційна пропозиція)', price: '≈ 1 730 грн' },
          { name: 'Професійна чистка I категорії (1 щелепа)', price: '≈ 1 000 грн' },
          { name: 'Професійна чистка II категорії (1 щелепа)', price: '≈ 1 250 грн' }
        ]
      },
      {
        title: 'Лікування зубів (Терапія)',
        image: 'dl-tooth-filling.svg',
        image_size: 34,
        services: [
          { name: 'Консультація стоматолога', price: '≈ 300 - 500 грн' },
          { name: 'Лікування карієсу (фотополімерна пломба)', price: '≈ 1 800 - 2 500 грн' },
          { name: 'Тимчасова пломба', price: '≈ 400 - 500 грн' },
          { name: 'Реставрація зуба (естетична)', price: '≈ 2 000 - 4 000 грн' },
          { name: 'Лікування каналів під мікроскопом (1 канал)', price: '≈ 4 400 грн' },
          { name: 'Лікування ускладнених каналів', price: 'від 6 000 грн' }
        ]
      },
      {
        title: 'Протезування зубів',
        image: 'dl-koronka.svg',
        image_size: 32,
        services: [
          { name: 'Металокерамічна коронка', price: '≈ 7 500 - 9 000 грн' },
          { name: 'Коронка із діоксиду цирконію', price: '≈ 13 000 - 18 000 грн' },
          { name: 'Вінір', price: '≈ 9 000 - 15 000 грн' },
          { name: 'Знімний протез (акриловий)', price: '≈ 9 000 грн' }
        ]
      },
      {
        title: 'Імплантація зубів',
        image: 'dl-implant.svg',
        image_size: 32,
        services: [
          { name: 'Імплант базової категорії', price: '≈ 11 000 - 15 000 грн' },
          { name: 'Імплант преміум (Straumann, MegaGen тощо)', price: '≈ 17 000 - 27 000 грн' },
          { name: 'Синус-ліфтинг (закритий / відкритий)', price: '≈ 7 400 - 14 800 грн' }
        ]
      },
      {
        title: 'Рентген / Діагностика',
        image: 'dl-x-ray.svg',
        image_size: 32,
        services: [
          { name: 'Огляд та консультація з планом лікування', price: '≈ 250 - 500 грн' },
          { name: 'Прицільний знімок зуба', price: '≈ 150 - 500 грн' }
        ]
      },
      {
        title: 'Дитяча стоматологія',
        image: 'dl-happy-tooth.svg',
        image_size: 38,
        services: [
          { name: 'Консультація дитячого стоматолога', price: '≈ 500 грн' },
          { name: 'Пломбування молочного зуба', price: '≈ 1 100 - 2 500 грн' },
          { name: 'Герметизація фісур', price: '≈ 1 200 - 1 600 грн' },
          { name: 'Зняття зубного нальоту у дітей', price: '≈ 700 - 1 000 грн' }
        ]
      }
    ]
  },

  ru: {
    title: 'Прайс на стоматологические услуги',
    subtitle:
      'Ориентировочные цены на основные стоматологические услуги в клинике Dent Life. Точную стоимость лечения можно узнать после консультации с врачом.',
    categories: [
      {
        title: 'Чистка зубов (Профессиональная гигиена)',
        services: [
          { name: 'Профессиональная чистка (ультразвук + Air-Flow + полировка)', price: '≈ 2 200 грн' },
          { name: 'Комплексная гигиена (2 челюсти, акционное предложение)', price: '≈ 1 730 грн' },
          { name: 'Профессиональная чистка I категории (1 челюсть)', price: '≈ 1 000 грн' },
          { name: 'Профессиональная чистка II категории (1 челюсть)', price: '≈ 1 250 грн' }
        ]
      },
      {
        title: 'Лечение зубов (Терапия)',
        services: [
          { name: 'Консультация стоматолога', price: '≈ 300 - 500 грн' },
          { name: 'Лечение кариеса (фотополимерная пломба)', price: '≈ 1 800 - 2 500 грн' },
          { name: 'Временная пломба', price: '≈ 400 - 500 грн' },
          { name: 'Реставрация зуба (эстетическая)', price: '≈ 2 000 - 4 000 грн' },
          { name: 'Лечение каналов под микроскопом (1 канал)', price: '≈ 4 400 грн' },
          { name: 'Лечение осложненных каналов', price: 'от 6 000 грн' }
        ]
      },
      {
        title: 'Протезирование зубов',
        services: [
          { name: 'Металлокерамическая коронка', price: '≈ 7 500 - 9 000 грн' },
          { name: 'Коронка из диоксида циркония', price: '≈ 13 000 - 18 000 грн' },
          { name: 'Винир', price: '≈ 9 000 - 15 000 грн' },
          { name: 'Съемный протез (акриловый)', price: '≈ 9 000 грн' }
        ]
      },
      {
        title: 'Имплантация зубов',
        services: [
          { name: 'Имплант базовой категории', price: '≈ 11 000 - 15 000 грн' },
          { name: 'Имплант премиум (Straumann, MegaGen и т.д.)', price: '≈ 17 000 - 27 000 грн' },
          { name: 'Синус-лифтинг (закрытый / открытый)', price: '≈ 7 400 - 14 800 грн' }
        ]
      },
      {
        title: 'Рентген / Диагностика',
        services: [
          { name: 'Осмотр и консультация с планом лечения', price: '≈ 250 - 500 грн' },
          { name: 'Прицельный снимок зуба', price: '≈ 150 - 500 грн' }
        ]
      },
      {
        title: 'Детская стоматология',
        services: [
          { name: 'Консультация детского стоматолога', price: '≈ 500 грн' },
          { name: 'Пломбирование молочного зуба', price: '≈ 1 100 - 2 500 грн' },
          { name: 'Герметизация фиссур', price: '≈ 1 200 - 1 600 грн' },
          { name: 'Снятие зубного налета у детей', price: '≈ 700 - 1 000 грн' }
        ]
      }
    ]
  },

  en: {
    title: 'Price list for dental services',
    subtitle:
      'Approximate prices for basic dental services at Dent Life clinic. The exact cost of treatment can be found out after a consultation with the doctor.',
    categories: [
      {
        title: 'Teeth cleaning (Professional hygiene)',
        services: [
          { name: 'Professional cleaning (ultrasound + Air-Flow + polishing)', price: '≈ 2 200 UAH' },
          { name: 'Comprehensive hygiene (2 jaws, promotional offer)', price: '≈ 1 730 UAH' },
          { name: 'Professional cleaning I category (1 jaw)', price: '≈ 1 000 UAH' },
          { name: 'Professional cleaning II category (1 jaw)', price: '≈ 1 250 UAH' }
        ]
      },
      {
        title: 'Tooth treatment (Therapy)',
        services: [
          { name: 'Dentist consultation', price: '≈ 300 - 500 UAH' },
          { name: 'Caries treatment (photopolymer filling)', price: '≈ 1 800 - 2 500 UAH' },
          { name: 'Temporary filling', price: '≈ 400 - 500 UAH' },
          { name: 'Tooth restoration (aesthetic)', price: '≈ 2 000 - 4 000 UAH' },
          { name: 'Microscope channel treatment (1 channel)', price: '≈ 4 400 UAH' },
          { name: 'Treatment of complicated channels', price: 'from 6 000 UAH' }
        ]
      },
      {
        title: 'Tooth prosthetics',
        services: [
          { name: 'Metal-ceramic crown', price: '≈ 7 500 - 9 000 UAH' },
          { name: 'Zirconium dioxide crown', price: '≈ 13 000 - 18 000 UAH' },
          { name: 'Veneer', price: '≈ 9 000 - 15 000 UAH' },
          { name: 'Removable denture (acrylic)', price: '≈ 9 000 UAH' }
        ]
      },
      {
        title: 'Dental implantation',
        services: [
          { name: 'Basic category implant', price: '≈ 11 000 - 15 000 UAH' },
          { name: 'Premium implant (Straumann, MegaGen, etc.)', price: '≈ 17 000 - 27 000 UAH' },
          { name: 'Sinus lift (closed / open)', price: '≈ 7 400 - 14 800 UAH' }
        ]
      },
      {
        title: 'X-ray / Diagnostics',
        services: [
          { name: 'Examination and consultation with a treatment plan', price: '≈ 250 - 500 UAH' },
          { name: 'Targeted tooth image', price: '≈ 150 - 500 UAH' }
        ]
      },
      {
        title: 'Pediatric dentistry',
        services: [
          { name: "Children's dentist consultation", price: '≈ 500 UAH' },
          { name: 'Filling a baby tooth', price: '≈ 1 100 - 2 500 UAH' },
          { name: 'Fissure sealing', price: '≈ 1 200 - 1 600 UAH' },
          { name: 'Removing plaque in children', price: '≈ 700 - 1 000 UAH' }
        ]
      }
    ]
  }
};
