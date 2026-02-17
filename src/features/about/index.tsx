import React from 'react';
import { Row, Col, Card, Typography, Tag, Space } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { PageHeader } from '@/components/common/PageHeader';
import { Button } from '@/components/common/Button';
import {
  aboutHero,
  companyStory,
  companyValues,
  teamMembers,
  companyStats,
} from './data';
import aboutHeroBg from '@/assets/images/about-hero-bg.png';
import styles from './About.module.scss';

const { Title, Paragraph, Text } = Typography;

const AboutPage: React.FC = () => (
  <>
    {/* Hero */}
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url(${aboutHeroBg})` }}
    >
      <div className={styles.heroOverlay} />
      <Container>
        <div className={styles.pageHero}>
          <Tag color="orange" className={styles.heroEyebrow}>{aboutHero.eyebrow}</Tag>
          <Title level={1} className={styles.heroTitle}>
            {aboutHero.title}
          </Title>
          <Paragraph className={styles.heroSubtitle}>
            {aboutHero.subtitle}
          </Paragraph>
          {/* Stats strip */}
          <div className={styles.statsStrip}>
            {companyStats.map(s => (
              <div key={s.label} className={styles.stat}>
                <Text className={styles.statValue}>{s.value}</Text>
                <Text className={styles.statLabel}>{s.label}</Text>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>

    {/* Story */}
    <Section variant="default" size="lg">
      <Container>
        <Row gutter={[64, 48]} align="middle">
          <Col xs={24} lg={12}>
            <div className={styles.storyText}>
              <Title level={2} className={styles.storyHeadline}>
                {companyStory.headline}
              </Title>
              {companyStory.body.map((para, i) => (
                <Paragraph key={i} className={styles.storyPara}>
                  {para}
                </Paragraph>
              ))}
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <div className={styles.storyVisual}>
              <div className={styles.statCard}>
                <Text className={styles.bigStat}>35–40%</Text>
                <Text className={styles.bigStatLabel}>
                  of truck journeys run empty — ntruck is changing that
                </Text>
              </div>
              <div className={styles.storyPill}>
                <span className={styles.pillDot} style={{ background: '#96D228' }} />
                Smart Freight Matching Engine
              </div>
              <div className={styles.storyPill}>
                <span className={styles.pillDot} style={{ background: '#007EFF' }} />
                Itinerary-Based Booking System
              </div>
              <div className={styles.storyPill}>
                <span className={styles.pillDot} style={{ background: '#FF6B00' }} />
                Predictable Weekly Work Plans
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>

    {/* Values */}
    <Section variant="alternate" size="lg">
      <PageHeader
        eyebrow="What We Stand For"
        title="Our Core Values"
        subtitle="The principles that guide every product decision, partnership, and line of code."
      />
      <Container>
        <Row gutter={[24, 24]} className={styles.valuesGrid}>
          {companyValues.map(v => (
            <Col key={v.id} xs={24} sm={12} lg={8}>
              <Card className={styles.valueCard} bordered={false}>
                <div
                  className={styles.valueIcon}
                  style={{ background: `${v.color}18`, color: v.color }}
                >
                  {v.icon}
                </div>
                <Title level={5} className={styles.valueTitle}>{v.title}</Title>
                <Paragraph className={styles.valueDesc}>{v.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Section>

    {/* Team */}
    <Section variant="default" size="lg">
      <PageHeader
        eyebrow="The Team"
        title="The People Behind ntruck"
        subtitle="A small, focused team with deep domain expertise and a single obsession — fixing Indian trucking."
        titleGradient
      />
      <Container>
        <div className={styles.teamList}>
          {teamMembers.map((member, index) => {
            const reversed = index % 2 !== 0;
            return (
              <div
                key={member.id}
                className={`${styles.teamRow} ${reversed ? styles.teamRowReversed : ''}`}
              >
                {/* Avatar side */}
                <div className={styles.avatarWrap}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className={styles.avatarPhoto}
                    />
                  ) : (
                    <div
                      className={styles.avatar}
                      style={{ background: `${member.color}22`, color: member.color }}
                    >
                      {member.initials}
                    </div>
                  )}
                </div>

                {/* Info side */}
                <div className={styles.memberInfo}>
                  <Title level={4} className={styles.memberName}>{member.name}</Title>
                  <Text className={styles.memberRole}>{member.role}</Text>
                  <Space wrap size={[6, 6]} className={styles.memberTags}>
                    {member.tags.map(tag => (
                      <span key={tag} className={styles.memberTag}>{tag}</span>
                    ))}
                  </Space>
                  <Paragraph className={styles.bioPara}>{member.bio[0]}</Paragraph>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>

    {/* CTA */}
    <Section variant="dark" size="md">
      <Container>
        <div className={styles.cta}>
          <Title level={3} className={styles.ctaTitle}>
            Want to Join the Journey?
          </Title>
          <Paragraph className={styles.ctaSubtitle}>
            We're always looking for passionate people who want to transform logistics in India.
          </Paragraph>
          <Space size="middle" wrap>
            <Link to="/contact">
              <Button variant="secondary" size="lg" rightIcon={<ArrowRightOutlined />}>
                Get In Touch
              </Button>
            </Link>
            <Link to="/drivers">
              <Button variant="outline" size="lg">
                Join as Driver
              </Button>
            </Link>
          </Space>
        </div>
      </Container>
    </Section>
  </>
);

export default AboutPage;
