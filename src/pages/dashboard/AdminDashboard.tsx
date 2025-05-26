import React from 'react';
import Navbar from '../../components/layout/Navbar';

const AdminDashboard: React.FC = () => {
  return (
    <div className="bg-primary-50 min-h-screen">
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 pt-16 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl space-y-10">

          {/* Profile Overview */}
          <section className="rounded-xl shadow-lg p-6 flex items-center gap-6 bg-gradient-to-br from-primary-100 to-primary-300 border-l-8 border-primary-600">
            <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white text-3xl shadow">
              🧑‍💼
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary-700 mb-1">Profile Overview</h3>
              <div className="text-primary-800 space-y-1">
                <p><span className="font-semibold">Name:</span> John Seller</p>
                <p><span className="font-semibold">Email:</span> johnseller@example.com</p>
                <p><span className="font-semibold">Role:</span> Seller</p>
              </div>
            </div>
          </section>

          {/* Add New Product */}
          <section className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-green-50 to-green-200 border-l-8 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🆕</span>
              <h3 className="text-xl font-bold text-green-800">Add New Product</h3>
            </div>
            <form className="flex flex-col md:flex-row gap-4 items-center">
              <input className="border border-green-300 rounded px-3 py-2 w-full md:w-1/4" type="text" placeholder="Product Name" />
              <input className="border border-green-300 rounded px-3 py-2 w-full md:w-1/6" type="number" placeholder="Price" />
              <textarea className="border border-green-300 rounded px-3 py-2 w-full md:w-1/3" placeholder="Description" />
              <button className="bg-green-600 text-white rounded px-5 py-2 hover:bg-green-700 transition" type="submit">
                Add
              </button>
            </form>
          </section>

          {/* Manage Products */}
          <section className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-yellow-50 to-yellow-200 border-l-8 border-yellow-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📦</span>
              <h3 className="text-xl font-bold text-yellow-800">Manage Products</h3>
            </div>
            <ul className="divide-y divide-yellow-200">
              <li className="py-3 flex justify-between items-center">
                <span className="font-medium">Product 1</span>
                <div>
                  <button className="text-yellow-700 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span className="font-medium">Product 2</span>
                <div>
                  <button className="text-yellow-700 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </li>
            </ul>
          </section>

          {/* Order Requests */}
          <section className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-blue-50 to-blue-200 border-l-8 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">📝</span>
              <h3 className="text-xl font-bold text-blue-800">Order Requests</h3>
            </div>
            <ul className="divide-y divide-blue-200">
              <li className="py-3 flex justify-between items-center">
                <span>Order #1234 - Product 1</span>
                <button className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700 transition">View</button>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span>Order #1235 - Product 2</span>
                <button className="bg-blue-600 text-white rounded px-4 py-1 hover:bg-blue-700 transition">View</button>
              </li>
            </ul>
          </section>

          {/* Earnings Summary */}
          <section className="rounded-xl shadow-lg p-6 flex items-center justify-between bg-gradient-to-br from-purple-50 to-purple-200 border-l-8 border-purple-500">
            <div className="flex items-center gap-3">
              <span className="text-2xl">💰</span>
              <h3 className="text-xl font-bold text-purple-800">Earnings Summary</h3>
            </div>
            <span className="font-extrabold text-2xl text-purple-700">$2,500</span>
          </section>

          {/* Customer Reviews */}
          <section className="rounded-xl shadow-lg p-6 bg-gradient-to-br from-pink-50 to-pink-200 border-l-8 border-pink-400">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">⭐</span>
              <h3 className="text-xl font-bold text-pink-800">Customer Reviews</h3>
            </div>
            <ul className="divide-y divide-pink-200">
              <li className="py-3">
                <span className="font-semibold">Jane Doe:</span> <span className="italic">Great product, fast shipping!</span>
              </li>
              <li className="py-3">
                <span className="font-semibold">Bob Smith:</span> <span className="italic">Excellent quality, will buy again.</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;