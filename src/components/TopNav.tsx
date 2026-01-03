import { useState } from 'react';
import { Bell, ChevronDown, User } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface TopNavProps {
  title: string;
}

export default function TopNav({ title }: TopNavProps) {
  const { theme } = useTheme();
  const [selectedMonth, setSelectedMonth] = useState('January 2026');

  const months = [
    'January 2026',
    'December 2025',
    'November 2025',
    'October 2025',
    'September 2025',
  ];

  return (
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-800 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-gray-900 dark:text-white">{title}</h1>
        </div>
        <div className="flex items-center gap-4">
          {/* Month Selector */}
          <div className="relative">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="appearance-none bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-2 pr-10 rounded-lg border-0 focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              {months.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none" />
          </div>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-3 py-2 transition-colors">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-indigo-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">John Doe</span>
          </button>
        </div>
      </div>
    </div>
  );
}
