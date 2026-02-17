import React from 'react';
import ramsheedDp from '@/assets/images/ramsheed-dp.png';
import {
  CodeOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  RocketOutlined,
  GlobalOutlined,
} from '@ant-design/icons';

export const aboutHero = {
  eyebrow: 'Our Story',
  title: 'Rewriting the Rules of Indian Trucking',
  subtitle:
    'Born in Kerala, built for Bharat — ntruck is tackling one of logistics\' oldest inefficiencies with technology that works at the ground level.',
};

export const companyStory = {
  headline: 'The Problem We Solve',
  body: [
    'ntruck is a Kerala-based digital logistics platform focused on organising India\'s largely informal trucking network. Nearly 35–40% of all truck trips run empty on return journeys — a staggering waste that costs operators income and the country fuel.',
    'Moving beyond the traditional aggregator model, ntruck operates through a proprietary Smart Freight Matching Engine and an itinerary-based booking system that creates predictable weekly work plans for owner-operators.',
    'The result: fewer empty kilometres, more predictable earnings, and a structured, transparent freight ecosystem that works for drivers, fleet owners, and shippers alike.',
  ],
};

export const companyValues = [
  {
    id: 'tech',
    icon: React.createElement(CodeOutlined),
    title: 'Technology-First',
    desc: 'Smart matching algorithms and real-time data replace phone calls and guesswork.',
    color: '#007EFF',
  },
  {
    id: 'trust',
    icon: React.createElement(SafetyCertificateOutlined),
    title: 'Driver-Centric',
    desc: 'Predictable income, verified loads, and fair pay — built around the people who move India.',
    color: '#96D228',
  },
  {
    id: 'scale',
    icon: React.createElement(RocketOutlined),
    title: 'Built to Scale',
    desc: 'Designed from day one to operate across India\'s 28 states and diverse transport corridors.',
    color: '#FF6B00',
  },
  {
    id: 'compliance',
    icon: React.createElement(ApartmentOutlined),
    title: 'Compliance-Ready',
    desc: 'ULIP-integrated, GST-compliant, and VAHAN-verified — structured for the formal economy.',
    color: '#8B5CF6',
  },
  {
    id: 'community',
    icon: React.createElement(TeamOutlined),
    title: 'Community-Led',
    desc: 'Every product decision is shaped by direct conversations with drivers and fleet operators.',
    color: '#EC4899',
  },
  {
    id: 'global',
    icon: React.createElement(GlobalOutlined),
    title: 'India & Beyond',
    desc: 'Solving for India\'s unique logistics landscape with a model that can extend to emerging markets.',
    color: '#14B8A6',
  },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string[];
  initials: string;
  color: string;
  tags: string[];
  image?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ramees',
    name: 'Ramees Ahammed',
    role: 'Founder',
    initials: 'RA',
    color: '#002369',
    tags: ['Strategy', 'Industry Expertise', 'Legal'],
    bio: [
      'With deep roots in India\'s trucking sector and a dual background in business and law (University of Delhi & Central University of Haryana), Ramees drives ntruck\'s vision of a transparent, technology-enabled freight network — shaped by years of direct work with drivers, fleet owners, and logistics clients.',
    ],
  },
  {
    id: 'ramsheed',
    name: 'Ramsheed',
    role: 'Co-Founder',
    initials: 'RS',
    color: '#96D228',
    image: ramsheedDp,
    tags: ['Operations', 'Partnerships', 'Growth'],
    bio: [
      'The operational core of ntruck, Ramsheed leads strategy execution, fleet partnerships, and business development. His hands-on approach keeps day-to-day operations running smoothly and ensures every driver and client gets dependable, consistent service.',
    ],
  },
  {
    id: 'saleeq',
    name: 'Saleeq Sulaiman',
    role: 'Chief Technology Officer',
    initials: 'SS',
    color: '#007EFF',
    tags: ['Engineering', 'Product', 'AI/ML'],
    bio: [
      'Saleeq architects ntruck\'s full technology stack — from the Smart Freight Matching Engine to the driver and vendor apps. With expertise across full-stack engineering, mobile, and data systems, he keeps the platform fast, compliant, and simple for every user on India\'s roads.',
    ],
  },
];

export const companyStats = [
  { value: '35–40%', label: 'Empty Trips Targeted' },
  { value: 'Kerala', label: 'Founded In' },
  { value: '28', label: 'States Coverage' },
  { value: '2024', label: 'Year Founded' },
];
