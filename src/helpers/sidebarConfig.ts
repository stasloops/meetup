export interface INav {
  title: string;
  href?: string;
  under_navs?: INav[];
}

export const SIDEBAR_NAV_CONFIG: INav[] = [{ title: 'События', href: '/events' }];

export const SIDEBAR_SERVICE_NAV_CONFIG: INav[] = [
  {
    title: 'О нас',
    under_navs: [
      { title: 'Проект', href: '/about' },
      { title: 'Контакты', href: '/contacts' },
    ],
  },
  { title: 'Услуги и сервисы' },
  { title: 'Поддержка' },
];
