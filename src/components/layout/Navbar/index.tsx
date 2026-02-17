import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Layout,
  Menu,
  Button,
  Drawer,
  // Switch,    
  Space,
  type MenuProps,
} from 'antd';
import {
  MenuOutlined,
  CloseOutlined,
  // MoonOutlined,
  // SunOutlined,
} from '@ant-design/icons';
import { useThemeContext } from '@/app/providers/ThemeProvider';
import { Logo } from '@/components/common/Logo';
import { cx } from '@/utils';
import styles from './Navbar.module.scss';

const { Header } = Layout;

const NAV_ITEMS: MenuProps['items'] = [
  { key: '/',              label: <Link to="/">Home</Link> },
  { key: '/drivers',       label: <Link to="/drivers">Drivers</Link> },
  { key: '/vendors',       label: <Link to="/vendors">Vendors</Link> },
  { key: '/about',         label: <Link to="/about">About</Link> },
  { key: '/contact',       label: <Link to="/contact">Contact</Link> },
];

export const Navbar: React.FC = () => {
  const location          = useLocation();
  const { isDark, 
    // toggleTheme 
  } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const selectedKey = location.pathname === '/'
    ? '/'
    : NAV_ITEMS.find(item =>
        item && 'key' in item && item.key !== '/' &&
        location.pathname.startsWith(item.key as string)
      )?.key as string ?? '';

  return (
    <>
      <Header
        className={cx(
          styles.navbar,
          scrolled && styles.scrolled,
          isDark && styles.dark
        )}
      >
        <div className={styles.inner}>
          {/* Logo */}
          <Link to="/" className={styles.logo}>
            <Logo
              variant="current"
              type="icon"
              height={36}
              className={styles.logoSvg}
            />
            <span className={styles.logoText}>
              n<span className={styles.logoAccent}>truck</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav}>
            <Menu
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={NAV_ITEMS}
              className={styles.menu}
              disabledOverflow
            />
          </nav>

          {/* Actions */}
          <Space className={styles.actions} size="small">
            {/* <Switch
              checked={isDark}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
              className={styles.themeSwitch}
            /> */}
            <Button
              type="primary"
              className={styles.ctaBtn}
              href="/contact"
            >
              Get Started
            </Button>
            <Button
              type="text"
              icon={<MenuOutlined />}
              className={styles.menuBtn}
              onClick={() => setDrawerOpen(prev => !prev)}
              aria-label="Open menu"
            />
          </Space>
        </div>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        placement="right"
        width={300}
        title={
          <Link to="/" className={styles.drawerLogo}>
            <Logo variant="db" type="icon" height={28} />
            <span>ntruck</span>
          </Link>
        }
        closeIcon={<CloseOutlined />}
        className={styles.drawer}
      >
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          items={NAV_ITEMS}
          className={styles.drawerMenu}
        />
        <div className={styles.drawerActions}>
          <Button
            type="primary"
            block
            size="large"
            href="/contact"
          >
            Get Started
          </Button>
          {/* <div className={styles.themeToggleRow}>
            <span>Dark Mode</span>
            <Switch
              checked={isDark}
              onChange={toggleTheme}
              checkedChildren={<MoonOutlined />}
              unCheckedChildren={<SunOutlined />}
            />
          </div> */}
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
