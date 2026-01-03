import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { useTheme } from './ThemeProvider';
import { User, Moon, Sun, Globe, Download, LogOut, ChevronRight } from 'lucide-react';

interface SettingsProps {
  onLogout: () => void;
}

export default function Settings({ onLogout }: SettingsProps) {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Settings" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl">
            {/* Profile Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Profile Information</h3>
              
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-xl text-gray-900 dark:text-white mb-1">John Doe</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</div>
                </div>
                <button className="px-4 py-2 border dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm text-gray-700 dark:text-gray-300">
                  Edit Profile
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Preferences</h3>
              
              <div className="space-y-4">
                {/* Theme Toggle */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    {theme === 'dark' ? (
                      <Moon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    ) : (
                      <Sun className="w-5 h-5 text-amber-600" />
                    )}
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">Theme</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {theme === 'dark' ? 'Dark mode' : 'Light mode'}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm text-gray-700 dark:text-gray-300"
                  >
                    Toggle
                  </button>
                </div>

                {/* Currency Selector */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">Currency</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        USD - US Dollar
                      </div>
                    </div>
                  </div>
                  <select className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border-0 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-emerald-500">
                    <option>USD - US Dollar</option>
                    <option>EUR - Euro</option>
                    <option>GBP - British Pound</option>
                    <option>INR - Indian Rupee</option>
                    <option>JPY - Japanese Yen</option>
                  </select>
                </div>

                {/* Date Format */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📅</span>
                    <div>
                      <div className="text-sm text-gray-900 dark:text-white">Date Format</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        MM/DD/YYYY
                      </div>
                    </div>
                  </div>
                  <select className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg border-0 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-emerald-500">
                    <option>MM/DD/YYYY</option>
                    <option>DD/MM/YYYY</option>
                    <option>YYYY-MM-DD</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Data & Privacy */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Data & Privacy</h3>
              
              <div className="space-y-2">
                <button 
                  onClick={() => navigate('/export')}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Download className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <div className="text-left">
                      <div className="text-sm text-gray-900 dark:text-white">Export Data</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Download your expense data
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🔒</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-900 dark:text-white">Privacy Settings</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Manage your privacy preferences
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🗑️</span>
                    <div className="text-left">
                      <div className="text-sm text-red-600 dark:text-red-400">Delete Account</div>
                      <div className="text-xs text-red-500 dark:text-red-400/80">
                        Permanently delete your account
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-red-400" />
                </button>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>

            {/* App Version */}
            <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              Expenso v1.0.0
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
