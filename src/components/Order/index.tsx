import cn from 'classnames';
import Image from 'next/image';

import manrope from 'utils/fonts/manrope';
import openSans from 'utils/fonts/openSans';

import Typography from 'components/Typography';
import Input from 'components/Input';
import Button from 'components/Button';

import backgroundImage from 'assets/images/background-image.png';

import styles from './Order.module.scss';

function Order() {
  return (
    <section className={styles.section}>
      <div className={styles.background}>
        <Image
          src={backgroundImage.src}
          width={backgroundImage.width}
          height={backgroundImage.height}
          priority
          alt="background"
          quality={100}
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Typography
            variant="h3"
            className={cn(styles.title, manrope.className)}
            color="white"
          >
            An enterprise template to ramp up your company website
          </Typography>
          <form className={styles.form}>
            <Input
              name="email"
              placeholder="Your email address"
              className={cn(styles.input, openSans.className)}
            />
            <Button
              type="submit"
              size="l"
              color="green"
              onClick={(event) => event.preventDefault()}
            >
              Start now
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Order;
