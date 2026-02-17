import React from 'react';
import { Row, Col, Card, Typography, Tag } from 'antd';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { homeFeatures } from '../../data';
import styles from './FeaturesSection.module.scss';

const { Title, Paragraph } = Typography;

export const FeaturesSection: React.FC = () => (
  <Section id="features" variant="alternate" size="lg">
    <PageHeader
      eyebrow="Platform Features"
      title="Everything Your Logistics Needs"
      subtitle="Built for the complexity of Indian roads and the scale of enterprise logistics."
    />

    <Container>
      <Row gutter={[24, 24]} className={styles.grid}>
        {homeFeatures.map(feature => (
          <Col key={feature.id} xs={24} sm={12} lg={6}>
            <Card
              className={`${styles.featureCard} ${feature.highlight ? styles.highlighted : ''}`}
              bordered={false}
            >
              {feature.tag && (
                <Tag
                  color={feature.tag === 'Coming Soon' ? 'default' : feature.tag === 'ULIP Powered' ? 'blue' : 'orange'}
                  className={styles.featureTag}
                >
                  {feature.tag}
                </Tag>
              )}

              <div className={`${styles.iconBox} ${feature.highlight ? styles.iconHighlight : ''}`}>
                {feature.icon}
              </div>

              <Title level={5} className={styles.featureTitle}>
                {feature.title}
              </Title>

              <Paragraph className={styles.featureDesc}>
                {feature.description}
              </Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default FeaturesSection;
