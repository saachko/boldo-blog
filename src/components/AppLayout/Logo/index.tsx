import Link from 'next/link';
import cn from 'classnames';

import manrope from 'utils/fonts/manrope';

import LogoIcon from 'assets/icons/logo.svg';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link href="/" className={styles.container}>
      <LogoIcon />
      <p className={cn(styles.logoText, manrope.className)}>Boldo</p>
    </Link>
  );
}

export default Logo;
