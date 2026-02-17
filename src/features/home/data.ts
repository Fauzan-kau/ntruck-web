/**
 * Home Page – Structured Content Data
 * Never hardcode content directly in JSX. Use this file.
 */

import React from 'react';
import {
  TruckOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  DollarOutlined,
  TeamOutlined,
  GlobalOutlined,
  RocketOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  MobileOutlined,
  CloudOutlined,
  LockOutlined,
  ThunderboltOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';
import type { Stat, Feature, EcosystemItem, HowItWorksStep, ULIPIntegration } from '@/types';

export const homeStats: Stat[] = [
  {
    value:  '50,000+',
    label:  'Verified Drivers',
    icon:   React.createElement(TeamOutlined),
    color:  '#1B2A6B',
  },
  {
    value:  '800+',
    label:  'Active Vendors',
    icon:   React.createElement(TruckOutlined),
    color:  '#FF6B00',
  },
  {
    value:  '2.5L+',
    label:  'Trips Completed',
    icon:   React.createElement(CheckCircleOutlined),
    color:  '#22C55E',
  },
  {
    value:  '28',
    label:  'States Covered',
    icon:   React.createElement(EnvironmentOutlined),
    color:  '#3B82F6',
  },
];

export const homeFeatures: Feature[] = [
  {
    id:          'verified-onboarding',
    icon:        React.createElement(SafetyCertificateOutlined),
    title:       'Verified Onboarding',
    description: 'Every driver and vendor is verified through VAHAN & SARATHI ULIP APIs — ensuring 100% compliance before the first trip.',
    highlight:   true,
    tag:         'ULIP Powered',
  },
  {
    id:          'realtime-tracking',
    icon:        React.createElement(EnvironmentOutlined),
    title:       'Real-Time Tracking',
    description: 'GPS-powered live tracking for every trip. Vendors see driver location, ETA updates, and route deviations instantly.',
    tag:         'Live',
  },
  {
    id:          'smart-pricing',
    icon:        React.createElement(DollarOutlined),
    title:       'Smart Cost Calculator',
    description: 'Distance-based pricing with toll, fuel surcharges, and load type factored in. Transparent billing every time.',
  },
  {
    id:          'wallet-payments',
    icon:        React.createElement(DollarOutlined),
    title:       'Integrated Wallet & Payments',
    description: 'In-app wallet, UPI, and bank transfers. Instant payouts to drivers, escrow for vendors, commission auto-deduction.',
    highlight:   true,
  },
  {
    id:          'trip-lifecycle',
    icon:        React.createElement(TruckOutlined),
    title:       'Full Trip Lifecycle',
    description: 'From load posting to delivery confirmation — manage every stage of the trip digitally. No paperwork.',
  },
  {
    id:          'route-intelligence',
    icon:        React.createElement(GlobalOutlined),
    title:       'Route Intelligence',
    description: 'Smart route suggestions, traffic-aware ETA, safety alerts on highways, and accident-prone zone notifications.',
    tag:         'AI Powered',
  },
  {
    id:          'marketplace',
    icon:        React.createElement(RocketOutlined),
    title:       'Open Marketplace',
    description: 'Expanding into a logistics marketplace where vendors post loads publicly and drivers bid for trips transparently.',
    tag:         'Coming Soon',
  },
];

export const ecosystemItems: EcosystemItem[] = [
  {
    id:          'driver-app',
    icon:        React.createElement(MobileOutlined),
    title:       'Driver App',
    subtitle:    'Built for the Road',
    description: 'A powerful mobile application designed for India\'s truck drivers. Simple UI, vernacular language support, and offline capability.',
    features:    [
      'VAHAN & SARATHI verified onboarding',
      'Itinerary based trucker routines',
      'Trip acceptance & management',
      'Real-time navigation & alerts',
      'Earnings wallet & history',
      'Document vault via DigiLocker',
      'Emergency SOS & safety features',
    ],
    color:    '#1B2A6B',
    gradient: 'linear-gradient(135deg, #1B2A6B 0%, #2D3FFF 100%)',
  },
  {
    id:          'vendor-app',
    icon:        React.createElement(TruckOutlined),
    title:       'Vendor App',
    subtitle:    'Built for Shippers',
    description: 'End-to-end load management for businesses and individuals who need to move goods across India reliably.',
    features:    [
      'Post loads with route & weight',
      'Transparent cost estimation',
      'Assign & track drivers live',
      'Digital proof of delivery (ePOD)',
      'Invoice & payment management',
      'Dispute resolution system',
    ],
    color:    '#FF6B00',
    gradient: 'linear-gradient(135deg, #FF6B00 0%, #FF9A3C 100%)',
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    step:        1,
    icon:        React.createElement(SafetyCertificateOutlined),
    title:       'Get Verified',
    description: 'Drivers upload DL & RC; vendors register their GSTIN.Our App verify everything in real time — no manual checks.',
  },
  {
    step:        2,
    icon:        React.createElement(TruckOutlined),
    title:       'Post & Accept Loads',
    description: 'Vendors post load requirements with origin, destination, weight, and type. Verified drivers accept and confirm within minutes.',
  },
  {
    step:        3,
    icon:        React.createElement(CheckCircleOutlined),
    title:       'Deliver & Get Paid',
    description: 'Driver completes the trip, vendor confirms delivery digitally. Payment releases instantly to driver\'s wallet. Commission auto-deducted.',
  },
];

export const ulipIntegrations: ULIPIntegration[] = [
  {
    id:          'vahan',
    name:        'VAHAN',
    fullName:    'Vehicle Registration Database',
    description: 'Instant vehicle registration verification. We check RC validity, fitness certificates, insurance, and PUC in real time.',
    icon:        React.createElement(TruckOutlined),
    tag:         'Active',
    color:       '#1B2A6B',
    features:    ['RC Number Validation', 'Fitness Certificate Check', 'Insurance Verification', 'Permit Validity'],
    ministry:    'MoRTH',
  },
  {
    id:          'sarathi',
    name:        'SARATHI',
    fullName:    'Driving License Database',
    description: 'Real-time driving license verification. Validate DL status, endorsements, validity, and transport eligibility.',
    icon:        React.createElement(FileProtectOutlined),
    tag:         'Active',
    color:       '#F59E0B',
    features:    ['DL Number Validation', 'Transport Endorsement', 'Expiry Verification', 'Blacklist Check'],
    ministry:    'MoRTH',
  },
  {
    id:          'digilocker',
    name:        'DigiLocker',
    fullName:    'Digital Document Repository',
    description: 'Drivers store and share government-issued documents digitally. No physical document collection required.',
    icon:        React.createElement(CloudOutlined),
    tag:         'Active',
    color:       '#22C55E',
    features:    ['Digital Aadhaar', 'DL & RC Storage', 'Direct Gov-issued Docs', 'Paperless KYC'],
    ministry:    'MeitY',
  },
  {
    id:          'gst',
    name:        'GST',
    fullName:    'Goods & Services Tax Portal',
    description: 'Vendor GSTIN verification for B2B compliance. Auto-generate GST-compliant invoices for every consignment.',
    icon:        React.createElement(BarChartOutlined),
    tag:         'Active',
    color:       '#3B82F6',
    features:    ['GSTIN Validation', 'GST Invoice Generation', 'E-Way Bill Integration', 'Filing Support'],
    ministry:    'CBIC',
  },
  {
    id:          'mca',
    name:        'MCA',
    fullName:    'Ministry of Corporate Affairs',
    description: 'Company registration and director verification for enterprise vendors operating fleets at scale.',
    icon:        React.createElement(LockOutlined),
    tag:         'Active',
    color:       '#8B5CF6',
    features:    ['Company CIN Verification', 'Director KYC', 'Entity Status Check', 'Compliance Tracking'],
    ministry:    'MCA',
  },
  {
    id:          'fastag',
    name:        'FASTag',
    fullName:    'Electronic Toll Collection',
    description: 'FASTag integration for real-time toll deduction, route tracking, and automatic toll cost inclusion in trip pricing.',
    icon:        React.createElement(ThunderboltOutlined),
    tag:         'Coming Soon',
    color:       '#EC4899',
    features:    ['Auto Toll Deduction', 'Route Proof', 'Toll Cost in Pricing', 'NHAI Integration'],
    ministry:    'NHAI',
  },
];

export const heroHeadline = {
  line1: "India's 1'st Digital",
  line2: 'Trucking Platform',
  subtitle:
    'Connecting verified drivers, intelligent vendors, and enterprise logistics — built for scale.',
};

export const ctaData = {
  title:    "Ready to Digitize Your Logistics?",
  subtitle: "Join 50,000+ drivers and 800+ vendors already on nTruck. Get started for free.",
  primaryLabel:   'Get Started Free',
  secondaryLabel: 'Schedule a Demo',
};

export const apiData = {
  badge: 'Developer Ready',
  title: 'Open API Platform',
  description: 'nTruck provides a robust REST API for enterprise integrations, TMS connections, and ERP systems.',
  features: [
    'REST & WebSocket APIs',
    'Real-time trip webhooks',
    'ULIP passthrough endpoints',
    'SDK for iOS, Android, Web',
  ],
};
