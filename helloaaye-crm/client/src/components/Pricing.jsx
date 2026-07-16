import { FiCheck } from 'react-icons/fi';
import Button from './Button.jsx';
import { PRICING_PLANS } from '../utils/constants.js';

const Pricing = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-app">
        <h2 className="section-title" data-aos="fade-up">
          Simple, transparent pricing
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          Choose the plan that fits your team. Upgrade or downgrade anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`card relative flex flex-col p-8 ${
                plan.highlighted
                  ? 'border-2 border-primary-600 shadow-xl md:-translate-y-4'
                  : ''
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 text-white text-xs font-semibold px-3 py-1">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold">${plan.price}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/ month</span>
              </div>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <FiCheck className="mt-0.5 shrink-0 text-primary-600 dark:text-primary-400" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'secondary'}
                className="mt-8 w-full"
                onClick={scrollToContact}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
