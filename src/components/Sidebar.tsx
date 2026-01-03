import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Receipt,
  TrendingUp,
  Target,
  FolderOpen,
  RepeatIcon,
  Bell,
  Settings,
  BarChart3,
  FileDown,
} from 'lucide-react';

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
    { icon: Receipt, label: 'Transactions', path: '/transactions' },
    { icon: TrendingUp, label: 'Analytics', path: '/analytics' },
    { icon: Target, label: 'Budget', path: '/budget' },
    { icon: FolderOpen, label: 'Categories', path: '/categories' },
    { icon: RepeatIcon, label: 'Recurring', path: '/recurring' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: FileDown, label: 'Export', path: '/export' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 h-screen sticky top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b dark:border-gray-800">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-xl text-gray-900 dark:text-white">Expenso</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Track smartly</div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
