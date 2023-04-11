import Image from 'next/image';

import openSans from 'utils/fonts/openSans';

import Typography from 'components/Typography';

import { AuthorProps } from 'ts/interfaces';

import styles from './Author.module.scss';

function Author({ image, name }: AuthorProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={name}
          className={styles.image}
        />
      </div>
      <Typography variant="p" className={openSans.className}>
        {name}
      </Typography>
    </div>
  );
}

export default Author;
