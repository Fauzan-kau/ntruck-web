import React from 'react';
import { Row, Col, Card, Typography, Steps, Tag } from 'antd';
import { CheckCircleFilled, ArrowRightOutlined } from '@ant-design/icons';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import loadMarketImg from '@/assets/images/loadmarket.svg';
import beginLoadImg  from '@/assets/images/beginload.svg';
import {
  driverPageHero,
  driverFeatures,
  driverStats,
  onboardingSteps,
} from './data';
import styles from './Drivers.module.scss';

const { Title, Paragraph, Text } = Typography;

const DriversPage: React.FC = () => (
  <>
    {/* Hero */}
    <Section variant="gradient" size="lg">
      <Container>
        <Row gutter={[48, 48]} align="middle" className={styles.heroRow}>
          {/* Left – text */}
          <Col xs={24} lg={13}>
            <div className={styles.pageHero}>
              <Tag color="orange" className={styles.heroEyebrow}>{driverPageHero.eyebrow}</Tag>
              <Title level={1} className={styles.heroTitle}>
                {driverPageHero.title}
              </Title>
              <Paragraph className={styles.heroSubtitle}>
                {driverPageHero.subtitle}
              </Paragraph>
              <div className={styles.heroStats}>
                {driverStats.map(stat => (
                  <div key={stat.label} className={styles.heroStat}>
                    <Text className={styles.heroStatValue} style={{ color: stat.color }}>
                      {stat.value}
                    </Text>
                    <Text className={styles.heroStatLabel}>{stat.label}</Text>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRightOutlined />}>
                  Download Driver App
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right – app screen mockups */}
          <Col xs={24} lg={11} className={styles.heroVisualCol}>
            <div className={styles.heroVisual}>
              <img
                src={loadMarketImg}
                alt="Load Market screen"
                className={`${styles.screenImg} ${styles.screenBack}`}
              />
              <img
                src={beginLoadImg}
                alt="Begin Load screen"
                className={`${styles.screenImg} ${styles.screenFront}`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>

    {/* Features Grid */}
    <Section variant="default" size="lg">
      <PageHeader
        eyebrow="Driver Features"
        title="Everything a Driver Needs"
        subtitle="Designed for India's highways — simple enough for first-time smartphone users, powerful enough for fleet operators."
        titleGradient
      />
      <Container>
        <Row gutter={[24, 24]} className={styles.featureGrid}>
          {driverFeatures.map(feature => (
            <Col key={feature.id} xs={24} sm={12} lg={8}>
              <Card
                className={`${styles.featureCard} ${feature.highlight ? styles.featured : ''}`}
                bordered={false}
              >
                {feature.tag && (
                  <Tag
                    className={styles.featureTag}
                    color={feature.tag === 'Coming Soon' ? 'default' : 'blue'}
                  >
                    {feature.tag}
                  </Tag>
                )}
                <div className={`${styles.featureIcon} ${feature.highlight ? styles.iconHighlight : ''}`}>
                  {feature.icon}
                </div>
                <Title level={5} className={styles.featureTitle}>{feature.title}</Title>
                <Paragraph className={styles.featureDesc}>{feature.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>

    {/* Onboarding Steps */}
    <Section variant="alternate" size="lg">
      <PageHeader
        eyebrow="Onboarding"
        title="Get Verified in Under 10 Minutes"
        subtitle="Our government-backed verification process is fully digital, fast, and paperless."
      />
      <Container maxWidth="md">
        <Steps
          direction="vertical"
          current={onboardingSteps.length}
          className={styles.steps}
          items={onboardingSteps.map(s => ({
            title:       <Text className={styles.stepTitle}>{s.title}</Text>,
            description: <Text className={styles.stepDesc}>{s.desc}</Text>,
            icon:        <div className={styles.stepIcon}>{s.step}</div>,
          }))}
        />
      </Container>
    </Section>

    {/* CTA */}
    <Section variant="dark" size="md">
      <Container>
        <div className={styles.bottomCta}>
          <CheckCircleFilled className={styles.ctaIcon} />
          <Title level={3} className={styles.ctaTitle}>
            Ready to Start Earning More?
          </Title>
          <Paragraph className={styles.ctaSubtitle}>
            Join 50,000+ verified drivers already using nTruck.
          </Paragraph>
          <Link to="/contact">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRightOutlined />}>
              Download Driver App Free
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  </>
);

export default DriversPage;
