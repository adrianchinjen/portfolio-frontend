export interface MenuItem {
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
}

export const menuItems: MenuItems[] = [
  {
    items: [
      {
        name: 'hero'
      },
      {
        name: 'experience'
      },
      {
        name: 'skills'
      }
    ]
  }
];
