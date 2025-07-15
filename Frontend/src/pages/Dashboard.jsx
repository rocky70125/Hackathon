// src/pages/Dashboard.js
import React, { useState } from 'react';
import {
  BsPerson,
  BsGraphUp,
  BsBoxArrowRight,
  BsBell,
  BsMoon,
  BsSun
} from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const sampleData = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 300 },
  { name: 'Wed', uv: 500 },
  { name: 'Thu', uv: 200 },
  { name: 'Fri', uv: 700 },
  { name: 'Sat', uv: 600 },
  { name: 'Sun', uv: 800 },
];

function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition">
        {/* Sidebar */}
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg transition">
          <div className="p-6 text-indigo-600 font-bold text-2xl dark:text-white border-b border-gray-200 dark:border-gray-700">
            MyDashboard
          </div>
          <nav className="mt-4 space-y-2 px-4 text-gray-700 dark:text-gray-200">
            <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700">
              <BsGraphUp /> <span>Overview</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700">
              <BsPerson /> <span>Profile</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-indigo-100 dark:hover:bg-indigo-700">
              <BsBell /> <span>Notifications</span>
            </a>
            <a href="#" className="flex items-center space-x-2 px-3 py-2 rounded text-red-600 hover:bg-red-100 dark:hover:bg-red-800">
              <BsBoxArrowRight /> <span>Logout</span>
            </a>
          </nav>
        </aside>

        {/* Main */}
        <main className="flex-1 p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold">Welcome back, John 👋</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Here’s what’s happening with your account today.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                {darkMode ? <BsSun /> : <BsMoon />}
              </button>

              <div className="relative">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="User avatar"
                  className="w-10 h-10 rounded-full cursor-pointer border"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded shadow-lg z-50">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">Hello, John</div>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Account Settings</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-sm text-gray-500 dark:text-gray-400">Revenue</h2>
              <p className="text-2xl font-semibold text-indigo-600">$21,400</p>
              <p className="text-xs text-green-600 mt-1">▲ +5.2% since last month</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-sm text-gray-500 dark:text-gray-400">Users</h2>
              <p className="text-2xl font-semibold text-indigo-600">1,250</p>
              <p className="text-xs text-green-600 mt-1">▲ +2.4% since last week</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
              <h2 className="text-sm text-gray-500 dark:text-gray-400">New Orders</h2>
              <p className="text-2xl font-semibold text-indigo-600">342</p>
              <p className="text-xs text-red-600 mt-1">▼ -1.8% since yesterday</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Weekly Performance</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={sampleData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#6366f1" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
