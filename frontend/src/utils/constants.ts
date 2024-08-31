interface LinkItem {
  text: string;
  id: number;
  linkText: string;
  linkUrl: string;
}

interface LinksItems {
  exampleOne: LinkItem[];
  exampleTwo: LinkItem[];
  exampleThree: LinkItem[];
}

interface ButtonNames {
  mainButtonHeader: string;
  mainButtonFooter: string;
}

interface HeaderLink {
  id: number;
  title: string;
  href: string;
}

interface NavLink {
  id: number;
  name: string;
  href: string;
}

interface BlogCard {
  title: string;
  subtitle: string;
  shortDescription: string;
  linkUrl: string;
  linkText: string;
  imgUrl: string;
  id: number;
}

// interface CoachCard {
//   surname: string;
//   name: string;
//   patronymic: string;
//   directions: string[];
//   achievements: string;
//   photo: string;
//   id: number;
// }

interface CardNewsMain {
  id: number;
  linkText: string;
  linkUrl: string;
  imgUrl: string;
}

interface CardCompanyInfo {
  id: number;
  subtitle: string;
  textItem: string;
}

interface slideSwiperGallery {
  id: number;
  linkUrl: string;
  imgUrl: string;
}

interface ITags {
  id: number;
  name: string;
}

interface NewsCard {
  id: number;
  title: string;
  description: string;
  tags: ITags[];
  images: string;
  date_published: string;
}

const linksItems: LinksItems = {
  exampleOne: [
    {
      text: 'Пример1',
      id: 0,
      linkText: 'Пример1',
      linkUrl: '#',
    },
    {
      text: 'Пример2',
      id: 1,
      linkText: 'Пример2',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 2,
      linkText: 'Пример3',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 3,
      linkText: 'Пример4',
      linkUrl: '#',
    },
  ],
  exampleTwo: [
    {
      text: 'Пример1',
      id: 0,
      linkText: 'Пример5',
      linkUrl: '#',
    },
    {
      text: 'Пример2',
      id: 1,
      linkText: 'Пример6',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 2,
      linkText: 'Пример7',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 3,
      linkText: 'Пример8',
      linkUrl: '#',
    },
  ],
  exampleThree: [
    {
      text: 'Пример1',
      id: 0,
      linkText: 'Пример9',
      linkUrl: '#',
    },
    {
      text: 'Пример2',
      id: 1,
      linkText: 'Пример10',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 2,
      linkText: 'Пример11',
      linkUrl: '#',
    },
    {
      text: 'Пример3',
      id: 3,
      linkText: 'Пример12',
      linkUrl: '#',
    },
  ],
};

const buttonsNames: ButtonNames = {
  mainButtonHeader: 'Пример',
  mainButtonFooter: 'Пример',
};

const headerLinks: HeaderLink[] = [
  { id: 0, title: 'Блог', href: '/blog' },
  { id: 1, title: 'Тренерский состав', href: '/coachs' },
  { id: 2, title: 'Новости', href: '/news' },
  { id: 3, title: 'Контакты', href: '/contacts' },
];

const navLinksMenu: NavLink[] = [
  { id: 1, name: 'Главная', href: '/' },
  { id: 2, name: 'Блог', href: '/blog' },
  { id: 3, name: 'Тренерский состав', href: '/coachs' },
  { id: 4, name: 'Новости', href: '/news' },
  { id: 5, name: 'Контакты', href: '/contacts' },
];

const blogCards: BlogCard[] = [
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 0,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 1,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 2,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 3,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 4,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 5,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 6,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 7,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    shortDescription:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-girl-in-gym-class 1.jpg',
    id: 8,
  },
];

