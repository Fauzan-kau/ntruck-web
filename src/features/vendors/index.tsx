import React from 'react';
import { Row, Col, Card, Typography, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import { Link } from 'react-router-dom';
import loadPostImg from '@/assets/images/loadpost.svg';
import loginImg    from '@/assets/images/login.svg';
import { vendorPageHero, vendorFeatures, vendorStats } from './data';
import styles from './Vendors.module.scss';

const { Title, Paragraph, Text } = Typography;

const VendorsPage: React.FC = () => (
  <>
    {/* Hero */}
    <Section variant="gradient" size="lg">
      <Container>
        <Row gutter={[48, 48]} align="middle" className={styles.heroRow}>
          {/* Left – text */}
          <Col xs={24} lg={13}>
            <div className={styles.pageHero}>
              <Tag color="orange" className={styles.heroEyebrow}>{vendorPageHero.eyebrow}</Tag>
              <Title level={1} className={styles.heroTitle}>
                {vendorPageHero.title}
              </Title>
              <Paragraph className={styles.heroSubtitle}>
                {vendorPageHero.subtitle}
              </Paragraph>

              <div className={styles.heroStats}>
                {vendorStats.map(stat => (
                  <div key={stat.label} className={styles.heroStat}>
                    <Text className={styles.heroStatValue} style={{ color: stat.color }}>{stat.value}</Text>
                    <Text className={styles.heroStatLabel}>{stat.label}</Text>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <Button variant="secondary" size="lg" rightIcon={<ArrowRightOutlined />}>
                  Get Vendor Access
                </Button>
              </Link>
            </div>
          </Col>

          {/* Right – app screen mockups */}
          <Col xs={24} lg={11} className={styles.heroVisualCol}>
            <div className={styles.heroVisual}>
              <img
                src={loginImg}
                alt="Login screen"
                className={`${styles.screenImg} ${styles.screenBack}`}
              />
              <img
                src={loadPostImg}
                alt="Load Post screen"
                className={`${styles.screenImg} ${styles.screenFront}`}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Section>

    {/* Features */}
    <Section variant="default" size="lg">
      <PageHeader
        eyebrow="Vendor Features"
        title="Complete Logistics Control"
        subtitle="From load posting to payment — manage your entire freight operation on one platform."
        titleGradient
      />
      <Container>
        <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
          {vendorFeatures.map(feature => (
            <Col key={feature.id} xs={24} sm={12} lg={8}>
              <Card
                className={`${styles.featureCard} ${feature.highlight ? styles.featured : ''}`}
                bordered={false}
              >
                {feature.tag && (
                  <Tag className={styles.featureTag} color="orange">{feature.tag}</Tag>
                )}
                <div className={`${styles.featureIcon} ${feature.highlight ? styles.iconOrange : ''}`}>
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

    {/* CTA */}
    <Section variant="dark" size="md">
      <Container>
        <div className={styles.bottomCta}>
          <Title level={3} className={styles.ctaTitle}>
            Ready to Streamline Your Freight?
          </Title>
          <Paragraph className={styles.ctaSubtitle}>
            Get access to 50,000+ verified drivers across 28 states.
          </Paragraph>
          <Link to="/contact">
            <Button variant="secondary" size="lg" rightIcon={<ArrowRightOutlined />}>
              Start Shipping Today
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  </>
);

export default VendorsPage;
