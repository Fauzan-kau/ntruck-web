import React from 'react';
import { cx } from '@/utils';
import styles from './Container.module.scss';
import type { BaseProps } from '@/types';

interface ContainerProps extends BaseProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  noPadding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  style,
  maxWidth = 'xl',
  noPadding = false,
}) => (
  <div
    className={cx(
      styles.container,
      styles[`maxWidth-${maxWidth}`],
      noPadding && styles.noPadding,
      className
    )}
    style={style}
  >
    {children}
  </div>
);

export default Container;
