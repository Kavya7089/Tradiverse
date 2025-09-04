import React from 'react';
import Navbar from '../../components/layout/Navbar';

const forest = {
  base: 'from-green-50 via-green-100 to-green-200',
  block: 'bg-gradient-to-br from-green-100 to-green-200 border-l-8 border-green-700',
  accent: 'bg-green-700 text-white',
  text: 'text-green-900',
  shadow: 'shadow-xl',
};

const AdminDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center">
        <div className="w-full max-w-5xl space-y-10">
          {/* Header */}
          <div className="text-center mb-2">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 drop-shadow-lg tracking-tight">
              Seller Dashboard
            </h1>
            <p className="text-lg text-green-700 mt-2">Manage your products, orders, and earnings at a glance.</p>
          </div>

          {/* Profile Overview */}
          <section className={`${forest.block} ${forest.shadow} rounded-2xl p-6 flex items-center gap-6`}>
            <div className="flex-shrink-0 flex items-center justify-center h-20 w-20 rounded-full bg-green-700 text-white text-4xl shadow-lg animate-bounce-slow">
              🧑‍💼
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-1">Profile Overview</h3>
              <div className="text-green-900 space-y-1">
                <p><span className="font-semibold">Name:</span>Kavya Rajoria</p>
                <p><span className="font-semibold">Email:</span> kavyarajoria9691@example.com</p>
                <p><span className="font-semibold">Role:</span> Seller</p>
              </div>
            </div>
          </section>

          {/* Add New Product */}
          <section className={`${forest.block} ${forest.shadow} rounded-2xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl animate-pulse">🆕</span>
              <h3 className="text-xl font-bold text-green-800">Add New Product</h3>
            </div>
            <form className="flex flex-col md:flex-row gap-4 items-center">
              <input className="border border-green-300 rounded px-3 py-2 w-full md:w-1/4" type="text" placeholder="Product Name" />
              <input className="border border-green-300 rounded px-3 py-2 w-full md:w-1/6" type="number" placeholder="Price" />
              <textarea className="border border-green-300 rounded px-3 py-2 w-full md:w-1/3" placeholder="Description" />
              <button className="bg-green-700 text-white rounded px-5 py-2 hover:bg-green-800 transition" type="submit">
                Add
              </button>
            </form>
          </section>

          {/* Manage Products */}
          <section className={`${forest.block} ${forest.shadow} rounded-2xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📦</span>
              <h3 className="text-xl font-bold text-green-800">Manage Products</h3>
            </div>
            <ul className="divide-y divide-green-200">
              <li className="py-3 flex justify-between items-center">
                <span className="font-medium">Product 1</span>
                <div>
                  <button className="text-green-700 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span className="font-medium">Product 2</span>
                <div>
                  <button className="text-green-700 hover:underline mr-3">Edit</button>
                  <button className="text-red-600 hover:underline">Delete</button>
                </div>
              </li>
            </ul>
          </section>

          {/* Order Requests */}
          <section className={`${forest.block} ${forest.shadow} rounded-2xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">📝</span>
              <h3 className="text-xl font-bold text-green-800">Order Requests</h3>
            </div>
            <ul className="divide-y divide-green-200">
              <li className="py-3 flex justify-between items-center">
                <span>Order #1234 - Product 1</span>
                <button className="bg-green-700 text-white rounded px-4 py-1 hover:bg-green-800 transition">View</button>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span>Order #1235 - Product 2</span>
                <button className="bg-green-700 text-white rounded px-4 py-1 hover:bg-green-800 transition">View</button>
              </li>
            </ul>
          </section>

          {/* Earnings Summary */}
          <section className={`${forest.block} ${forest.shadow} rounded-2xl p-6 flex items-center justify-between`}>
            <div className="flex items-center gap-3">
              <span className="text-3xl">💰</span>
              <h3 className="text-xl font-bold text-green-800">Earnings Summary</h3>
            </div>
            <span className="font-extrabold text-2xl text-green-700">$2,500</span>
          </section>

          {/* Customer Reviews */}
          <section className={`${forest.block} ${forest.shadow} rounded-2xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⭐</span>
              <h3 className="text-xl font-bold text-green-800">Customer Reviews</h3>
            </div>
            <ul className="divide-y divide-green-200">
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
    </>
  );
};

export default AdminDashboard;