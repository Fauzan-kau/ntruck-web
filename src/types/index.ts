/**
 * nTruck – Shared TypeScript Type Definitions
 */

import type { ReactNode } from 'react';

// ── Layout & UI ──────────────────────────────────────────────

export type ThemeMode = 'light' | 'dark';

export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize    = 'sm' | 'md' | 'lg' | 'xl';

export type SectionVariant = 'default' | 'alternate' | 'dark' | 'gradient';

// ── Content Data Types ───────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: ReactNode;
  color?: string;
}

export interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
  tag?: string;
  link?: string;
}

export interface EcosystemItem {
  id: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

export interface HowItWorksStep {
  step: number;
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ULIPIntegration {
  id: string;
  name: string;
  fullName: string;
  description: string;
  icon: ReactNode;
  tag: string;
  color: string;
  features: string[];
  ministry?: string;
}

export interface RoadmapPhase {
  phase: number;
  title: string;
  subtitle: string;
  timeframe: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: string[];
  color: string;
}

export interface NavItem {
  key: string;
  label: string;
  path: string;
  children?: NavItem[];
}

export interface FooterLink {
  label: string;
  path: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: ReactNode;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'website';
  label: string;
  value: string;
  icon: ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  quote: string;
  rating: number;
  userType: 'driver' | 'vendor' | 'admin';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: number;
  coverImage?: string;
  slug: string;
}

// ── Route Types ──────────────────────────────────────────────

export interface AppRoute {
  path: string;
  element: ReactNode;
  label: string;
  showInNav?: boolean;
}
