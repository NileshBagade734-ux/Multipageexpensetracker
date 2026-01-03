import { useState } from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Download, FileText, FileSpreadsheet, Cloud, Calendar } from 'lucide-react';

export default function ExportPage() {
  const [startDate, setStartDate] = useState('2026-01-01');
  const [endDate, setEndDate] = useState('2026-01-31');
  const [exportFormat, setExportFormat] = useState<'pdf' | 'csv' | 'excel'>('pdf');
  const [cloudBackup, setCloudBackup] = useState(false);

  const handleExport = () => {
    // Simulate export
    alert(`Exporting data from ${startDate} to ${endDate} as ${exportFormat.toUpperCase()}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopNav title="Export & Backup" />
        
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-3xl mx-auto">
            {/* Info Banner */}
            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6 mb-8">
              <div className="flex gap-3">
                <Download className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg text-indigo-900 dark:text-indigo-100 mb-1">
                    Export Your Data
                  </h3>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300">
                    Download your expense data in various formats or enable cloud backup for automatic syncing.
                  </p>
                </div>
              </div>
            </div>

            {/* Date Range Selection */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Select Date Range
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full px-4 py-3 border dark:border-gray-700 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Quick Date Presets */}
              <div className="mt-4 flex flex-wrap gap-2">
                <button 
                  onClick={() => {
                    const today = new Date();
                    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
                    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);
                    setStartDate(lastMonth.toISOString().split('T')[0]);
                    setEndDate(lastMonthEnd.toISOString().split('T')[0]);
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Last Month
                </button>
                <button 
                  onClick={() => {
                    const today = new Date();
                    const threeMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 3, 1);
                    setStartDate(threeMonthsAgo.toISOString().split('T')[0]);
                    setEndDate(today.toISOString().split('T')[0]);
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  Last 3 Months
                </button>
                <button 
                  onClick={() => {
                    const today = new Date();
                    const yearStart = new Date(today.getFullYear(), 0, 1);
                    setStartDate(yearStart.toISOString().split('T')[0]);
                    setEndDate(today.toISOString().split('T')[0]);
                  }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  This Year
                </button>
              </div>
            </div>

            {/* Export Format Selection */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Export Format</h3>
              
              <div className="space-y-3">
                {/* PDF Option */}
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    exportFormat === 'pdf'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="format"
                    value="pdf"
                    checked={exportFormat === 'pdf'}
                    onChange={(e) => setExportFormat(e.target.value as 'pdf')}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500"
                  />
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-white">PDF Document</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Detailed report with charts and graphs
                    </div>
                  </div>
                </label>

                {/* CSV Option */}
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    exportFormat === 'csv'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="format"
                    value="csv"
                    checked={exportFormat === 'csv'}
                    onChange={(e) => setExportFormat(e.target.value as 'csv')}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500"
                  />
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-white">CSV File</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Raw data for spreadsheet applications
                    </div>
                  </div>
                </label>

                {/* Excel Option */}
                <label
                  className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${
                    exportFormat === 'excel'
                      ? 'border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                  }`}
                >
                  <input
                    type="radio"
                    name="format"
                    value="excel"
                    checked={exportFormat === 'excel'}
                    onChange={(e) => setExportFormat(e.target.value as 'excel')}
                    className="w-5 h-5 text-emerald-500 focus:ring-emerald-500"
                  />
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 dark:text-white">Excel Workbook</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Formatted spreadsheet with multiple sheets
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Cloud Backup */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border dark:border-gray-800 shadow-sm mb-6">
              <h3 className="text-lg text-gray-900 dark:text-white mb-6">Cloud Backup</h3>
              
              <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-900 dark:text-white">Automatic Cloud Backup</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      Sync your data automatically to the cloud
                    </div>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={cloudBackup}
                    onChange={(e) => setCloudBackup(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-500"></div>
                </label>
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={handleExport}
              className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download className="w-5 h-5" />
              <span>Download {exportFormat.toUpperCase()} Export</span>
            </button>

            {/* Export Info */}
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-xl">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <strong>Note:</strong> Your exported file will include all transactions, categories, and budget information from the selected date range. Personal information is encrypted for your privacy.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
