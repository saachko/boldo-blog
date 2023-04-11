import Image from 'next/image';
import cn from 'classnames';

import manrope from 'utils/fonts/manrope';
import openSans from 'utils/fonts/openSans';

import Typography from 'components/Typography';

import { NewsItem } from 'ts/interfaces';

import Author from 'components/Author';
import Button from 'components/Button';

import styles from './News.module.scss';

interface NewsProps {
  newsList: NewsItem[];
}

function News({ newsList }: NewsProps) {
  return (
    <section className={styles.section}>
      <Typography
        variant="h3"
        className={cn(styles.title, manrope.className)}
        align="left"
      >
        Latest news
      </Typography>
      <div className={styles.container}>
        {newsList.map(({ id, date, text, image, author }) => (
          <div key={id} className={styles.item}>
            <Image
              className={styles.image}
              src={image.src}
              width={image.width}
              height={image.height}
              blurDataURL={image.blurDataURL}
              priority
              placeholder="blur"
              alt={`${author.name}-photo`}
            />
            <div className={styles.info}>
              <div className={styles.textWrapper}>
                <Typography
                  color="dark-blue"
                  className={openSans.className}
                  fontWeight="bold"
                >
                  Category
                </Typography>
                <Typography
                  color="gray"
                  className={openSans.className}
                  fontWeight="regular"
                >
                  {date}
                </Typography>
              </div>
              <Typography
                className={cn(styles.text, openSans.className)}
                align="left"
              >
                {text}
              </Typography>
              <Author {...author} />
            </div>
          </div>
        ))}
      </div>
      <Button size="l" className={styles.button}>
        Load more
      </Button>
    </section>
  );
}

export default News;
