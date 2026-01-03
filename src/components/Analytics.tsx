import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle } from 'lucide-react';

export default function Analytics() {
  const [dateRange, setDateRange] = useState('month');

  const categoryData = [
    { name: 'Food & Dining', value: 1250, color: '#F59E0B' },
    { name: 'Transportation', value: 850, color: '#6366F1' },
    { name: 'Shopping', value: 620, color: '#EC4899' },
    { name: 'Entertainment', value: 380, color: '#8B5CF6' },
    { name: 'Bills', value: 180, color: '#EF4444' },
  ];

  const monthlyComparison = [
    { month: 'Aug', expenses: 2800, income: 4500 },
    { month: 'Sep', expenses: 3200, income: 4500 },
    { month: 'Oct', expenses: 2900, income: 4800 },
    { month: 'Nov', expenses: 3100, income: 4500 },
    { month: 'Dec', expenses: 2700, income: 5200 },
    { month: 'Jan', expenses: 3280, income: 4500 },
  ];

  const trendData = [
    { date: 'Week 1', amount: 650 },
    { date: 'Week 2', amount: 820 },
    { date: 'Week 3', amount: 910 },
    { date: 'Week 4', amount: 900 },
  ];

  const insights = [
    {
      id: 1,
      type: 'warning',
      icon: AlertCircle,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      message: 'You spent 25% more on Food & Dining this month compared to last month',
    },
    {
      id: 2,
      type: 'success',
      icon: CheckCircle,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      message: 'Your savings improved by 12% compared to last month. Great job!',
    },
    {
      id: 3,
      type: 'info',
      icon: TrendingDown,
      color: 'text-indigo-600 dark:text-indigo-400',
      bg: 'bg-indigo-50 dark:bg-indigo-900/20',
      message: 'Transportation costs decreased by 15% this month',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Analytics" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Date Range Selector */}
          <div className="flex gap-2 mb-6">
            {['week', 'month', 'year'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-6 py-2.5 rounded-lg transition-colors ${
                  dateRange === range
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {range.charAt(0).toUpperCase() + range.slice(1)}
              </button>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Category Distribution Pie Chart */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Expense Distribution</h3>
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
              
              {/* Legend */}
              <div className="mt-6 space-y-2">
                {categoryData.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{category.name}</span>
                    </div>
                    <span className="text-sm text-gray-900 dark:text-white">${category.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Monthly Comparison Bar Chart */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Income vs Expenses</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: '#1f2937',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="income" fill="#10B981" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="expenses" fill="#EF4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trend Line Chart */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
            <h3 className="text-lg text-gray-900 dark:text-white mb-6">Spending Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.1} />
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: 'none',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#10B981"
                  strokeWidth={3}
                  dot={{ fill: '#10B981', r: 6 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Insights Section */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
            <h3 className="text-lg text-gray-900 dark:text-white mb-6">AI Insights</h3>
            <div className="space-y-4">
              {insights.map((insight) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={insight.id}
                    className={`flex gap-4 p-4 rounded-lg ${insight.bg}`}
                  >
                    <div className={`flex-shrink-0 ${insight.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{insight.message}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
