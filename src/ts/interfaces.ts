import { StaticImageData } from 'next/image';

interface DefaultPageProps {
  title: string;
}

interface NavigationLinkItem {
  id: string;
  href: string;
  text: string;
}

interface AuthorProps {
  image: StaticImageData;
  name: string;
}

interface NewsItem {
  id: string;
  image: StaticImageData;
  date: string;
  text: string;
  author: AuthorProps;
}

interface FooterLink extends NavigationLinkItem {
  isHiring?: boolean;
}

interface FooterItem {
  [key: string]: FooterLink[];
}

export type {
  DefaultPageProps,
  NavigationLinkItem,
  AuthorProps,
  NewsItem,
  FooterLink,
  FooterItem,
};
