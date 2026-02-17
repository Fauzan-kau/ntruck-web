import React from 'react';
import {
  TruckOutlined,
  DollarOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
  FileTextOutlined,
  TeamOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import type { Feature } from '@/types';

export const vendorPageHero = {
  eyebrow:  'For Vendors & Shippers',
  title:    'Ship Smarter. Pay Less. Trust More.',
  subtitle:
    'nTruck gives businesses and individual shippers a single platform to post loads, find verified drivers, track shipments in real time, and pay securely.',
};

export const vendorFeatures: Feature[] = [
  {
    id:          'load-posting',
    icon:        React.createElement(TruckOutlined),
    title:       'Instant Load Posting',
    description:
      'Post a load in under 2 minutes. Specify origin, destination, weight, vehicle type, and preferred schedule. Drivers near you get notified instantly.',
    highlight:   true,
  },
  {
    id:          'cost-calculator',
    icon:        React.createElement(DollarOutlined),
    title:       'Transparent Cost Calculation',
    description:
      'Our algorithm considers distance, vehicle type, weight, toll charges, fuel surcharge, and demand to give you a fair, upfront price — always.',
    highlight:   true,
    tag:         'AI Pricing',
  },
  {
    id:          'driver-verification',
    icon:        React.createElement(SafetyCertificateOutlined),
    title:       'Verified Driver Pool',
    description:
      'Every driver you assign has been verified via SARATHI (DL) and VAHAN (RC). You know exactly who is carrying your goods.',
    tag:         'ULIP Verified',
  },
  {
    id:          'realtime-tracking',
    icon:        React.createElement(EnvironmentOutlined),
    title:       'Real-Time GPS Tracking',
    description:
      'See your truck on a live map. Get ETA updates, route deviation alerts, halt notifications, and delivery confirmation.',
  },
  {
    id:          'payment-flow',
    icon:        React.createElement(DollarOutlined),
    title:       'Secure Payment Flow',
    description:
      'Funds are held in escrow until delivery is confirmed. Driver receives payment only after ePOD is uploaded. Zero fraud risk.',
    highlight:   true,
  },
  {
    id:          'epod',
    icon:        React.createElement(FileTextOutlined),
    title:       'Digital Proof of Delivery',
    description:
      'Drivers capture photos, recipient signatures, and timestamps as digital ePOD. Auto-generated invoices for every consignment.',
  },
  {
    id:          'dispute',
    icon:        React.createElement(AlertOutlined),
    title:       'Dispute Management',
    description:
      'Raise disputes on damaged goods, delays, or overcharging. Our resolution team reviews with full trip evidence and resolves within 48 hours.',
  },
  {
    id:          'gst-invoice',
    icon:        React.createElement(BarChartOutlined),
    title:       'GST-Compliant Invoicing',
    description:
      'Every trip generates a GST-compliant invoice automatically. Download, email, or integrate with your ERP directly.',
    tag:         'GST API',
  },
  {
    id:          'fleet-management',
    icon:        React.createElement(TeamOutlined),
    title:       'Fleet Management',
    description:
      'Enterprise vendors can manage their own fleet on nTruck — add multiple vehicles, assign preferred drivers, and track all trips centrally.',
  },
];

export const vendorStats = [
  { value: '12,000+', label: 'Active Vendors',     color: '#FF6B00' },
  { value: '₹850Cr+', label: 'Freight Value Moved', color: '#1B2A6B' },
  { value: '99.2%',   label: 'Payment Success Rate', color: '#22C55E' },
  { value: '4.7★',    label: 'Vendor Satisfaction', color: '#F59E0B' },
];
