import React from 'react';
import { Row, Col, Typography } from 'antd';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { homeStats } from '../../data';
import styles from './StatsSection.module.scss';

const { Title, Text } = Typography;

export const StatsSection: React.FC = () => (
  <Section variant="dark" size="sm" className={styles.section}>
    <Container>
      <Row gutter={[0, 0]} className={styles.grid}>
        {homeStats.map((stat, idx) => (
          <Col key={stat.label} xs={12} sm={12} md={6}>
            <div className={`${styles.statItem} ${idx < homeStats.length - 1 ? styles.hasDivider : ''}`}>
              <div className={styles.iconWrapper} style={{ background: `${stat.color}20`, color: stat.color }}>
                {stat.icon}
              </div>
              <Title level={2} className={styles.value}>
                {stat.value}
              </Title>
              <Text className={styles.label}>{stat.label}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
);

export default StatsSection;
