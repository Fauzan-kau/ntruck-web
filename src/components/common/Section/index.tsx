import React from 'react';
import { cx } from '@/utils';
import styles from './Section.module.scss';
import type { BaseProps, SectionVariant } from '@/types';

interface SectionProps extends BaseProps {
  id?:       string;
  variant?:  SectionVariant;
  size?:     'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className,
  style,
  variant  = 'default',
  size     = 'md',
  fullWidth = false,
}) => (
  <section
    id={id}
    style={style}
    className={cx(
      styles.section,
      styles[`variant-${variant}`],
      styles[`size-${size}`],
      fullWidth && styles.fullWidth,
      className
    )}
  >
    {children}
  </section>
);

export default Section;
