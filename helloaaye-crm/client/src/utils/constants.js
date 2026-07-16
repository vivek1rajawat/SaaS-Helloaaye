export const COMPANY_NAME = 'HelloAaye';

export const FEATURES = [
  {
    title: 'Lead Management',
    description: 'Capture, organize, and nurture leads through every stage of your funnel.',
    icon: 'FiUsers',
  },
  {
    title: 'Sales Pipeline',
    description: 'Visualize deals with drag-and-drop pipelines built for fast-moving teams.',
    icon: 'FiTrendingUp',
  },
  {
    title: 'Customer Analytics',
    description: 'Understand customer behavior with real-time dashboards and reports.',
    icon: 'FiBarChart2',
  },
  {
    title: 'Automation',
    description: 'Automate repetitive tasks and follow-ups so nothing falls through the cracks.',
    icon: 'FiZap',
  },
  {
    title: 'Team Collaboration',
    description: 'Keep sales, marketing, and support aligned with shared notes and activity feeds.',
    icon: 'FiUserCheck',
  },
  {
    title: 'Reports',
    description: 'Generate actionable reports to track KPIs and forecast revenue accurately.',
    icon: 'FiFileText',
  },
];

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started with CRM.',
    features: ['Up to 3 users', 'Lead management', 'Basic reporting', 'Email support'],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'For growing teams that need automation and deeper insights.',
    features: [
      'Up to 20 users',
      'Sales pipeline automation',
      'Advanced analytics',
      'Priority support',
      'Team collaboration tools',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'Advanced controls and support for large organizations.',
    features: [
      'Unlimited users',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 premium support',
      'Advanced security & SSO',
    ],
    highlighted: false,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    company: 'Brightwave Media',
    rating: 5,
    review:
      'HelloAaye completely transformed how our sales team tracks leads. We closed 30% more deals in our first quarter.',
    image: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'David Chen',
    company: 'Northpoint Logistics',
    rating: 5,
    review:
      'The automation features alone saved us dozens of hours every month. Setup was fast and support has been fantastic.',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Amara Okafor',
    company: 'Sunrise Retail Group',
    rating: 4,
    review:
      'Clean interface, powerful reporting, and our whole team adopted it within a week. Highly recommended for growing businesses.',
    image: 'https://i.pravatar.cc/150?img=32',
  },
];

export const FAQS = [
  {
    question: 'Is there a free trial?',
    answer: 'Yes, every plan includes a 14-day free trial with full access to all features. No credit card required.',
  },
  {
    question: 'Is customer support available?',
    answer: 'Absolutely. All plans include email support, and Professional and Enterprise plans include priority and 24/7 support.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes, you can cancel or change your plan at any time from your account settings with no cancellation fees.',
  },
  {
    question: 'Can I upgrade or downgrade my plan later?',
    answer: 'Yes, you can switch between plans at any time and we will prorate the difference automatically.',
  },
];

export const COUNTRIES = [
  'United States',
  'United Kingdom',
  'Canada',
  'Australia',
  'India',
  'Germany',
  'France',
  'Singapore',
  'United Arab Emirates',
  'Other',
];

export const INDUSTRIES = [
  'Technology',
  'Retail & E-commerce',
  'Healthcare',
  'Finance & Banking',
  'Manufacturing',
  'Education',
  'Real Estate',
  'Logistics',
  'Other',
];

export const COMPANY_SIZES = ['1-10', '11-50', '51-200', '201-500', '500+'];
