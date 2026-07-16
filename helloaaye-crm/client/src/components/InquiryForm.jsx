import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from './Button.jsx';
import { validateInquiryForm } from '../utils/validation.js';
import { submitInquiry } from '../services/inquiryApi.js';
import { COUNTRIES, INDUSTRIES, COMPANY_SIZES } from '../utils/constants.js';

const INITIAL_VALUES = {
  fullName: '',
  companyName: '',
  email: '',
  phone: '',
  country: '',
  industry: '',
  companySize: '',
  message: '',
};

const FIELD_LABELS = {
  fullName: 'Full Name',
  companyName: 'Company Name',
  email: 'Email',
  phone: 'Phone',
};

const InquiryForm = () => {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateInquiryForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the highlighted fields');
      return;
    }

    setSubmitting(true);
    try {
      await submitInquiry(values);
      toast.success("Thanks! We've received your inquiry and will be in touch soon.");
      setValues(INITIAL_VALUES);
      setErrors({});
    } catch (error) {
      const message =
        error.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-950">
      <div className="container-app max-w-3xl">
        <h2 className="section-title" data-aos="fade-up">
          Talk to our sales team
        </h2>
        <p className="section-subtitle" data-aos="fade-up">
          Tell us a bit about your business and we'll reach out with a tailored demo.
        </p>

        <form onSubmit={handleSubmit} noValidate data-aos="fade-up" className="card p-6 sm:p-8 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {['fullName', 'companyName', 'email', 'phone'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium mb-1.5">
                  {FIELD_LABELS[field]}
                </label>
                <input
                  id={field}
                  name={field}
                  type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                  value={values[field]}
                  onChange={handleChange}
                  placeholder={
                    field === 'email'
                      ? 'you@company.com'
                      : field === 'phone'
                      ? '+1 555 123 4567'
                      : `Enter ${FIELD_LABELS[field].toLowerCase()}`
                  }
                  className={`input-field ${errors[field] ? 'input-error' : ''}`}
                />
                {errors[field] && <p className="mt-1 text-xs text-red-500">{errors[field]}</p>}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-1.5">
                Country
              </label>
              <select
                id="country"
                name="country"
                value={values.country}
                onChange={handleChange}
                className={`input-field ${errors.country ? 'input-error' : ''}`}
              >
                <option value="">Select country</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.country && <p className="mt-1 text-xs text-red-500">{errors.country}</p>}
            </div>

            <div>
              <label htmlFor="industry" className="block text-sm font-medium mb-1.5">
                Industry
              </label>
              <select
                id="industry"
                name="industry"
                value={values.industry}
                onChange={handleChange}
                className={`input-field ${errors.industry ? 'input-error' : ''}`}
              >
                <option value="">Select industry</option>
                {INDUSTRIES.map((i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>
              {errors.industry && <p className="mt-1 text-xs text-red-500">{errors.industry}</p>}
            </div>

            <div>
              <label htmlFor="companySize" className="block text-sm font-medium mb-1.5">
                Company Size
              </label>
              <select
                id="companySize"
                name="companySize"
                value={values.companySize}
                onChange={handleChange}
                className={`input-field ${errors.companySize ? 'input-error' : ''}`}
              >
                <option value="">Select size</option>
                {COMPANY_SIZES.map((s) => (
                  <option key={s} value={s}>
                    {s} employees
                  </option>
                ))}
              </select>
              {errors.companySize && <p className="mt-1 text-xs text-red-500">{errors.companySize}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={values.message}
              onChange={handleChange}
              placeholder="Tell us what you're looking for..."
              className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
            />
            <div className="mt-1 flex items-center justify-between">
              {errors.message ? (
                <p className="text-xs text-red-500">{errors.message}</p>
              ) : (
                <span />
              )}
              <p className="text-xs text-gray-400">{values.message.length}/1000</p>
            </div>
          </div>

          <Button type="submit" size="lg" loading={submitting} className="w-full sm:w-auto">
            {submitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
