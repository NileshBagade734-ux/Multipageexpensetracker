import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Plus, Edit2, Trash2, Calendar, RepeatIcon } from 'lucide-react';

export default function Recurring() {
  const [showAddModal, setShowAddModal] = useState(false);

  const recurringExpenses = [
    {
      id: 1,
      title: 'Netflix Subscription',
      category: 'Entertainment',
      icon: '🎬',
      color: 'bg-purple-100 dark:bg-purple-900/30',
      amount: 15.99,
      frequency: 'Monthly',
      startDate: 'Jan 1, 2026',
      endDate: 'Ongoing',
      nextDue: 'Feb 1, 2026',
      active: true,
    },
    {
      id: 2,
      title: 'Spotify Premium',
      category: 'Entertainment',
      icon: '🎵',
      color: 'bg-emerald-100 dark:bg-emerald-900/30',
      amount: 9.99,
      frequency: 'Monthly',
      startDate: 'Dec 15, 2025',
      endDate: 'Ongoing',
      nextDue: 'Jan 15, 2026',
      active: true,
    },
    {
      id: 3,
      title: 'Rent',
      category: 'Bills',
      icon: '🏠',
      color: 'bg-red-100 dark:bg-red-900/30',
      amount: 1200,
      frequency: 'Monthly',
      startDate: 'Jan 1, 2025',
      endDate: 'Dec 31, 2026',
      nextDue: 'Feb 1, 2026',
      active: true,
    },
    {
      id: 4,
      title: 'Gym Membership',
      category: 'Healthcare',
      icon: '💪',
      color: 'bg-teal-100 dark:bg-teal-900/30',
      amount: 45,
      frequency: 'Monthly',
      startDate: 'Jan 1, 2026',
      endDate: 'Jun 30, 2026',
      nextDue: 'Feb 1, 2026',
      active: true,
    },
    {
      id: 5,
      title: 'Cloud Storage',
      category: 'Bills',
      icon: '☁️',
      color: 'bg-indigo-100 dark:bg-indigo-900/30',
      amount: 2.99,
      frequency: 'Monthly',
      startDate: 'Nov 1, 2025',
      endDate: 'Ongoing',
      nextDue: 'Feb 1, 2026',
      active: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Recurring Expenses" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Active Subscriptions</div>
              <div className="text-3xl text-gray-900 dark:text-white">
                {recurringExpenses.filter((e) => e.active).length}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Monthly Total</div>
              <div className="text-3xl text-gray-900 dark:text-white">
                ${recurringExpenses
                  .filter((e) => e.active)
                  .reduce((sum, e) => sum + e.amount, 0)
                  .toFixed(2)}
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm">
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Next Due</div>
              <div className="text-3xl text-gray-900 dark:text-white">Feb 1</div>
            </div>
          </div>

          {/* Add Button */}
          <button 
            onClick={() => setShowAddModal(true)}
            className="w-full mb-6 py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <Plus className="w-5 h-5" />
            <span>Add Recurring Expense</span>
          </button>

          {/* Recurring Expenses List */}
          <div className="space-y-4">
            {recurringExpenses.map((expense) => (
              <div
                key={expense.id}
                className={`bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm ${
                  !expense.active && 'opacity-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 ${expense.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                    {expense.icon}
                  </div>

                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg text-gray-900 dark:text-white">{expense.title}</h3>
                      {!expense.active && (
                        <span className="px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-400 rounded-full">
                          Inactive
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <RepeatIcon className="w-4 h-4" />
                        <span>{expense.frequency}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>Next: {expense.nextDue}</span>
                      </div>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="text-right mr-4">
                    <div className="text-2xl text-red-600 dark:text-red-400">
                      ${expense.amount.toFixed(2)}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      per month
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                      <Edit2 className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                      <Trash2 className="w-5 h-5 text-red-500 dark:text-red-400" />
                    </button>
                  </div>
                </div>

                {/* Date Range */}
                <div className="mt-4 pt-4 border-t dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Start: {expense.startDate}</span>
                    <span>End: {expense.endDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Add Recurring Expense Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900">
              <h2 className="text-xl text-gray-900 dark:text-white">Add Recurring Expense</h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5 rotate-45 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Title
                </label>
                <input
                  type="text"
                  placeholder="e.g., Netflix"
                  className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>Entertainment</option>
                  <option>Bills</option>
                  <option>Healthcare</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Frequency
                </label>
                <select className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent">
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                    End Date (Optional)
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              <button className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors mt-6">
                Add Recurring Expense
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
