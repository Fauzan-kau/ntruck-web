import React from 'react';
import { Row, Col, Typography } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { howItWorksSteps } from '../../data';
import styles from './HowItWorksSection.module.scss';

const { Title, Paragraph, Text } = Typography;

export const HowItWorksSection: React.FC = () => (
  <Section id="how-it-works" variant="default" size="lg">
    <PageHeader
      eyebrow="How It Works"
      title="Start Shipping in 3 Simple Steps"
      subtitle="nTruck is designed for speed — verified and operating within minutes."
    />

    <Container>
      <Row gutter={[32, 48]} align="middle" className={styles.stepsRow}>
        {howItWorksSteps.map((step, idx) => (
          <React.Fragment key={step.step}>
            <Col xs={24} sm={24} md={7}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>
                  <span>{String(step.step).padStart(2, '0')}</span>
                </div>
                <div className={styles.stepIconWrap}>
                  {step.icon}
                </div>
                <Title level={4} className={styles.stepTitle}>
                  {step.title}
                </Title>
                <Paragraph className={styles.stepDesc}>
                  {step.description}
                </Paragraph>
              </div>
            </Col>

            {/* Arrow connector – show between steps on desktop */}
            {idx < howItWorksSteps.length - 1 && (
              <Col xs={0} md={1} className={styles.arrowCol}>
                <ArrowRightOutlined className={styles.arrow} />
              </Col>
            )}
          </React.Fragment>
        ))}
      </Row>

      {/* Bottom CTA line */}
      <div className={styles.bottomLine}>
        <Text className={styles.bottomText}>
          Average onboarding time: <strong>under 10 minutes</strong>
        </Text>
      </div>
    </Container>
  </Section>
);

export default HowItWorksSection;
