import React from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps as AntButtonProps } from 'antd';
import { cx } from '@/utils';
import styles from './Button.module.scss';
import type { ButtonVariant, ButtonSize } from '@/types';

export interface NTruckButtonProps extends Omit<AntButtonProps, 'size' | 'variant'> {
  variant?: ButtonVariant;
  size?:    ButtonSize;
  fullWidth?: boolean;
  leftIcon?:  React.ReactNode;
  rightIcon?: React.ReactNode;
}

const variantTypeMap: Record<ButtonVariant, AntButtonProps['type']> = {
  primary:   'primary',
  secondary: 'default',
  outline:   'default',
  ghost:     'text',
  danger:    'primary',
};

const sizeMap: Record<ButtonSize, AntButtonProps['size']> = {
  sm:  'small',
  md:  'middle',
  lg:  'large',
  xl:  'large',
};

export const Button: React.FC<NTruckButtonProps> = ({
  variant   = 'primary',
  size      = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...rest
}) => {
  return (
    <AntButton
      type={variantTypeMap[variant]}
      size={sizeMap[size]}
      danger={variant === 'danger'}
      className={cx(
        styles.button,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        fullWidth && styles.fullWidth,
        className
      )}
      icon={leftIcon}
      {...rest}
    >
      {children}
      {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
    </AntButton>
  );
};

export default Button;
