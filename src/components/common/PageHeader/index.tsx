import React from 'react';
import { Typography, Tag, Space } from 'antd';
import { Container } from '@/components/common/Container';
import { cx } from '@/utils';
import styles from './PageHeader.module.scss';

const { Title, Paragraph } = Typography;

interface PageHeaderProps {
  eyebrow?:    string;
  title:       string;
  titleGradient?: boolean;
  subtitle?:   string;
  align?:      'left' | 'center' | 'right';
  dark?:       boolean;
  className?:  string;
  actions?:    React.ReactNode;
  maxSubtitleWidth?: number;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  eyebrow,
  title,
  titleGradient = false,
  subtitle,
  align    = 'center',
  dark     = false,
  className,
  actions,
  maxSubtitleWidth = 640,
}) => (
  <div
    className={cx(
      styles.header,
      styles[`align-${align}`],
      dark && styles.dark,
      className
    )}
  >
    <Container>
      <div className={styles.inner}>
        {eyebrow && (
          <Tag
            className={styles.eyebrow}
            color={dark ? 'orange' : 'blue'}
          >
            {eyebrow}
          </Tag>
        )}

        <Title
          level={2}
          className={cx(styles.title, titleGradient && styles.gradientTitle)}
        >
          {title}
        </Title>

        {subtitle && (
          <Paragraph
            className={styles.subtitle}
            style={{ maxWidth: maxSubtitleWidth }}
          >
            {subtitle}
          </Paragraph>
        )}

        {actions && (
          <Space className={styles.actions} size="middle" wrap>
            {actions}
          </Space>
        )}
      </div>
    </Container>
  </div>
);

export default PageHeader;
