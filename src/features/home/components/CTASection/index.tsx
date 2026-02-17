import React from 'react';
import { Typography, Space } from 'antd';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ctaData } from '../../data';
import styles from './CTASection.module.scss';

const { Title, Paragraph } = Typography;

export const CTASection: React.FC = () => (
  <Section variant="gradient" size="lg">
    <Container>
      <div className={styles.inner}>
        {/* Decorative elements */}
        <div className={styles.deco1} />
        <div className={styles.deco2} />

        <div className={styles.content}>
          <Title level={2} className={styles.title}>
            {ctaData.title}
          </Title>
          <Paragraph className={styles.subtitle}>
            {ctaData.subtitle}
          </Paragraph>

          <Space size="large" wrap className={styles.buttons}>
            <Link to="/contact">
              <Button
                variant="secondary"
                size="xl"
                rightIcon={<ArrowRightOutlined />}
                className={styles.primaryBtn}
              >
                {ctaData.primaryLabel}
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="xl"
                leftIcon={<CalendarOutlined />}
                className={styles.secondaryBtn}
              >
                {ctaData.secondaryLabel}
              </Button>
            </Link>
          </Space>

          <div className={styles.disclaimer}>
            No credit card required · Free for first 50 trips · Cancel anytime
          </div>
        </div>
      </div>
    </Container>
  </Section>
);

export default CTASection;
