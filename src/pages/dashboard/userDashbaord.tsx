import React from 'react';
import Navbar from '../../components/layout/Navbar';

const forest = {
  base: 'from-green-50 via-green-100 to-green-200',
  block: 'bg-gradient-to-br from-green-100 to-green-200 border-l-8 border-green-700',
  accent: 'bg-green-700 text-white',
  text: 'text-green-900',
  shadow: 'shadow-xl',
};

const UserDashboard: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl space-y-10">
          <h2 className="text-4xl font-extrabold mb-6 text-green-900 text-center drop-shadow-lg">Purchaser Dashboard</h2>

          {/* Profile Overview */}
          <section className={`${forest.block} ${forest.shadow} rounded-xl p-6 flex items-center gap-6`}>
            <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-green-700 text-white text-3xl animate-bounce-slow">
              👤
            </div>
            <div>
              <h3 className="text-2xl font-bold text-green-800 mb-1">Profile Overview</h3>
              <div className="text-green-900 space-y-1">
                <p><span className="font-semibold">Name:</span> Kavya Rajoria</p>
                <p><span className="font-semibold">Email:</span> kavyarajoria9691@example.com</p>
                <p><span className="font-semibold">Role:</span> purchaser</p>
              </div>
            </div>
          </section>

          {/* Browse & Search Products */}
          <section className={`${forest.block} ${forest.shadow} rounded-xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔍</span>
              <h3 className="text-xl font-bold text-green-800">Browse & Search Products</h3>
            </div>
            <form className="flex gap-2 mb-2">
              <input
                className="border border-green-300 rounded px-3 py-2 w-full"
                type="text"
                placeholder="Search for products..."
              />
              <button className="bg-green-700 text-white rounded px-5 py-2 hover:bg-green-800 transition" type="submit">
                Search
              </button>
            </form>
            <div className="text-green-700 text-sm">Popular: Headphones, Shoes, Watches</div>
          </section>

          {/* Order History */}
          <section className={`${forest.block} ${forest.shadow} rounded-xl p-6`}>
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
          <section className={`${forest.block} ${forest.shadow} rounded-xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">❤️</span>
              <h3 className="text-xl font-bold text-green-800">Wishlist / Favorites</h3>
            </div>
            <ul className="flex gap-4">
              <li className="bg-white rounded shadow p-3 flex flex-col items-center w-32">
                <span className="text-3xl mb-2">⌚</span>
                <span className="font-medium text-green-700">Smart Watch</span>
                <button className="text-xs text-green-700 hover:underline mt-1">Remove</button>
              </li>
              <li className="bg-white rounded shadow p-3 flex flex-col items-center w-32">
                <span className="text-3xl mb-2">🎧</span>
                <span className="font-medium text-green-700">Headphones</span>
                <button className="text-xs text-green-700 hover:underline mt-1">Remove</button>
              </li>
            </ul>
          </section>

          {/* Messages with Sellers */}
          <section className={`${forest.block} ${forest.shadow} rounded-xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">💬</span>
              <h3 className="text-xl font-bold text-green-800">Messages with Sellers</h3>
            </div>
            <ul className="divide-y divide-green-200">
              <li className="py-3 flex justify-between items-center">
                <span>
                  <span className="font-semibold">Seller John:</span> Your order has shipped!
                </span>
                <button className="text-green-700 hover:underline">Reply</button>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span>
                  <span className="font-semibold">Seller Amy:</span> Can you confirm your address?
                </span>
                <button className="text-green-700 hover:underline">Reply</button>
              </li>
            </ul>
          </section>

          {/* Track Orders */}
          <section className={`${forest.block} ${forest.shadow} rounded-xl p-6`}>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🚚</span>
              <h3 className="text-xl font-bold text-green-800">Track Orders</h3>
            </div>
            <ul className="divide-y divide-green-200">
              <li className="py-3 flex justify-between items-center">
                <span>
                  <span className="font-semibold">Order #5678:</span> Out for delivery
                </span>
                <button className="bg-green-700 text-white rounded px-4 py-1 hover:bg-green-800 transition">Track</button>
              </li>
              <li className="py-3 flex justify-between items-center">
                <span>
                  <span className="font-semibold">Order #5679:</span> Delivered
                </span>
                <button className="bg-green-400 text-white rounded px-4 py-1 cursor-not-allowed" disabled>Delivered</button>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;