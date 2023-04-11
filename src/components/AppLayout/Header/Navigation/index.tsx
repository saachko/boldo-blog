import Link from 'next/link';
import cn from 'classnames';

import openSans from 'utils/fonts/openSans';

import Button from 'components/Button';

import { NavigationLinkItem } from 'ts/interfaces';

import styles from './Navigation.module.scss';

interface NavigationProps {
  navigationList: NavigationLinkItem[];
}

function Navigation({ navigationList }: NavigationProps) {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.list}>
        {navigationList.map(({ id, href, text }) => (
          <li key={id} className={styles.item}>
            <Link href={href} className={cn(styles.link, openSans.className)}>
              {text}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/">
            <Button>Log in</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
