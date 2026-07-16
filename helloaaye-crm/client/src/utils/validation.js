export const validateInquiryForm = (values) => {
  const errors = {};

  if (!values.fullName?.trim()) {
    errors.fullName = 'Full name is required';
  } else if (values.fullName.trim().length < 2) {
    errors.fullName = 'Full name must be at least 2 characters';
  }

  if (!values.companyName?.trim()) {
    errors.companyName = 'Company name is required';
  }

  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!values.phone?.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number';
  }

  if (!values.country?.trim()) {
    errors.country = 'Please select a country';
  }

  if (!values.industry?.trim()) {
    errors.industry = 'Please select an industry';
  }

  if (!values.companySize?.trim()) {
    errors.companySize = 'Please select a company size';
  }

  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (values.message.trim().length > 1000) {
    errors.message = 'Message must be under 1000 characters';
  }

  return errors;
};
