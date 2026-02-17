import React from 'react';
import { Layout } from 'antd';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import styles from './MainLayout.module.scss';

const { Content } = Layout;

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Layout className={styles.layout}>
    <Navbar />
    <Content className={styles.content}>
      {children}
    </Content>
    <Footer />
  </Layout>
);

export default MainLayout;
