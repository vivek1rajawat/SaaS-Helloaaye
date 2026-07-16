import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export const submitInquiry = async (payload) => {
  const { data } = await api.post('/inquiry', payload);
  return data;
};

export const fetchInquiries = async () => {
  const { data } = await api.get('/inquiry');
  return data;
};

export const deleteInquiry = async (id) => {
  const { data } = await api.delete(`/inquiry/${id}`);
  return data;
};

export default api;
