import { StaticImageData } from 'next/image';

interface DefaultPageProps {
  title: string;
}

interface NavigationLinkItem {
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

export type { DefaultPageProps, NavigationLinkItem, AuthorProps, NewsItem };
