import { FiStar } from 'react-icons/fi';
import { TESTIMONIALS } from '../utils/constants.js';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-white dark:bg-gray-950">
      <div className="container-app">
        <h2 className="section-title" data-aos="fade-up">
          Loved by teams everywhere
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          Here's what our customers have to say about HelloAaye CRM.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="card p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FiStar
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300 dark:text-gray-700'}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-1">"{testimonial.review}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
