import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user) {
      // Redirect to role-specific dashboard
      switch (user.role) {
        case 'seller':
          navigate('/dashboardadmin');
          break;
        case 'purchaser':
          navigate('/dashboarduser');
          break;
        default:
          break;
      }
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mb-4"></div>
      <h2 className="text-2xl font-semibold text-primary-700">Redirecting to your dashboard...</h2>
      <p className="text-gray-500 mt-2">If you are not redirected, please check your login status.</p>
    </div>
  );
};

export default Dashboard;