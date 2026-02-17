import React from 'react';
import { Typography, Space, Tag, Row, Col } from 'antd';
import {
  ArrowRightOutlined,
  PlayCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { heroHeadline } from '../../data';
import appIcon    from '@/assets/images/app-icon.png';
import iphoneMock from '@/assets/images/iphone-mockup.png';
import styles from './HeroSection.module.scss';

const { Title, Paragraph, Text } = Typography;

const TRUST_BADGES = [
  'Payment Integrated',
  'Govt. Verified',
  'ISO Compliant',
  '99.9% Uptime',
];

export const HeroSection: React.FC = () => (
  <section className={styles.hero}>
    {/* Background decorations */}
    <div className={styles.bg}>
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgGrid} />
    </div>

    <Container>
      <Row gutter={[48, 48]} align="middle" className={styles.row}>
        {/* Left – Text */}
        <Col xs={24} lg={13}>
          <div className={styles.content}>
            <Tag className={styles.eyebrow} color="orange">
              🇮🇳 Made for India's Roads
            </Tag>

            <Title level={1} className={styles.headline}>
              <span className={styles.line1}>{heroHeadline.line1}</span>
              {' '}
              <span className={styles.lineGradient}>{heroHeadline.line2}</span>
            </Title>

            <Paragraph className={styles.subtitle}>
              {heroHeadline.subtitle}
            </Paragraph>

            {/* Trust badges */}
            <Space wrap size="small" className={styles.badges}>
              {TRUST_BADGES.map(badge => (
                <span key={badge} className={styles.trustBadge}>
                  <CheckCircleOutlined className={styles.checkIcon} />
                  {badge}
                </span>
              ))}
            </Space>

            {/* CTA buttons */}
            <Space size="middle" wrap className={styles.ctas}>
              <Link to="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  rightIcon={<ArrowRightOutlined />}
                >
                  Get Started Free
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                leftIcon={<PlayCircleOutlined />}
                className={styles.demoBtn}
              >
                Watch Demo
              </Button>
            </Space>

            {/* Social proof */}
            <div className={styles.socialProof}>
              <div className={styles.avatarStack}>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={styles.avatar} style={{ zIndex: 4 - i }}>
                    {String.fromCodePoint(0x1F464)}
                  </div>
                ))}
              </div>
              <Text className={styles.proofText}>
                <strong>1,000+</strong> verified drivers trust nTruck
              </Text>
            </div>
          </div>
        </Col>

        {/* Right – Visual */}
        <Col xs={24} lg={11} className={styles.visualCol}>
          <div className={styles.visualWrapper}>
            {/* iPhone mockup — main image */}
            <img
              src={iphoneMock}
              alt="nTruck app on iPhone"
              className={styles.iphoneImg}
            />
            {/* App icon — floating top-left */}
            <img
              src={appIcon}
              alt="nTruck app icon"
              className={styles.appIconImg}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default HeroSection;