// const coachCards: CoachCard[] = [
//   {
//     surname: 'Иванов',
//     name: 'Иван',
//     patronymic: 'Иванович',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 1,
//   },
//   {
//     surname: 'Иванов',
//     name: 'Иван',
//     patronymic: 'Иванович',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 2,
//   },
//   {
//     surname: 'Иванов',
//     name: 'Иван',
//     patronymic: 'Иванович',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 3,
//   },
//   {
//     surname: 'Кузнецов',
//     name: 'Алексей',
//     patronymic: 'Игоревич',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 4,
//   },
//   {
//     surname: 'Кузнецов',
//     name: 'Алексей',
//     patronymic: 'Игоревич',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 5,
//   },
//   {
//     surname: 'Кузнецов',
//     name: 'Алексей',
//     patronymic: 'Игоревич',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 6,
//   },
//   {
//     surname: 'Кузнецов',
//     name: 'Дмитрий',
//     patronymic: 'Анатольевич',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 7,
//   },
//   {
//     surname: 'Медведев',
//     name: 'Алексей',
//     patronymic: 'Анатольевич',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 8,
//   },
//   {
//     surname: 'Медведев',
//     name: 'Дмитрий',
//     patronymic: 'Анатольевич',
//     directions: ['Лыжи ', 'Бег ', 'Плавание ', 'Триатлон ', 'Футбол '],
//     achievements:
//       'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
//     photo: '/coach.jpg',
//     id: 9,
//   },
// ];

