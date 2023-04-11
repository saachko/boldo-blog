/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';

import openSans from 'utils/fonts/openSans';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button' | 'reset';
  size?: 'm' | 'l';
  color?: 'white' | 'green';
  fontWeight?: 'regular' | 'semibold' | 'bold';
  children: React.ReactNode;
}

function Button({
  children,
  type = 'button',
  size = 'm',
  color = 'white',
  fontWeight = 'bold',
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    styles.button,
    openSans.className,
    styles[`button--${size}`],
    styles[`button--${color}`],
    styles[`button--${fontWeight}`]
  );

  return (
    <button type={type} className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
