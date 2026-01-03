import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import AddExpenseModal from './AddExpenseModal';
import { Plus, TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function Dashboard() {
  const [showAddExpense, setShowAddExpense] = useState(false);

  // Mock data for charts
  const categoryData = [
    { name: 'Food & Dining', value: 1250, color: '#F59E0B' },
    { name: 'Transportation', value: 850, color: '#6366F1' },
    { name: 'Shopping', value: 620, color: '#EC4899' },
    { name: 'Entertainment', value: 380, color: '#8B5CF6' },
    { name: 'Bills', value: 180, color: '#EF4444' },
  ];

  const monthlyData = [
    { month: 'Aug', expenses: 2800, income: 4500 },
    { month: 'Sep', expenses: 3200, income: 4500 },
    { month: 'Oct', expenses: 2900, income: 4800 },
    { month: 'Nov', expenses: 3100, income: 4500 },
    { month: 'Dec', expenses: 2700, income: 5200 },
    { month: 'Jan', expenses: 3280, income: 4500 },
  ];

  const recentTransactions = [
    {
      id: 1,
      title: 'Grocery Shopping',
      category: 'Food & Dining',
      date: 'Today, 2:30 PM',
      amount: -45.00,
      icon: '🍔',
      color: 'bg-amber-100',
    },
    {
      id: 2,
      title: 'Uber Ride',
      category: 'Transportation',
      date: 'Today, 9:15 AM',
      amount: -28.50,
      icon: '🚗',
      color: 'bg-indigo-100',
    },
    {
      id: 3,
      title: 'Monthly Salary',
      category: 'Income',
      date: 'Jan 1, 2026',
      amount: 4500.00,
      icon: '💰',
      color: 'bg-emerald-100',
    },
    {
      id: 4,
      title: 'Netflix Subscription',
      category: 'Entertainment',
      date: 'Yesterday, 6:00 PM',
      amount: -15.99,
      icon: '🎬',
      color: 'bg-purple-100',
    },
    {
      id: 5,
      title: 'New Shoes',
      category: 'Shopping',
      date: 'Yesterday, 3:20 PM',
      amount: -89.99,
      icon: '👟',
      color: 'bg-pink-100',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Dashboard" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Balance */}
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm opacity-90">Total Balance</div>
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl mb-2">$12,450.00</div>
              <div className="flex items-center gap-1 text-sm opacity-90">
                <ArrowUpRight className="w-4 h-4" />
                <span>+12.5% from last month</span>
              </div>
            </div>

            {/* Total Income */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Income</div>
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
              </div>
              <div className="text-3xl text-gray-900 dark:text-white mb-2">$4,500.00</div>
              <div className="flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400">
                <ArrowUpRight className="w-4 h-4" />
                <span>+8.2% from last month</span>
              </div>
            </div>

            {/* Total Expenses */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</div>
                <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-red-600 dark:text-red-400" />
                </div>
              </div>
              <div className="text-3xl text-gray-900 dark:text-white mb-2">$3,280.00</div>
              <div className="flex items-center gap-1 text-sm text-red-600 dark:text-red-400">
                <ArrowDownRight className="w-4 h-4" />
                <span>-8.3% from last month</span>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Pie Chart - Category Distribution */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Expenses by Category</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Bar Chart - Monthly Comparison */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Monthly Overview</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="income" fill="#10B981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="expenses" fill="#EF4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white">Recent Transactions</h3>
              <a href="/transactions" className="text-sm text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
                View All
              </a>
            </div>
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <div className={`w-12 h-12 ${transaction.color} rounded-lg flex items-center justify-center text-2xl`}>
                    {transaction.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-white">{transaction.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{transaction.date}</div>
                  </div>
                  <div className={`${transaction.amount > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'}`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddExpense(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
      >
        <Plus className="w-6 h-6" />
      </button>

      {/* Add Expense Modal */}
      {showAddExpense && (
        <AddExpenseModal onClose={() => setShowAddExpense(false)} />
      )}
    </div>
  );
}
