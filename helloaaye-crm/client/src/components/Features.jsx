import {
  FiUsers,
  FiTrendingUp,
  FiBarChart2,
  FiZap,
  FiUserCheck,
  FiFileText,
} from 'react-icons/fi';
import { FEATURES } from '../utils/constants.js';

const ICONS = {
  FiUsers,
  FiTrendingUp,
  FiBarChart2,
  FiZap,
  FiUserCheck,
  FiFileText,
};

const Features = () => {
  return (
    <section id="features" className="section bg-white dark:bg-gray-950">
      <div className="container-app">
        <h2 className="section-title" data-aos="fade-up">
          Everything you need to close more deals
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          Purpose-built tools that help your team manage relationships from first touch to renewal.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.icon];
            return (
              <div
                key={feature.title}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="card p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
