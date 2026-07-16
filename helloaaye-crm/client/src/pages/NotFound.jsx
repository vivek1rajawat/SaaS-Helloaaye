import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi';
import Button from '../components/Button.jsx';

const NotFound = () => {
  return (
    <div className="container-app flex flex-col items-center justify-center text-center py-24">
      <FiAlertTriangle size={48} className="text-primary-600 dark:text-primary-400 mb-6" />
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="mt-8">
        <Button size="lg">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