const newsCards: NewsCard[] = [
  {
    id: 0,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 1,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 2,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 3,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 4,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 5,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 6,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 7,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 8,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
  {
    id: 9,
    title: 'Пример текста пример текста пример текста пример текста',
    description:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример пример текста пример',
    tags: [
      {
        id: 1,
        name: '#Футбол',
      },
    ],
    images: '/sports-girl-in-gym-class 1.jpg',
    date_published: '2024-03-16',
  },
];

const descriptionPages = [
  {
    route: '/blog',
    page: 'Блог',
    content:
      'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
  {
    route: '/coachs',
    page: 'Тренерский состав',
    content:
      'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
  {
    route: '/news',
    page: 'Новости',
    content:
      'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
  {
    route: '/contacts',
    page: 'Контакты',
    content:
      'Эта страница создана для демонстрации блоков и элементов, которые используются на сайте, и служит руководством для всех, кто работает над ним. Дизайнеры и технологи отрабатывают здесь стили, чтобы добиться приемлемых результатов в различных сочетаниях блоков и элементов. Контент-менеджеры и редакторы используют страницу в качестве справочника по вёрстке типовых страниц. Здесь же рассказывается о некоторых общих правилах оформления контента.',
  },
];

// тестовый массив с контентом блока FAQ
const testFaqItems = [
  {
    title: 'Пример текста0',
    text:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста',
    id: 0,
  },
  {
    title: 'Пример текста1',
    text:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста',
    id: 1,
  },
  {
    title: 'Пример текста2',
    text:
      'Пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста пример текста пример' +
      'текста пример текста пример текста пример текста пример текста пример текста пример текста' +
      'пример текста пример текста пример текста пример текста пример текста',
    id: 2,
  },
];

const testCards = [
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    text: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-teacher-in-gym-class1.png',
    id: 0,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    text: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-teacher-in-gym-class1.png',
    id: 1,
  },
  {
    title: 'Пример текста пример текста пример текста пример текста',
    subtitle: 'Пример текста',
    text: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример',
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/sports-teacher-in-gym-class1.png',
    id: 2,
  },
];

const cardsNewsMain: CardNewsMain[] = [
  {
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/happy-children-enjoying-their-gym-class NewsMain1.jpg',
    id: 0,
  },
  {
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/happy-children-enjoying-their-gym-class NewsMain1.jpg',
    id: 1,
  },
  {
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/happy-children-enjoying-their-gym-class NewsMain1.jpg',
    id: 2,
  },
  {
    linkUrl: '#',
    linkText: 'Пример текста',
    imgUrl: '/happy-children-enjoying-their-gym-class NewsMain1.jpg',
    id: 3,
  },
];

//тестовый массив адресов
const sliderPosts = [
  {
    id: 1,
    post: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример тgitекста пример текстаПример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    name: 'Александр',
    description: 'Тренер',
  },
  {
    id: 2,
    post: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текстаПример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    name: 'Павел',
    description: 'Тренер',
  },
  {
    id: 3,
    post: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текстаПример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    name: 'Владимир',
    description: 'Директор',
  },
  {
    id: 4,
    post: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текстаПример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    name: 'Вячеслав',
    description: 'Спортсмен',
  },
  {
    id: 5,
    post: 'Пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текстаПример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста пример текста',
    name: 'Олег',
    description: 'Главный',
  },
];

// //тестовый массив адресов

const testAddresses = [
  {
    id: 0,
    title: 'Пример текста',
    address: 'Пример текста пример текста пример текста пример текста пример текста',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577332.5661755158!2d36.72621148858135!3d55.58103353122768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1712072805561!5m2!1sru!2sru',
  },
  {
    id: 1,
    title: 'Пример текста',
    address: 'Пример текста пример текста пример текста пример текста пример текста',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d511631.136415324!2d29.435377246021698!3d59.939457503075054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1712072843527!5m2!1sru!2sru',
  },
  {
    id: 2,
    title: 'Пример текста',
    address: 'Пример текста пример текста пример текста пример текста пример текста',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d136624.7588295689!2d39.699713601707984!3d57.65253506797881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b291a051ecb939%3A0x59c9e61644948545!2z0K_RgNC-0YHQu9Cw0LLQu9GMLCDQr9GA0L7RgdC70LDQstGB0LrQsNGPINC-0LHQuy4!5e0!3m2!1sru!2sru!4v1712072874073!5m2!1sru!2sru',
  },
  {
    id: 3,
    title: 'Пример текста',
    address: 'Пример текста пример текста пример текста пример текста пример текста',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143543.3516461478!2d48.90849914630239!3d55.7955843144755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2b7caccd99%3A0x7fcb77b9b5ad8c65!2z0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1712072893360!5m2!1sru!2sru',
  },
  {
    id: 4,
    title: 'Пример текста',
    address: 'Пример текста пример текста пример текста пример текста пример текста',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146571.0814298567!2d82.7846009189701!3d54.970062674809995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42dfe5e190cc4d97%3A0x9b3a0673e1d3e985!2z0J3QvtCy0L7RgdC40LHQuNGA0YHQuiwg0J3QvtCy0L7RgdC40LHQuNGA0YHQutCw0Y8g0L7QsdC7Lg!5e0!3m2!1sru!2sru!4v1712072922037!5m2!1sru!2sru',
  },
  {
    id: 5,
    title: 'Пример текста',
    address: 'Пример текста пример текста пример текста пример текста пример текста',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93121.28287407717!2d131.87105767194308!3d43.16668264293147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2z0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0Lk!5e0!3m2!1sru!2sru!4v1712072945022!5m2!1sru!2sru',
  },
];

//тестовый массив контактов

const testContancts = [
  {
    id: 0,
    title: 'Пример текста пример текста',
    subtitle: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
  },
  {
    id: 1,
    title: 'Пример текста пример текста',
    subtitle: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
  },
  {
    id: 2,
    title: 'Пример текста пример текста',
    subtitle: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
  },
  {
    id: 3,
    title: 'Пример текста пример текста',
    subtitle: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
  },
  {
    id: 4,
    title: 'Пример текста пример текста',
    subtitle: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
  },
  {
    id: 5,
    title: 'Пример текста пример текста',
    subtitle: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
  },
];

const slidesSwiperGallery: slideSwiperGallery[] = [
  {
    linkUrl: '#',
    imgUrl: '/Group.jpg',
    id: 0,
  },
  {
    linkUrl: '#',
    imgUrl: '/Group.jpg',
    id: 1,
  },
  {
    linkUrl: '#',
    imgUrl: '/Group.jpg',
    id: 2,
  },
  {
    linkUrl: '#',
    imgUrl: '/Group.jpg',
    id: 3,
  },
  {
    linkUrl: '#',
    imgUrl: '/Group.jpg',
    id: 4,
  },
];

const cardsCompanyInfo: CardCompanyInfo[] = [
  {
    subtitle: 'Пример текста',
    textItem: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
    id: 1,
  },
  {
    subtitle: 'Пример текста',
    textItem: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
    id: 2,
  },
  {
    subtitle: 'Пример текста',
    textItem: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
    id: 3,
  },
  {
    subtitle: 'Пример текста',
    textItem: 'Пример текста пример текста пример текста пример текста пример текста пример текста',
    id: 4,
  },
];

export {
  linksItems,
  navLinksMenu,
  buttonsNames,
  headerLinks,
  blogCards,
  // coachCards,
  descriptionPages,
  testFaqItems,
  testCards,
  testAddresses,
  testContancts,
  cardsNewsMain,
  sliderPosts,
  slidesSwiperGallery,
  cardsCompanyInfo,
  newsCards,
};
