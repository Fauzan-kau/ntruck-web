import React from 'react';
import {
  Row, Col, Card, Form, Input, Select,
  Typography, Tag, Space, message,
} from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  SendOutlined,
} from '@ant-design/icons';
import { Section } from '@/components/common/Section';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import styles from './Contact.module.scss';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const CONTACT_INFO = [
  {
    icon:  <MailOutlined />,
    label: 'General Enquiries',
    value: 'hello@ntruck.in',
    href:  'mailto:hello@ntruck.in',
    color: '#1B2A6B',
  },
  {
    icon:  <MailOutlined />,
    label: 'Investor Relations',
    value: 'investors@ntruck.in',
    href:  'mailto:investors@ntruck.in',
    color: '#8B5CF6',
  },
  {
    icon:  <PhoneOutlined />,
    label: 'Support Helpline',
    value: '+91 954433  6827',
    href:  'tel:+919544336827',
    color: '#22C55E',
  },
  {
    icon:  <EnvironmentOutlined />,
    label: 'Headquarters',
    value: 'NO. 104/3, KALPAKA, PATTAMBI, PALAKKAD, Melepattambi, Ottappalam, Palakkad- 679306',
    href:  undefined,
    color: '#FF6B00',
  },
];

const ContactPage: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: Record<string, string>) => {
    // Placeholder — wire to real API in production
    console.warn('Contact form submission:', values);
    void message.success('Thank you! We will get back to you within 24 hours.');
    form.resetFields();
  };

  return (
    <>
      {/* Hero */}
      <Section variant="gradient" size="md">
        <Container>
          <div className={styles.pageHero}>
            <Tag color="orange" className={styles.heroEyebrow}>Contact Us</Tag>
            <Title level={1} className={styles.heroTitle}>
              Let's Build the Future of Trucking Together
            </Title>
            <Paragraph className={styles.heroSubtitle}>
              Whether you're a driver, vendor, investor, or technology partner —
              we'd love to hear from you. Reach us anytime.
            </Paragraph>
          </div>
        </Container>
      </Section>

      {/* Main section */}
      <Section variant="default" size="lg">
        <Container>
          <Row gutter={[48, 48]}>
            {/* Left – contact info */}
            <Col xs={24} lg={10}>
              <div className={styles.infoSection}>
                <Title level={4} className={styles.infoTitle}>
                  Get In Touch
                </Title>
                <Paragraph className={styles.infoSubtitle}>
                  Our team typically responds within 24 hours on business days.
                  For urgent driver or vendor support, use our in-app help center.
                </Paragraph>

                <div className={styles.contactItems}>
                  {CONTACT_INFO.map(info => (
                    <div key={info.label} className={styles.contactItem}>
                      <div
                        className={styles.contactItemIcon}
                        style={{ background: `${info.color}15`, color: info.color }}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <Text className={styles.contactItemLabel}>{info.label}</Text>
                        {info.href ? (
                          <a href={info.href} className={styles.contactItemValue}>
                            {info.value}
                          </a>
                        ) : (
                          <Text className={styles.contactItemValue}>{info.value}</Text>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div className={styles.socialSection}>
                  <Text className={styles.socialTitle}>Follow nTruck</Text>
                  <Space size="small">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialBtn}
                      aria-label="Instagram"
                    >
                      <InstagramOutlined />
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      className={styles.socialBtn}
                      aria-label="LinkedIn"
                    >
                      <LinkedinOutlined />
                    </a>
                  </Space>
                </div>

                {/* Map placeholder */}
                <div className={styles.mapPlaceholder}>
                  <EnvironmentOutlined className={styles.mapIcon} />
                  <Text className={styles.mapText}>Bengaluru, Karnataka</Text>
                  <Text className={styles.mapSub}>India's Silicon Valley of Logistics</Text>
                </div>
              </div>
            </Col>

            {/* Right – contact form */}
            <Col xs={24} lg={14}>
              <Card className={styles.formCard} bordered={false}>
                <Title level={4} className={styles.formTitle}>
                  Send Us a Message
                </Title>

                <Form
                  form={form}
                  layout="vertical"
                  onFinish={handleSubmit}
                  className={styles.form}
                >
                  <Row gutter={[16, 0]}>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[{ required: true, message: 'Please enter your first name' }]}
                      >
                        <Input placeholder="Rajesh" size="large" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[{ required: true, message: 'Please enter your last name' }]}
                      >
                        <Input placeholder="Kumar" size="large" />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label="Business Email"
                    rules={[
                      { required: true, message: 'Email is required' },
                      { type: 'email', message: 'Enter a valid email' },
                    ]}
                  >
                    <Input
                      placeholder="rajesh@company.in"
                      size="large"
                      prefix={<MailOutlined style={{ color: '#94A3B8' }} />}
                    />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    label="Phone Number (optional)"
                  >
                    <Input
                      placeholder="+91 98765 43210"
                      size="large"
                      prefix={<PhoneOutlined style={{ color: '#94A3B8' }} />}
                    />
                  </Form.Item>

                  <Form.Item
                    name="enquiryType"
                    label="Enquiry Type"
                    rules={[{ required: true, message: 'Please select enquiry type' }]}
                  >
                    <Select placeholder="Select the type of enquiry" size="large">
                      <Option value="driver">Driver Onboarding</Option>
                      <Option value="vendor">Vendor / Shipper Access</Option>
                      <Option value="enterprise">Enterprise Solution</Option>
                      <Option value="investor">Investor Relations</Option>
                      <Option value="press">Press & Media</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item
                    name="message"
                    label="Message"
                    rules={[{ required: true, message: 'Please add your message' }]}
                  >
                    <TextArea
                      placeholder="Tell us about your requirement..."
                      rows={5}
                      size="large"
                      maxLength={1000}
                      showCount
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      htmlType="submit"
                      rightIcon={<SendOutlined />}
                    >
                      Send Message
                    </Button>
                  </Form.Item>

                  <Text className={styles.formDisclaimer}>
                    By submitting, you agree to our Privacy Policy. We never share your data.
                  </Text>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
