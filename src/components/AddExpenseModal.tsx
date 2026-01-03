import { useState } from 'react';
import { X, DollarSign, Calendar } from 'lucide-react';

interface AddExpenseModalProps {
  onClose: () => void;
}

export default function AddExpenseModal({ onClose }: AddExpenseModalProps) {
  const [type, setType] = useState<'expense' | 'income'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [notes, setNotes] = useState('');

  const expenseCategories = [
    { value: 'food', label: 'Food & Dining', icon: '🍔' },
    { value: 'transport', label: 'Transportation', icon: '🚗' },
    { value: 'shopping', label: 'Shopping', icon: '🛍️' },
    { value: 'entertainment', label: 'Entertainment', icon: '🎬' },
    { value: 'bills', label: 'Bills & Utilities', icon: '📄' },
    { value: 'health', label: 'Healthcare', icon: '🏥' },
  ];

  const incomeCategories = [
    { value: 'salary', label: 'Salary', icon: '💰' },
    { value: 'freelance', label: 'Freelance', icon: '💼' },
    { value: 'investment', label: 'Investment', icon: '📈' },
    { value: 'other', label: 'Other Income', icon: '💵' },
  ];

  const paymentMethods = ['Cash', 'UPI', 'Card', 'Bank Transfer'];

  const categories = type === 'expense' ? expenseCategories : incomeCategories;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ type, amount, category, date, paymentMethod, notes });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b dark:border-gray-800 sticky top-0 bg-white dark:bg-gray-900 z-10">
          <h2 className="text-xl text-gray-900 dark:text-white">Add Transaction</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Type Toggle */}
          <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              type="button"
              onClick={() => setType('expense')}
              className={`flex-1 py-2.5 rounded-lg transition-colors ${
                type === 'expense'
                  ? 'bg-red-500 text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setType('income')}
              className={`flex-1 py-2.5 rounded-lg transition-colors ${
                type === 'income'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              Income
            </button>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Amount</label>
            <div className="relative">
              <DollarSign className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                step="0.01"
                className="w-full pl-10 pr-4 py-4 text-2xl border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Category</label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value)}
                  className={`flex items-center gap-2 p-3 border dark:border-gray-700 rounded-lg transition-colors ${
                    category === cat.value
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span className="text-sm text-gray-900 dark:text-white">{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Date</label>
            <div className="relative">
              <Calendar className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Payment Method</label>
            <div className="flex gap-2">
              {paymentMethods.map((method) => (
                <button
                  key={method}
                  type="button"
                  onClick={() => setPaymentMethod(method)}
                  className={`flex-1 py-2.5 px-3 border dark:border-gray-700 rounded-lg text-sm transition-colors ${
                    paymentMethod === method
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add a note..."
              rows={3}
              className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
          >
            Save Transaction
          </button>
        </form>
      </div>
    </div>
  );
}
