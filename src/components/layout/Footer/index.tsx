import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Divider, Typography, Space } from 'antd';
import {
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import { Container } from '@/components/common/Container';
import { Logo } from '@/components/common/Logo';
import styles from './Footer.module.scss';

const { Text, Paragraph } = Typography;

const PRODUCT_LINKS = [
  { label: 'Driver App',    path: '/drivers' },
  { label: 'Vendor App',    path: '/vendors' },
];

const COMPANY_LINKS = [
  { label: 'About Us',      path: '/about' },
  { label: 'Careers',       path: '/careers' },
  { label: 'Blog',          path: '/blog' },
  { label: 'Press',         path: '/press' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',    path: '/privacy' },
  { label: 'Terms of Service',  path: '/terms' },
  { label: 'Cookie Policy',     path: '/cookies' },
];

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <Container>
      {/* Main grid */}
      <Row gutter={[48, 40]} className={styles.grid}>
        {/* Brand column */}
        <Col xs={24} sm={24} md={8} lg={7}>
          <Link to="/" className={styles.logo}>
            <Logo variant="white" type="icon" height={36} />
            <span className={styles.logoText}>
              n<span className={styles.logoAccent}>Truck</span>
            </span>
          </Link>

          <Paragraph className={styles.tagline}>
            India's most trusted digital trucking platform — connecting drivers,
            vendors, and logistics intelligence in one ecosystem.
          </Paragraph>

          <Space className={styles.socials} size="small">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Twitter">
              <TwitterOutlined />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <LinkedinOutlined />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink} aria-label="Instagram">
              <InstagramOutlined />
            </a>
          </Space>

          <div className={styles.contact}>
            <a href="mailto:hello@ntruck.in" className={styles.contactItem}>
              <MailOutlined /> hello@ntruck.in
            </a>
            <a href="tel:+919544336827" className={styles.contactItem}>
              <PhoneOutlined /> +91 954433 6827
            </a>
            <span className={styles.contactItem}>
              <EnvironmentOutlined /> NO. 104/3, KALPAKA, PATTAMBI, PALAKKAD, Melepattambi, Ottappalam, Palakkad- 679306
            </span>
          </div>
        </Col>

        {/* Link columns */}
        <Col xs={12} sm={12} md={4} lg={4}>
          <Text className={styles.colTitle}>Product</Text>
          <ul className={styles.linkList}>
            {PRODUCT_LINKS.map(l => (
              <li key={l.path}>
                <Link to={l.path} className={styles.link}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </Col>

        <Col xs={12} sm={12} md={4} lg={4}>
          <Text className={styles.colTitle}>Company</Text>
          <ul className={styles.linkList}>
            {COMPANY_LINKS.map(l => (
              <li key={l.path}>
                <Link to={l.path} className={styles.link}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </Col>


        {/* ULIP badge */}
        {/* <Col xs={12} sm={12} md={4} lg={5}>
          <Text className={styles.colTitle}>Compliance</Text>
          <div className={styles.badges}>
            {['VAHAN', 'SARATHI', 'DigiLocker', 'GST', 'MCA'].map(badge => (
              <span key={badge} className={styles.badge}>{badge}</span>
            ))}
          </div>
          <Text className={styles.ulipNote}>
            ULIP-Integrated Platform by Ministry of Road Transport & Highways
          </Text>
        </Col> */}
      </Row>

      <Divider className={styles.divider} />

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <Text className={styles.copyright}>
          © {new Date().getFullYear()} nTruck Technologies Pvt. Ltd. All rights reserved.
        </Text>
        <Space className={styles.legalLinks} size="middle" wrap>
          {LEGAL_LINKS.map(l => (
            <Link key={l.path} to={l.path} className={styles.legalLink}>
              {l.label}
            </Link>
          ))}
        </Space>
      </div>
    </Container>
  </footer>
);

export default Footer;
