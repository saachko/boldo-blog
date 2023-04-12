import type { NavigationLinkItem, FooterItem } from 'ts/interfaces';

const navigationList: NavigationLinkItem[] = [
  {
    id: '1',
    href: '#product',
    text: 'Product',
  },
  {
    id: '2',
    href: '#services',
    text: 'Services',
  },
  {
    id: '3',
    href: '#about',
    text: 'About',
  },
];

const footerLinkList: FooterItem = {
  Landings: [
    {
      id: '1',
      href: '#',
      text: 'Home',
    },
    {
      id: '2',
      href: '#product',
      text: 'Products',
    },
    {
      id: '3',
      href: '#services',
      text: 'Services',
    },
  ],
  Company: [
    {
      id: '1',
      href: '#',
      text: 'Home',
    },
    {
      id: '2',
      href: '#careers',
      text: 'Careers',
      isHiring: true,
    },
    {
      id: '3',
      href: '#services',
      text: 'Services',
    },
  ],
  Resources: [
    {
      id: '1',
      href: '#',
      text: 'Blog',
    },
    {
      id: '2',
      href: '#product',
      text: 'Products',
    },
    {
      id: '3',
      href: '#services',
      text: 'Services',
    },
  ],
};

export { navigationList, footerLinkList };
