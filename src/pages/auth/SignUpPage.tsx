import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, RotateCw, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import side from '../../assets/3dpeo.png'; // Update path if needed
import Logo from '/src/assets/logo.png'; // Update path if needed

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState<'seller' | 'purchaser'>('purchaser');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState<string[]>([]);
  const { register, loading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get role from URL params if available
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get('role');
    if (roleParam && ['seller', 'purchaser'].includes(roleParam)) {
      setRole(roleParam as 'seller' | 'purchaser');
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    const errors = [];
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) errors.push('Email is required');
    if (!formData.email.includes('@')) errors.push('Email is invalid');
    if (formData.password.length < 6) errors.push('Password must be at least 6 characters');
    if (formData.password !== formData.confirmPassword) errors.push('Passwords do not match');
    setFormErrors(errors);
    return errors.length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) setStep(2);
  };

  const handlePrevStep = () => setStep(1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      handleNextStep();
      return;
    }
    try {
      await register(formData, role);
      if (role === 'seller') {
        navigate('/dashboardadmin');
      } else {
        navigate('/dashboarduser');
      }
    } catch (err) {
      // error handled by useAuth
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="flex w-full bg-primary-200 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:w-1/2">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="text-center">
            <Link to="/" className="inline-flex items-center">
              <div className="flex h-10 w-10 items-center justify-center ">
                <img src={Logo} alt="Logo" className="h-10 w-10" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">Tradiverse</span>
            </Link>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{' '}
              <Link to="/signin" className="font-medium text-primary-600 hover:text-primary-500">
                sign in to your existing account
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <div className="mb-6">
              <div className="flex justify-between space-x-2">
                <button
                  type="button"
                  onClick={() => setRole('purchaser')}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium ${
                    role === 'purchaser'
                      ? 'bg-primary-700 text-white'
                      : 'bg-gray-50 text-primary-700 hover:bg-gray-100'
                  }`}
                >
                  Purchaser
                </button>
                <button
                  type="button"
                  onClick={() => setRole('seller')}
                  className={`flex-1 rounded-md px-3 py-2 text-sm font-medium ${
                    role === 'seller'
                      ? 'bg-primary-700 text-white'
                      : 'bg-gray-50 text-primary-700 hover:bg-gray-100'
                  }`}
                >
                  Seller
                </button>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full 
                    ${step >= 1 ? 'bg-primary-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {step > 1 ? <CheckCircle2 size={16} /> : '1'}
                  </div>
                  <span className="mt-1 text-xs">Account</span>
                </div>
                <div className={`h-1 w-16 ${step > 1 ? 'bg-primary-700' : 'bg-gray-200'}`} />
                <div className="flex flex-col items-center">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full 
                    ${step >= 2 ? 'bg-primary-700 text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <span className="mt-1 text-xs">Finish</span>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-4 rounded-md bg-red-50 p-4 text-sm text-red-900">
                {error}
              </div>
            )}

            {formErrors.length > 0 && (
              <div className="mb-4 rounded-md bg-red-50 p-4">
                <h3 className="text-sm font-medium text-red-800">Please fix the following errors:</h3>
                <ul className="mt-2 list-disc pl-5 text-sm text-red-700">
                  {formErrors.map((err, index) => (
                    <li key={index}>{err}</li>
                  ))}
                </ul>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary-700">Name</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <User size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded pl-10"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary-700">Email</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded pl-10"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary-700">Password</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-primary-700">Confirm Password</label>
                    <div className="mt-1 relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Lock size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="password"
                        name="confirmPassword"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-2 border rounded pl-10"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-700 mb-2">
                      Welcome, {formData.name}!
                    </div>
                    <div className="text-primary-700 mb-4">
                      You are signing up as a <span className="font-semibold">{role.charAt(0).toUpperCase() + role.slice(1)}</span>.
                    </div>
                    <div className="text-sm text-gray-600">
                      Click "Sign Up" to complete your registration.
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="flex justify-between">
                {step === 2 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="btn btn-outline"
                  >
                    Back
                  </button>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className={`btn btn-primary ${step === 1 ? 'w-full' : 'ml-auto'}`}
                >
                  {loading ? (
                    <>
                      <RotateCw size={20} className="animate-spin mr-2" />
                      {step === 1 ? 'Next' : 'Sign Up'}
                    </>
                  ) : (
                    <>
                      {step === 1 ? 'Next' : 'Sign Up'}
                      <ArrowRight size={20} className="ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="relative hidden w-0 flex-1 xl:block">
        <motion.div
          className="absolute inset-0 h-full w-full bg-gradient-to-br from-primary-800 to-accent-800 opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1 }}
        ></motion.div>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={side}
          alt="People collaborating"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold">
              {role === 'seller'
                ? 'Start Selling Your Products'
                : 'Start Your Shopping Journey'}
            </h2>
            <p className="mt-4 max-w-xl text-lg text-white/80">
              {role === 'seller'
                ? 'Join our platform and reach more customers with your unique products.'
                : 'Discover amazing products and enjoy a seamless purchasing experience.'}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;