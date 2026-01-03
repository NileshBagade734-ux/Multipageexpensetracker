import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Edit2, Plus, AlertTriangle } from 'lucide-react';

export default function Budget() {
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [editingBudget, setEditingBudget] = useState(false);

  const categoryBudgets = [
    {
      id: 1,
      category: 'Food & Dining',
      icon: '🍔',
      color: 'bg-amber-100 dark:bg-amber-900/30',
      budgetAmount: 1500,
      spentAmount: 1250,
      percentage: 83,
    },
    {
      id: 2,
      category: 'Transportation',
      icon: '🚗',
      color: 'bg-indigo-100 dark:bg-indigo-900/30',
      budgetAmount: 1000,
      spentAmount: 850,
      percentage: 85,
    },
    {
      id: 3,
      category: 'Shopping',
      icon: '🛍️',
      color: 'bg-pink-100 dark:bg-pink-900/30',
      budgetAmount: 800,
      spentAmount: 620,
      percentage: 77.5,
    },
    {
      id: 4,
      category: 'Entertainment',
      icon: '🎬',
      color: 'bg-purple-100 dark:bg-purple-900/30',
      budgetAmount: 500,
      spentAmount: 380,
      percentage: 76,
    },
    {
      id: 5,
      category: 'Bills & Utilities',
      icon: '📄',
      color: 'bg-red-100 dark:bg-red-900/30',
      budgetAmount: 1200,
      spentAmount: 180,
      percentage: 15,
    },
  ];

  const totalSpent = categoryBudgets.reduce((sum, cat) => sum + cat.spentAmount, 0);
  const totalBudget = categoryBudgets.reduce((sum, cat) => sum + cat.budgetAmount, 0);
  const overallPercentage = (totalSpent / totalBudget) * 100;

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 80) return 'bg-amber-500';
    return 'bg-emerald-500';
  };

  const getProgressBgColor = (percentage: number) => {
    if (percentage >= 90) return 'bg-red-100 dark:bg-red-900/20';
    if (percentage >= 80) return 'bg-amber-100 dark:bg-amber-900/20';
    return 'bg-emerald-100 dark:bg-emerald-900/20';
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Budget" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          {/* Monthly Budget Card */}
          <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-8 text-white shadow-lg mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-sm opacity-90 mb-1">Monthly Budget</div>
                {editingBudget ? (
                  <input
                    type="number"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    onBlur={() => setEditingBudget(false)}
                    className="text-4xl bg-white/20 rounded-lg px-3 py-1 outline-none"
                    autoFocus
                  />
                ) : (
                  <div className="text-4xl">${monthlyBudget.toLocaleString()}</div>
                )}
              </div>
              <button
                onClick={() => setEditingBudget(true)}
                className="p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
              >
                <Edit2 className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Spent: ${totalSpent.toLocaleString()}</span>
                <span>Remaining: ${(totalBudget - totalSpent).toLocaleString()}</span>
              </div>
              <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-300"
                  style={{ width: `${Math.min(overallPercentage, 100)}%` }}
                />
              </div>
              <div className="text-sm opacity-90">
                {overallPercentage.toFixed(1)}% of total budget used
              </div>
            </div>
          </div>

          {/* Add Budget Button */}
          <button className="w-full mb-6 py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-2xl hover:border-emerald-500 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/10 transition-colors flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400">
            <Plus className="w-5 h-5" />
            <span>Add Category Budget</span>
          </button>

          {/* Category Budgets */}
          <div className="space-y-4">
            {categoryBudgets.map((budget) => (
              <div
                key={budget.id}
                className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${budget.color} rounded-lg flex items-center justify-center text-2xl flex-shrink-0`}>
                    {budget.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-white">{budget.category}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ${budget.spentAmount} of ${budget.budgetAmount}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm ${
                      budget.percentage >= 90 
                        ? 'text-red-600 dark:text-red-400' 
                        : budget.percentage >= 80 
                        ? 'text-amber-600 dark:text-amber-400' 
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {budget.percentage.toFixed(1)}%
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ${budget.budgetAmount - budget.spentAmount} left
                    </div>
                  </div>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Progress Bar */}
                <div className={`h-2.5 ${getProgressBgColor(budget.percentage)} rounded-full overflow-hidden`}>
                  <div
                    className={`h-full ${getProgressColor(budget.percentage)} transition-all duration-300`}
                    style={{ width: `${Math.min(budget.percentage, 100)}%` }}
                  />
                </div>

                {/* Warning */}
                {budget.percentage >= 80 && (
                  <div className="mt-3 flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span>
                      {budget.percentage >= 90 
                        ? 'Budget exceeded! Consider adjusting your spending.' 
                        : 'Approaching budget limit'}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
