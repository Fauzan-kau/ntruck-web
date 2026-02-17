import React from 'react';
import { Typography } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeftOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styles from './ComingSoon.module.scss';

const { Title, Paragraph } = Typography;

const PAGE_LABELS: Record<string, string> = {
  '/careers': 'Careers',
  '/blog':    'Blog',
  '/press':   'Press',
};

const ComingSoonPage: React.FC = () => {
  const { pathname } = useLocation();
  const label = PAGE_LABELS[pathname] ?? 'This page';

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <ClockCircleOutlined />
      </div>

      <Title level={1} className={styles.title}>
        {label} — Coming Soon
      </Title>

      <Paragraph className={styles.subtitle}>
        We're working on it. Check back shortly.
      </Paragraph>

      <Link to="/" className={styles.back}>
        <ArrowLeftOutlined /> Back to Home
      </Link>
    </div>
  );
};

export default ComingSoonPage;
