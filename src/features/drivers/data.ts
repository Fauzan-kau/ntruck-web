import React from 'react';
import {
  SafetyCertificateOutlined,
  MobileOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  AlertOutlined,
  GlobalOutlined,
  FileProtectOutlined,
  TruckOutlined,
} from '@ant-design/icons';
import type { Feature } from '@/types';

export const driverPageHero = {
  eyebrow:  'For Drivers',
  title:    'Drive Smart. Earn More. Stay Safe.',
  subtitle:
    "nTruck's driver app gives every truck driver in India the tools to get verified, find loads, manage trips, and get paid — all in one place.",
  image:    null,
};

export const driverFeatures: Feature[] = [
  {
    id:          'dl-verification',
    icon:        React.createElement(FileProtectOutlined),
    title:       'Instant DL Verification',
    description:
      'Your driving license is verified in seconds via SARATHI, the official government database. No manual checks, no delays.',
    highlight:   true,
    tag:         'SARATHI API',
  },
  {
    id:          'rc-verification',
    icon:        React.createElement(TruckOutlined),
    title:       'Vehicle RC Verification',
    description:
      'Vehicle registration, fitness, insurance, and PUC certificates are auto-verified through VAHAN in real time.',
    highlight:   true,
    tag:         'VAHAN API',
  },
  {
    id:          'digilocker',
    icon:        React.createElement(SafetyCertificateOutlined),
    title:       'Digital Document Vault',
    description:
      'Store your DL, RC, Aadhaar, and all driving documents in DigiLocker. Share digitally, skip the paperwork.',
    tag:         'DigiLocker',
  },
  {
    id:          'trip-acceptance',
    icon:        React.createElement(MobileOutlined),
    title:       'Smart Trip Matching',
    description:
      'Receive trip requests that match your route, vehicle type, and availability. Accept, negotiate, or decline easily.',
  },
  {
    id:          'trip-lifecycle',
    icon:        React.createElement(TruckOutlined),
    title:       'Full Trip Lifecycle',
    description:
      'From load pickup to delivery — manage every step digitally. Status updates, proof-of-loading, ePOD, and more.',
  },
  {
    id:          'earnings',
    icon:        React.createElement(DollarOutlined),
    title:       'Earnings Dashboard & Wallet',
    description:
      'See all your completed trips, earnings, deductions, and wallet balance in one clear screen. Instant UPI payouts.',
    highlight:   true,
  },
  {
    id:          'navigation',
    icon:        React.createElement(EnvironmentOutlined),
    title:       'Route Navigation',
    description:
      'Integrated navigation with turn-by-turn directions, toll information, weight restrictions, and preferred corridors.',
  },
  {
    id:          'safety-alerts',
    icon:        React.createElement(AlertOutlined),
    title:       'Safety Alerts',
    description:
      'Real-time alerts for accident-prone zones, speed breakers, weather warnings, and fatigue reminders on highways.',
    tag:         'AI Powered',
  },
  {
    id:          'route-intelligence',
    icon:        React.createElement(GlobalOutlined),
    title:       'Route Intelligence',
    description:
      'AI-driven route optimization based on traffic, road conditions, permit restrictions, and delivery time windows.',
    tag:         'Coming Soon',
  },
];

export const driverStats = [
  { value: '50,000+', label: 'Verified Drivers', color: '#1B2A6B' },
  { value: '₹24,000',label: 'Avg Monthly Earning', color: '#22C55E' },
  { value: '94%',    label: 'On-Time Delivery', color: '#FF6B00' },
  { value: '4.8★',   label: 'Average Driver Rating', color: '#F59E0B' },
];

export const onboardingSteps = [
  {
    step:  1,
    title: 'Download App',
    desc:  'Available on Android & iOS. Free to download.',
  },
  {
    step:  2,
    title: 'Register & Upload DL',
    desc:  'Enter your Aadhaar and upload your driving license.',
  },
  {
    step:  3,
    title: 'SARATHI Verification',
    desc:  'Your DL is verified in seconds via government API.',
  },
  {
    step:  4,
    title: 'Add Vehicle',
    desc:  'Enter your RC number — VAHAN verifies it instantly.',
  },
  {
    step:  5,
    title: 'Go Live',
    desc:  'You\'re verified and ready to accept trips!',
  },
];
