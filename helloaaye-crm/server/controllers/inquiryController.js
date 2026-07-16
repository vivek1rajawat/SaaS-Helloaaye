const Inquiry = require('../models/Inquiry');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Create a new inquiry
// @route   POST /api/inquiry
// @access  Public
const createInquiry = asyncHandler(async (req, res) => {
  const { fullName, companyName, email, phone, country, industry, companySize, message } = req.body;

  const inquiry = await Inquiry.create({
    fullName,
    companyName,
    email,
    phone,
    country,
    industry,
    companySize,
    message,
  });

  res.status(201).json({
    success: true,
    message: 'Inquiry submitted successfully',
    data: inquiry,
  });
});

// @desc    Get all inquiries
// @route   GET /api/inquiry
// @access  Public
const getInquiries = asyncHandler(async (req, res) => {
  const inquiries = await Inquiry.find().sort({ createdAt: -1 });

  res.status(200).json({
    success: true,
    count: inquiries.length,
    data: inquiries,
  });
});

// @desc    Delete an inquiry
// @route   DELETE /api/inquiry/:id
// @access  Public
const deleteInquiry = asyncHandler(async (req, res) => {
  const inquiry = await Inquiry.findById(req.params.id);

  if (!inquiry) {
    res.status(404);
    throw new Error('Inquiry not found');
  }

  await inquiry.deleteOne();

  res.status(200).json({
    success: true,
    message: 'Inquiry deleted successfully',
    data: { id: req.params.id },
  });
});

module.exports = { createInquiry, getInquiries, deleteInquiry };
