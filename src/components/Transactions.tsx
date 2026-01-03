import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import AddExpenseModal from './AddExpenseModal';
import { Plus, Search, Filter, MoreVertical, Edit, Trash2 } from 'lucide-react';

export default function Transactions() {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const transactions = [
    {
      id: 1,
      title: 'Grocery Shopping',
      category: 'Food & Dining',
      date: 'Jan 3, 2026',
      time: '2:30 PM',
      amount: -45.00,
      icon: '🍔',
      color: 'bg-amber-100 dark:bg-amber-900/30',
      paymentMethod: 'Card',
    },
    {
      id: 2,
      title: 'Uber Ride',
      category: 'Transportation',
      date: 'Jan 3, 2026',
      time: '9:15 AM',
      amount: -28.50,
      icon: '🚗',
      color: 'bg-indigo-100 dark:bg-indigo-900/30',
      paymentMethod: 'UPI',
    },
    {
      id: 3,
      title: 'Monthly Salary',
      category: 'Income',
      date: 'Jan 1, 2026',
      time: '12:00 AM',
      amount: 4500.00,
      icon: '💰',
      color: 'bg-emerald-100 dark:bg-emerald-900/30',
      paymentMethod: 'Bank',
    },
    {
      id: 4,
      title: 'Netflix Subscription',
      category: 'Entertainment',
      date: 'Jan 2, 2026',
      time: '6:00 PM',
      amount: -15.99,
      icon: '🎬',
      color: 'bg-purple-100 dark:bg-purple-900/30',
      paymentMethod: 'Card',
    },
    {
      id: 5,
      title: 'New Shoes',
      category: 'Shopping',
      date: 'Jan 2, 2026',
      time: '3:20 PM',
      amount: -89.99,
      icon: '👟',
      color: 'bg-pink-100 dark:bg-pink-900/30',
      paymentMethod: 'Card',
    },
    {
      id: 6,
      title: 'Electricity Bill',
      category: 'Bills',
      date: 'Jan 1, 2026',
      time: '10:30 AM',
      amount: -120.00,
      icon: '⚡',
      color: 'bg-yellow-100 dark:bg-yellow-900/30',
      paymentMethod: 'Bank',
    },
    {
      id: 7,
      title: 'Coffee Shop',
      category: 'Food & Dining',
      date: 'Dec 31, 2025',
      time: '4:15 PM',
      amount: -8.50,
      icon: '☕',
      color: 'bg-amber-100 dark:bg-amber-900/30',
      paymentMethod: 'Cash',
    },
    {
      id: 8,
      title: 'Freelance Project',
      category: 'Income',
      date: 'Dec 30, 2025',
      time: '2:00 PM',
      amount: 800.00,
      icon: '💼',
      color: 'bg-emerald-100 dark:bg-emerald-900/30',
      paymentMethod: 'Bank',
    },
  ];

  const filteredTransactions = transactions.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Transactions" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search transactions..."
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent dark:text-white"
              />
            </div>
            <button
              onClick={() => setShowFilterMenu(!showFilterMenu)}
              className="px-6 py-3 bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2 text-gray-700 dark:text-gray-300"
            >
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>

          {/* Transactions List */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl border dark:border-gray-800 shadow-sm overflow-hidden">
            <div className="divide-y dark:divide-gray-800">
              {filteredTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  {/* Icon */}
                  <div className={`w-12 h-12 ${transaction.color} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                    {transaction.icon}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-gray-900 dark:text-white truncate">{transaction.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {transaction.category} • {transaction.date} at {transaction.time}
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="hidden md:block">
                    <div className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-700 dark:text-gray-300 rounded-full">
                      {transaction.paymentMethod}
                    </div>
                  </div>

                  {/* Amount */}
                  <div className={`min-w-[100px] text-right ${
                    transaction.amount > 0 
                      ? 'text-emerald-600 dark:text-emerald-400' 
                      : 'text-red-600 dark:text-red-400'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                  </div>

                  {/* Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setActiveMenu(activeMenu === transaction.id ? null : transaction.id)}
                      className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    
                    {activeMenu === transaction.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 rounded-t-lg">
                          <Edit className="w-4 h-4" />
                          Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2 rounded-b-lg">
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {filteredTransactions.length === 0 && (
              <div className="p-12 text-center text-gray-500 dark:text-gray-400">
                No transactions found
              </div>
            )}
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

      {showAddExpense && <AddExpenseModal onClose={() => setShowAddExpense(false)} />}
    </div>
  );
}
