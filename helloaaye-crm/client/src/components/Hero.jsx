import { FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import Button from './Button.jsx';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="container-app relative grid items-center gap-12 lg:grid-cols-2">
        <div data-aos="fade-right">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-100 dark:bg-primary-900/40 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300">
            Trusted by 2,000+ growing teams
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            Grow your business, <span className="text-primary-600 dark:text-primary-400">effortlessly</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            HelloAaye CRM brings your leads, pipelines, and customer data into one clean workspace —
            so your team can sell smarter, close faster, and never miss a follow-up.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={scrollToContact}>
              Get Started Free <FiArrowRight />
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToContact}>
              Talk to Sales
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-primary-600 dark:text-primary-400" /> No credit card required
            </span>
            <span className="flex items-center gap-2">
              <FiCheckCircle className="text-primary-600 dark:text-primary-400" /> 14-day free trial
            </span>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="150" className="relative">
          <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-2xl p-4 sm:p-6">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 space-y-3">
                <div className="rounded-lg bg-primary-50 dark:bg-primary-900/30 p-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Pipeline Value</p>
                  <p className="text-2xl font-bold text-primary-700 dark:text-primary-300">$482,300</p>
                </div>
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">Deals by Stage</p>
                  <div className="space-y-2">
                    {['Prospecting', 'Negotiation', 'Closed Won'].map((stage, i) => (
                      <div key={stage} className="flex items-center gap-2">
                        <span className="w-24 text-xs text-gray-500 dark:text-gray-400">{stage}</span>
                        <div className="flex-1 h-2 rounded-full bg-gray-100 dark:bg-gray-800">
                          <div
                            className="h-2 rounded-full bg-primary-500"
                            style={{ width: `${70 - i * 20}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Leads</p>
                  <p className="text-xl font-bold">1,204</p>
                </div>
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Won</p>
                  <p className="text-xl font-bold text-green-600">312</p>
                </div>
                <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-3 text-center">
                  <p className="text-xs text-gray-500 dark:text-gray-400">Churn</p>
                  <p className="text-xl font-bold text-red-500">2.1%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
