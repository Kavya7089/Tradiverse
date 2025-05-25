import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [role, setRole] = useState<'seller' | 'purchaser'>('purchaser');

  return (
    <div className="min-h-screen bg-primary-800 flex items-center justify-center pt-16">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-primary-700">Sign Up</h2>
        <div className="mb-4 flex space-x-2">
          <button
            className={`flex-1 py-2 rounded ${role === 'purchaser' ? 'bg-primary-700 text-white' : 'bg-neutral-100 text-primary-700'}`}
            onClick={() => setRole('purchaser')}
          >
            Purchaser
          </button>
          <button
            className={`flex-1 py-2 rounded ${role === 'seller' ? 'bg-primary-700 text-white' : 'bg-neutral-100 text-primary-700'}`}
            onClick={() => setRole('seller')}
          >
            Seller
          </button>
        </div>
        <form>
          <label className="block mb-2 text-sm font-medium text-primary-700">Name</label>
          <input type="text" className="w-full mb-4 p-2 border rounded" placeholder="Your Name" />
          <label className="block mb-2 text-sm font-medium text-primary-700">Email</label>
          <input type="email" className="w-full mb-4 p-2 border rounded" placeholder="you@example.com" />
          <label className="block mb-2 text-sm font-medium text-primary-700">Password</label>
          <input type="password" className="w-full mb-6 p-2 border rounded" placeholder="••••••••" />
          <button type="submit" className="w-full bg-primary-700 text-white py-2 rounded font-semibold hover:bg-primary-800 transition">
            Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
        <p className="mt-4 text-sm text-center">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary-700 font-semibold hover:underline">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;