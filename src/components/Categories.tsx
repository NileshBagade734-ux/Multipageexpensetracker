import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Plus, Edit2, Trash2, MoreVertical } from 'lucide-react';

export default function Categories() {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const categories = [
    {
      id: 1,
      name: 'Food & Dining',
      icon: '🍔',
      color: '#F59E0B',
      transactionCount: 24,
      totalAmount: 1250,
    },
    {
      id: 2,
      name: 'Transportation',
      icon: '🚗',
      color: '#6366F1',
      transactionCount: 18,
      totalAmount: 850,
    },
    {
      id: 3,
      name: 'Shopping',
      icon: '🛍️',
      color: '#EC4899',
      transactionCount: 12,
      totalAmount: 620,
    },
    {
      id: 4,
      name: 'Entertainment',
      icon: '🎬',
      color: '#8B5CF6',
      transactionCount: 8,
      totalAmount: 380,
    },
    {
      id: 5,
      name: 'Bills & Utilities',
      icon: '📄',
      color: '#EF4444',
      transactionCount: 6,
      totalAmount: 180,
    },
    {
      id: 6,
      name: 'Healthcare',
      icon: '🏥',
      color: '#14B8A6',
      transactionCount: 4,
      totalAmount: 320,
    },
    {
      id: 7,
      name: 'Education',
      icon: '📚',
      color: '#3B82F6',
      transactionCount: 3,
      totalAmount: 450,
    },
    {
      id: 8,
      name: 'Travel',
      icon: '✈️',
      color: '#06B6D4',
      transactionCount: 2,
      totalAmount: 890,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Categories" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Add Category Button */}
          <button 
            onClick={() => setShowAddModal(true)}
            className="w-full mb-8 py-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400"
          >
            <Plus className="w-6 h-6" />
            <span className="text-lg">Add New Category</span>
          </button>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    {category.icon}
                  </div>
                  
                  <div className="relative">
                    <button
                      onClick={() => setActiveMenu(activeMenu === category.id ? null : category.id)}
                      className="p-2 opacity-0 group-hover:opacity-100 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    </button>
                    
                    {activeMenu === category.id && (
                      <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-lg shadow-lg z-10">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center gap-2 rounded-t-lg">
                          <Edit2 className="w-4 h-4" />
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

                <h3 className="text-lg text-gray-900 dark:text-white mb-2">{category.name}</h3>
                
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Transactions</span>
                    <span className="text-gray-900 dark:text-white">{category.transactionCount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Total Spent</span>
                    <span 
                      className="text-gray-900 dark:text-white"
                      style={{ color: category.color }}
                    >
                      ${category.totalAmount}
                    </span>
                  </div>
                </div>

                {/* Color Indicator */}
                <div className="mt-4 pt-4 border-t dark:border-gray-800">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Category Color
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Add Category Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full">
            <div className="flex items-center justify-between p-6 border-b dark:border-gray-800">
              <h2 className="text-xl text-gray-900 dark:text-white">Add New Category</h2>
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
                  Category Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Groceries"
                  className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Icon (Emoji)
                </label>
                <input
                  type="text"
                  placeholder="🏪"
                  className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-2xl"
                  maxLength={2}
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                  Color
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {['#F59E0B', '#6366F1', '#EC4899', '#8B5CF6', '#EF4444', '#14B8A6', '#3B82F6', '#06B6D4', '#10B981', '#F97316', '#84CC16', '#A855F7'].map((color) => (
                    <button
                      key={color}
                      className="w-10 h-10 rounded-lg border-2 border-transparent hover:border-gray-400 dark:hover:border-gray-600 transition-colors"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <button className="w-full py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors mt-6">
                Create Category
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
