import { useEffect, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { FiSearch, FiTrash2, FiUsers, FiCalendar, FiGlobe, FiBriefcase } from 'react-icons/fi';
import Loading from '../components/Loading.jsx';
import { fetchInquiries, deleteInquiry } from '../services/inquiryApi.js';

const isToday = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  return (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  );
};

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="card p-5 flex items-center gap-4">
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400">
      <Icon size={20} />
    </div>
    <div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [industryFilter, setIndustryFilter] = useState('All');
  const [deletingId, setDeletingId] = useState(null);

  const loadInquiries = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetchInquiries();
      setInquiries(res.data || []);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load inquiries. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInquiries();
  }, []);

  const industries = useMemo(() => {
    const set = new Set(inquiries.map((i) => i.industry).filter(Boolean));
    return ['All', ...Array.from(set)];
  }, [inquiries]);

  const stats = useMemo(() => {
    const countries = new Set(inquiries.map((i) => i.country).filter(Boolean));
    const industrySet = new Set(inquiries.map((i) => i.industry).filter(Boolean));
    const today = inquiries.filter((i) => isToday(i.createdAt)).length;
    return {
      total: inquiries.length,
      today,
      countries: countries.size,
      industries: industrySet.size,
    };
  }, [inquiries]);

  const filtered = useMemo(() => {
    return inquiries.filter((inquiry) => {
      const matchesIndustry = industryFilter === 'All' || inquiry.industry === industryFilter;
      const query = search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        [inquiry.fullName, inquiry.companyName, inquiry.email, inquiry.country]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(query));
      return matchesIndustry && matchesSearch;
    });
  }, [inquiries, search, industryFilter]);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this inquiry? This cannot be undone.')) return;
    setDeletingId(id);
    try {
      await deleteInquiry(id);
      setInquiries((prev) => prev.filter((i) => i._id !== id));
      toast.success('Inquiry deleted');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to delete inquiry');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container-app section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage product inquiries submitted from the landing page.
          </p>
        </div>
      </div>

      {loading ? (
        <Loading label="Loading inquiries..." />
      ) : error ? (
        <div className="card p-8 text-center">
          <p className="text-red-500 font-medium mb-4">{error}</p>
          <button
            onClick={loadInquiries}
            className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            Try again
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <StatCard icon={FiUsers} label="Total Inquiries" value={stats.total} />
            <StatCard icon={FiCalendar} label="Today's Inquiries" value={stats.today} />
            <StatCard icon={FiGlobe} label="Countries" value={stats.countries} />
            <StatCard icon={FiBriefcase} label="Industries" value={stats.industries} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search by name, company, email, or country..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="input-field pl-9"
              />
            </div>
            <select
              value={industryFilter}
              onChange={(e) => setIndustryFilter(e.target.value)}
              className="input-field sm:w-56"
            >
              {industries.map((industry) => (
                <option key={industry} value={industry}>
                  {industry === 'All' ? 'All Industries' : industry}
                </option>
              ))}
            </select>
          </div>

          <div className="card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800 text-left text-xs uppercase text-gray-500 dark:text-gray-400">
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Company</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Phone</th>
                  <th className="px-4 py-3 font-semibold">Country</th>
                  <th className="px-4 py-3 font-semibold">Industry</th>
                  <th className="px-4 py-3 font-semibold">Size</th>
                  <th className="px-4 py-3 font-semibold">Message</th>
                  <th className="px-4 py-3 font-semibold">Submitted</th>
                  <th className="px-4 py-3 font-semibold text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="px-4 py-10 text-center text-gray-500 dark:text-gray-400">
                      No inquiries found.
                    </td>
                  </tr>
                ) : (
                  filtered.map((inquiry) => (
                    <tr
                      key={inquiry._id}
                      className="border-b border-gray-100 dark:border-gray-800/60 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                    >
                      <td className="px-4 py-3 font-medium whitespace-nowrap">{inquiry.fullName}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{inquiry.companyName}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{inquiry.email}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{inquiry.phone}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{inquiry.country}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{inquiry.industry}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{inquiry.companySize}</td>
                      <td className="px-4 py-3 max-w-xs truncate" title={inquiry.message}>
                        {inquiry.message}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-gray-500 dark:text-gray-400">
                        {new Date(inquiry.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => handleDelete(inquiry._id)}
                          disabled={deletingId === inquiry._id}
                          aria-label="Delete inquiry"
                          className="inline-flex items-center justify-center h-8 w-8 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50"
                        >
                          <FiTrash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
