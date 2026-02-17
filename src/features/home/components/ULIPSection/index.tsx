import React from 'react';
import { Row, Col, Card, Typography, Tag, Space } from 'antd';
import { SafetyCertificateOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { ulipIntegrations } from '../../data';
import styles from './ULIPSection.module.scss';

const { Title, Paragraph, Text } = Typography;

export const ULIPSection: React.FC = () => (
  <Section id="ulip" variant="dark" size="lg">
    <PageHeader
      eyebrow="Government Integrations"
      title="Trusted by India's Digital Infrastructure"
      subtitle="nTruck is fully integrated with ULIP — the Ministry of Road Transport & Highways' unified logistics platform. Every verification is instant, official, and tamper-proof."
      dark
    />

    {/* Trust banner */}
    <Container>
      <div className={styles.trustBanner}>
        <SafetyCertificateOutlined className={styles.trustIcon} />
        <div>
          <Text className={styles.trustTitle}>ULIP (Unified Logistics Interface Platform)</Text>
          <Text className={styles.trustSubtitle}>
            Operated by the Ministry of Road Transport & Highways, Government of India
          </Text>
        </div>
      </div>
    </Container>

    <Container>
      <Row gutter={[24, 24]} className={styles.cardsRow}>
        {ulipIntegrations.map(integration => (
          <Col key={integration.id} xs={24} sm={12} lg={8}>
            <Card
              className={`${styles.integrationCard} ${integration.tag === 'Coming Soon' ? styles.comingSoon : ''}`}
              bordered={false}
            >
              {/* Header */}
              <div className={styles.cardTop}>
                <div
                  className={styles.integrationIcon}
                  style={{ background: `${integration.color}20`, color: integration.color }}
                >
                  {integration.icon}
                </div>
                <div className={styles.nameBlock}>
                  <div className={styles.nameRow}>
                    <Title level={4} className={styles.integrationName}>
                      {integration.name}
                    </Title>
                    <Tag
                      className={styles.statusTag}
                      color={integration.tag === 'Active' ? 'success' : 'default'}
                    >
                      {integration.tag}
                    </Tag>
                  </div>
                  <Text className={styles.fullName}>{integration.fullName}</Text>
                  {integration.ministry && (
                    <Text className={styles.ministry}>by {integration.ministry}</Text>
                  )}
                </div>
              </div>

              <Paragraph className={styles.integrationDesc}>
                {integration.description}
              </Paragraph>

              <Space direction="vertical" size={4} className={styles.featureList}>
                {integration.features.map(feat => (
                  <div key={feat} className={styles.featRow}>
                    <CheckCircleFilled
                      className={styles.featIcon}
                      style={{ color: integration.tag === 'Active' ? integration.color : '#64748B' }}
                    />
                    <Text className={styles.featText}>{feat}</Text>
                  </div>
                ))}
              </Space>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default ULIPSection;
