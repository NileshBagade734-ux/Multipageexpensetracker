import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Bell, TrendingUp, AlertCircle } from 'lucide-react';

export default function Notifications() {
  const settings = [
    {
      id: 1,
      title: 'Daily Expense Reminder',
      description: 'Get reminded to log your daily expenses every evening',
      icon: Bell,
      color: 'text-indigo-600 dark:text-indigo-400',
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      enabled: true,
    },
    {
      id: 2,
      title: 'Budget Exceeded Alert',
      description: 'Receive instant alerts when you exceed your category budgets',
      icon: AlertCircle,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-100 dark:bg-red-900/30',
      enabled: true,
    },
    {
      id: 3,
      title: 'Budget Warning (80%)',
      description: 'Get notified when you reach 80% of your budget',
      icon: AlertCircle,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-100 dark:bg-amber-900/30',
      enabled: true,
    },
    {
      id: 4,
      title: 'Monthly Summary',
      description: 'Receive a detailed summary of your expenses at the end of each month',
      icon: TrendingUp,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-100 dark:bg-emerald-900/30',
      enabled: true,
    },
    {
      id: 5,
      title: 'Recurring Payment Due',
      description: 'Get reminded 3 days before recurring payments are due',
      icon: Bell,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      enabled: false,
    },
    {
      id: 6,
      title: 'Weekly Insights',
      description: 'Receive AI-powered spending insights every week',
      icon: TrendingUp,
      color: 'text-pink-600 dark:text-pink-400',
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      enabled: false,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Notification Settings" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl">
            {/* Info Banner */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-6 mb-8">
              <div className="flex gap-3">
                <Bell className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg text-blue-900 dark:text-blue-100 mb-1">
                    Stay Updated
                  </h3>
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Customize your notification preferences to stay on top of your finances. 
                    You can enable or disable notifications at any time.
                  </p>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="space-y-4">
              {settings.map((setting) => {
                const Icon = setting.icon;
                return (
                  <div
                    key={setting.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 ${setting.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${setting.color}`} />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg text-gray-900 dark:text-white mb-1">
                          {setting.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {setting.description}
                        </p>
                      </div>

                      {/* Toggle Switch */}
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={setting.enabled}
                          className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Settings */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mt-8">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">
                Notification Channels
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900 dark:text-white">Email Notifications</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Receive notifications via email
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900 dark:text-white">Push Notifications</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Receive push notifications in the app
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-900 dark:text-white">SMS Notifications</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Receive notifications via SMS
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
