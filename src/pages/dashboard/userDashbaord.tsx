import React from 'react';
import Navbar from '../../components/layout/Navbar';

const UserDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl space-y-10">
          <h2 className="text-3xl font-bold mb-6 text-primary-700 text-center">Purchaser Dashboard</h2>

          {/* Profile Overview */}
          <section className="bg-gradient-to-r from-primary-100 to-primary-200 rounded-xl p-6 flex items-center gap-6 shadow">
            <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-primary-600 text-white text-3xl">
            👤
          </div>
          <div>
            <h3 className="text-2xl font-bold text-primary-700 mb-1">Profile Overview</h3>
            <div className="text-primary-800 space-y-1">
              <p><span className="font-semibold">Name:</span> Jane Purchaser</p>
              <p><span className="font-semibold">Email:</span> janepurchaser@example.com</p>
              <p><span className="font-semibold">Role:</span> Purchaser</p>
            </div>
          </div>
        </section>

        {/* Browse & Search Products */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔍</span>
            <h3 className="text-xl font-bold text-blue-800">Browse & Search Products</h3>
          </div>
          <form className="flex gap-2 mb-2">
            <input
              className="border border-blue-300 rounded px-3 py-2 w-full"
              type="text"
              placeholder="Search for products..."
            />
            <button className="bg-blue-600 text-white rounded px-5 py-2 hover:bg-blue-700 transition" type="submit">
              Search
            </button>
          </form>
          <div className="text-blue-700 text-sm">Popular: Headphones, Shoes, Watches</div>
        </section>

        {/* Order History */}
        <section className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">📦</span>
            <h3 className="text-xl font-bold text-green-800">Order History</h3>
          </div>
          <ul className="divide-y divide-green-200">
            <li className="py-3 flex justify-between items-center">
              <span>Order #5678 - Headphones</span>
              <button className="text-green-700 hover:underline">View</button>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span>Order #5679 - Shoes</span>
              <button className="text-green-700 hover:underline">View</button>
            </li>
          </ul>
        </section>

        {/* Wishlist / Favorites */}
        <section className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">❤️</span>
            <h3 className="text-xl font-bold text-pink-800">Wishlist / Favorites</h3>
          </div>
          <ul className="flex gap-4">
            <li className="bg-white rounded shadow p-3 flex flex-col items-center w-32">
              <span className="text-3xl mb-2">⌚</span>
              <span className="font-medium text-pink-700">Smart Watch</span>
              <button className="text-xs text-pink-600 hover:underline mt-1">Remove</button>
            </li>
            <li className="bg-white rounded shadow p-3 flex flex-col items-center w-32">
              <span className="text-3xl mb-2">🎧</span>
              <span className="font-medium text-pink-700">Headphones</span>
              <button className="text-xs text-pink-600 hover:underline mt-1">Remove</button>
            </li>
          </ul>
        </section>

        {/* Messages with Sellers */}
        <section className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💬</span>
            <h3 className="text-xl font-bold text-yellow-800">Messages with Sellers</h3>
          </div>
          <ul className="divide-y divide-yellow-200">
            <li className="py-3 flex justify-between items-center">
              <span>
                <span className="font-semibold">Seller John:</span> Your order has shipped!
              </span>
              <button className="text-yellow-700 hover:underline">Reply</button>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span>
                <span className="font-semibold">Seller Amy:</span> Can you confirm your address?
              </span>
              <button className="text-yellow-700 hover:underline">Reply</button>
            </li>
          </ul>
        </section>

        {/* Track Orders */}
        <section className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 shadow">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🚚</span>
            <h3 className="text-xl font-bold text-purple-800">Track Orders</h3>
          </div>
          <ul className="divide-y divide-purple-200">
            <li className="py-3 flex justify-between items-center">
              <span>
                <span className="font-semibold">Order #5678:</span> Out for delivery
              </span>
              <button className="bg-purple-600 text-white rounded px-4 py-1 hover:bg-purple-700 transition">Track</button>
            </li>
            <li className="py-3 flex justify-between items-center">
              <span>
                <span className="font-semibold">Order #5679:</span> Delivered
              </span>
              <button className="bg-purple-400 text-white rounded px-4 py-1 cursor-not-allowed" disabled>Delivered</button>
            </li>
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default UserDashboard;