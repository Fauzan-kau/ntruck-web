import React from 'react';
import { Row, Col, Card, Typography, List } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { ecosystemItems } from '../../data';
import styles from './EcosystemSection.module.scss';

const { Title, Paragraph, Text } = Typography;

export const EcosystemSection: React.FC = () => (
  <Section id="ecosystem" variant="default" size="lg">
    <PageHeader
      eyebrow="The Ecosystem"
      title="Two Powerful Products. One Platform."
      subtitle="nTruck is built as three distinct, deeply integrated products that work together seamlessly."
      titleGradient
    />

    <Container>
      <Row gutter={[32, 32]} justify="center" className={styles.cardsRow}>
        {ecosystemItems.map(item => (
          <Col key={item.id} xs={24} md={12} lg={8}>
            <Card
              className={styles.card}
              bordered={false}
              bodyStyle={{ padding: 0 }}
            >
              {/* Card header */}
              <div className={styles.cardHeader} style={{ background: item.gradient }}>
                <div className={styles.cardIcon}>
                  {item.icon}
                </div>
                <div>
                  <Title level={4} className={styles.cardTitle}>{item.title}</Title>
                  <Text className={styles.cardSubtitle}>{item.subtitle}</Text>
                </div>
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <Paragraph className={styles.cardDesc}>{item.description}</Paragraph>

                <List
                  dataSource={item.features}
                  renderItem={feat => (
                    <List.Item className={styles.featureItem}>
                      <CheckCircleFilled
                        className={styles.featureIcon}
                        style={{ color: item.color }}
                      />
                      <Text className={styles.featureText}>{feat}</Text>
                    </List.Item>
                  )}
                  split={false}
                />

                <Button
                  variant="outline"
                  size="md"
                  fullWidth
                  className={styles.cardCta}
                  style={{ borderColor: item.color, color: item.color } as React.CSSProperties}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default EcosystemSection;
