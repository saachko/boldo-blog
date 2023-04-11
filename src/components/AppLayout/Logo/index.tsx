import Link from 'next/link';
import cn from 'classnames';

import manrope from 'utils/fonts/manrope';

import LogoIcon from 'assets/icons/logo.svg';

import Typography from 'components/Typography';

import styles from './Logo.module.scss';

function Logo() {
  return (
    <Link href="/" className={styles.container}>
      <LogoIcon />
      <Typography
        className={cn(styles.logoText, manrope.className)}
        color="dark-blue"
        fontWeight="bold"
      >
        Boldo
      </Typography>
    </Link>
  );
}

export default Logo;
