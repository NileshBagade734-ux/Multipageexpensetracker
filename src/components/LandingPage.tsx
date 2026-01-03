import { Link } from 'react-router-dom';
import { BarChart3, PieChart, Target, Sparkles, TrendingUp, Shield, Bell } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl text-gray-900">Expenso</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="px-6 py-2.5 text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2.5 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-sm"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-sm">
            Track your expenses smartly
          </div>
          <h1 className="text-5xl lg:text-6xl text-gray-900">
            Take Control of Your{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
              Finances
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expenso helps you track expenses, analyze spending patterns, and achieve your financial goals with intelligent insights and beautiful visualizations.
          </p>
          <div className="flex gap-4">
            <Link
              to="/signup"
              className="px-8 py-4 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Get Started Free
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-2xl p-6 border">
            <div className="flex gap-4 mb-6">
              <div className="flex-1 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-4 border border-emerald-200">
                <div className="text-sm text-emerald-700 mb-1">Total Balance</div>
                <div className="text-2xl text-emerald-900">$12,450</div>
                <div className="text-xs text-emerald-600 mt-1">+12.5% this month</div>
              </div>
              <div className="flex-1 bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                <div className="text-sm text-red-700 mb-1">Expenses</div>
                <div className="text-2xl text-red-900">$3,280</div>
                <div className="text-xs text-red-600 mt-1">-8.3% vs last month</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  🍔
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Food & Dining</div>
                  <div className="text-xs text-gray-500">Today, 2:30 PM</div>
                </div>
                <div className="text-red-600">-$45.00</div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  🚗
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Transportation</div>
                  <div className="text-xs text-gray-500">Yesterday, 9:15 AM</div>
                </div>
                <div className="text-red-600">-$28.50</div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  💰
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Salary</div>
                  <div className="text-xs text-gray-500">Jan 1, 2026</div>
                </div>
                <div className="text-emerald-600">+$4,500.00</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-xl text-gray-600">Powerful features to manage your money better</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Smart Expense Tracking</h3>
            <p className="text-gray-600">
              Easily record and categorize your expenses with our intuitive interface
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
              <PieChart className="w-6 h-6 text-indigo-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Visual Analytics</h3>
            <p className="text-gray-600">
              Beautiful charts and graphs to understand your spending patterns
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">Budget Control</h3>
            <p className="text-gray-600">
              Set budgets and get alerts when you're close to your limits
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl text-gray-900 mb-2">AI Insights</h3>
            <p className="text-gray-600">
              Get intelligent recommendations to save more and spend smarter
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Three simple steps to financial clarity</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                1
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Add Expenses</h3>
              <p className="text-gray-600">
                Quickly log your expenses with amount, category, and payment method
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                2
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Track & Analyze</h3>
              <p className="text-gray-600">
                View beautiful visualizations and insights about your spending habits
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                3
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Save More</h3>
              <p className="text-gray-600">
                Make informed decisions and achieve your financial goals faster
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-emerald-500 to-indigo-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl mb-4">Start Tracking Today</h2>
          <p className="text-xl mb-8 text-emerald-50">
            Join thousands of users who are taking control of their finances
          </p>
          <Link
            to="/signup"
            className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Create Free Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl text-gray-900">Expenso</span>
              </div>
              <p className="text-gray-600 text-sm">
                Track your expenses smartly and achieve your financial goals.
              </p>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600">Features</a></li>
                <li><a href="#" className="hover:text-emerald-600">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-600">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-emerald-600">About</a></li>
                <li><a href="#" className="hover:text-emerald-600">Contact</a></li>
                <li><a href="#" className="hover:text-emerald-600">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 mb-3">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                  <span className="text-sm">in</span>
                </a>
                <a href="#" className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors">
                  <span className="text-sm">fb</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-gray-600">
            © 2026 Expenso. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
