import { useState } from 'react';
import {
  LayoutGrid, Users, MessageSquare, Brain, Star, FileText,
  Sparkles, CalendarCheck, Settings, LogOut, Search, Bell,
  Moon, Sun, ChevronLeft, X, Menu, Shield, ChevronDown
} from 'lucide-react';

import AdminOverviewView from './admin/AdminOverviewView';
import AdminUserManagement from './admin/AdminUserManagement';
import AdminChatLogs from './admin/AdminChatLogs';
import AdminStressTracker from './admin/AdminStressTracker';
import AdminFeedback from './admin/AdminFeedback';
import AdminHealthReports from './admin/AdminHealthReports';
import AdminRecommendations from './admin/AdminRecommendations';
import AdminDailyCheckIn from './admin/AdminDailyCheckIn';
import AdminSettings from './admin/AdminSettings';

type AdminView =
  | 'Overview'
  | 'User Management'
  | 'Chat Logs'
  | 'Stress Tracker'
  | 'Feedback'
  | 'Health Reports'
  | 'Recommendations'
  | 'Daily Check-In'
  | 'Settings';

const SIDEBAR_ITEMS: { id: AdminView; icon: any; label: string; badge?: string; badgeColor?: string }[] = [
  { id: 'Overview', icon: LayoutGrid, label: 'Overview' },
  { id: 'User Management', icon: Users, label: 'User Management', badge: '1.2k', badgeColor: 'bg-emerald-100 text-emerald-700' },
  { id: 'Chat Logs', icon: MessageSquare, label: 'Chat Logs', badge: '48', badgeColor: 'bg-blue-100 text-blue-700' },
  { id: 'Stress Tracker', icon: Brain, label: 'Stress Tracker', badge: '!', badgeColor: 'bg-red-100 text-red-600' },
  { id: 'Feedback', icon: Star, label: 'Feedback' },
  { id: 'Health Reports', icon: FileText, label: 'Health Reports' },
  { id: 'Recommendations', icon: Sparkles, label: 'Recommendations' },
  { id: 'Daily Check-In', icon: CalendarCheck, label: 'Daily Check-In' },
  { id: 'Settings', icon: Settings, label: 'Settings' },
];

const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'EN', full: 'English' },
  { code: 'hi', flag: '🇮🇳', label: 'HI', full: 'Hindi' },
  { code: 'te', flag: '🇮🇳', label: 'TE', full: 'Telugu' },
];

const ADMIN_NOTIFICATIONS = [
  { text: '3 users reported critical stress levels', time: '2m ago', color: 'text-red-500', icon: '🚨' },
  { text: 'New feedback batch received (48 responses)', time: '15m ago', color: 'text-blue-500', icon: '💬' },
  { text: 'Health report generated for March 2026', time: '1h ago', color: 'text-emerald-500', icon: '📊' },
  { text: 'AI model updated — v2.4.1 deployed', time: '3h ago', color: 'text-indigo-500', icon: '🤖' },
  { text: 'Daily check-in completion: 78% (↑12%)', time: '6h ago', color: 'text-amber-500', icon: '✅' },
];

interface AdminDashboardProps {
  onSwitchToUser?: () => void;
}

export default function AdminDashboard({ onSwitchToUser }: AdminDashboardProps) {
  const [view, setView] = useState<AdminView>('Overview');
  const [collapsed, setCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState('en');
  const [notifOpen, setNotifOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const dm = darkMode;

  const SidebarItem = ({ item }: { item: typeof SIDEBAR_ITEMS[0] }) => {
    const isActive = view === item.id;
    return (
      <button
        onClick={() => { setView(item.id); setMobileOpen(false); }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
          isActive
            ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
            : dm
              ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
              : 'text-slate-500 hover:bg-violet-50 hover:text-violet-700'
        }`}
      >
        <item.icon size={18} className={isActive ? 'text-white' : dm ? 'group-hover:text-white' : 'group-hover:text-violet-600'} />
        {!collapsed && (
          <span className="text-sm font-semibold truncate flex-1 text-left">{item.label}</span>
        )}
        {!collapsed && item.badge && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : item.badgeColor}`}>
            {item.badge}
          </span>
        )}
      </button>
    );
  };

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-9 h-9 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-violet-500/30 flex-shrink-0">
          <Shield size={18} />
        </div>
        {!collapsed && (
          <div>
            <div className="flex items-center gap-1.5">
              <span className={`text-lg font-black tracking-tight ${dm ? 'text-white' : 'text-slate-900'}`}>WellBot</span>
              <span className="text-[9px] font-black bg-violet-600 text-white px-1.5 py-0.5 rounded">ADMIN</span>
            </div>
            <p className={`text-[10px] font-medium ${dm ? 'text-slate-500' : 'text-slate-400'}`}>Control Panel</p>
          </div>
        )}
      </div>

      {/* Section label */}
      {!collapsed && (
        <p className={`text-[10px] font-black uppercase tracking-widest px-4 mb-2 ${dm ? 'text-slate-600' : 'text-slate-400'}`}>
          Main Menu
        </p>
      )}

      {/* Nav */}
      <nav className="flex-1 space-y-1">
        {SIDEBAR_ITEMS.slice(0, 6).map(item => <SidebarItem key={item.id} item={item} />)}
        <div className={`h-px mx-3 my-3 ${dm ? 'bg-slate-800' : 'bg-slate-100'}`} />
        {!collapsed && (
          <p className={`text-[10px] font-black uppercase tracking-widest px-4 mb-2 ${dm ? 'text-slate-600' : 'text-slate-400'}`}>
            Configuration
          </p>
        )}
        {SIDEBAR_ITEMS.slice(6).map(item => <SidebarItem key={item.id} item={item} />)}
      </nav>

      {/* Switch to User */}
      {onSwitchToUser && (
        <button
          onClick={onSwitchToUser}
          className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all mt-2 text-sm font-semibold ${
            dm ? 'text-slate-400 hover:bg-slate-800 hover:text-emerald-400' : 'text-slate-400 hover:bg-emerald-50 hover:text-emerald-600'
          }`}
        >
          <Users size={18} />
          {!collapsed && <span>User View</span>}
        </button>
      )}

      {/* Logout */}
      <button
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all mt-1 ${
          dm ? 'text-slate-500 hover:bg-red-900/30 hover:text-red-400' : 'text-slate-400 hover:bg-red-50 hover:text-red-500'
        }`}
      >
        <LogOut size={18} />
        {!collapsed && <span className="text-sm font-semibold">Logout</span>}
      </button>

      {/* Collapse */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mt-2 flex items-center gap-2 py-2 px-4 text-xs font-bold uppercase tracking-widest transition-colors ${
          dm ? 'text-slate-700 hover:text-slate-400' : 'text-slate-300 hover:text-slate-500'
        }`}
      >
        <ChevronLeft
          size={16}
          className={`transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`}
        />
        {!collapsed && 'Minimize'}
      </button>
    </>
  );

  return (
    <div
      className={`flex min-h-screen ${dm ? 'bg-slate-900 text-white' : 'bg-[#F4F6FB] text-slate-800'} transition-colors duration-300`}
      onClick={() => { if (notifOpen) setNotifOpen(false); if (profileOpen) setProfileOpen(false); if (langOpen) setLangOpen(false); }}
    >
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`hidden lg:flex flex-col ${collapsed ? 'w-20' : 'w-64'} ${
          dm ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-100'
        } border-r p-5 sticky top-0 h-screen z-40 transition-all duration-300 flex-shrink-0`}
      >
        <SidebarContent />
      </aside>

      {/* MOBILE SIDEBAR OVERLAY */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <aside className={`relative w-72 ${dm ? 'bg-slate-950' : 'bg-white'} h-full p-5 flex flex-col shadow-2xl`}>
            <button onClick={() => setMobileOpen(false)} className={`absolute top-4 right-4 p-2 rounded-full ${dm ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
              <X size={18} />
            </button>
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">

        {/* TOP NAVBAR */}
        <header
          className={`sticky top-0 z-30 ${dm ? 'bg-slate-900/90 border-slate-800' : 'bg-white/90 border-slate-100'} border-b backdrop-blur-md px-6 py-3.5 flex items-center gap-4`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile menu */}
          <button onClick={() => setMobileOpen(true)} className={`lg:hidden p-2 rounded-xl ${dm ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}>
            <Menu size={20} />
          </button>

          {/* Logo mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <div className="w-7 h-7 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Shield size={14} />
            </div>
            <span className={`font-black text-sm ${dm ? 'text-white' : 'text-slate-900'}`}>WellBot Admin</span>
          </div>

          {/* Breadcrumb (desktop) */}
          <div className="hidden lg:flex items-center gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${dm ? 'text-slate-500' : 'text-slate-400'}`}>Admin</span>
            <span className={`text-slate-300`}>›</span>
            <span className={`text-sm font-bold ${dm ? 'text-white' : 'text-slate-900'}`}>{view}</span>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Search */}
          <div className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-2xl border ${dm ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'} w-56`}>
            <Search size={15} className="text-slate-400 flex-shrink-0" />
            <input
              placeholder="Search users, logs..."
              className="bg-transparent text-sm font-medium outline-none w-full placeholder-slate-400"
            />
          </div>

          {/* Language selector dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setLangOpen(!langOpen); setNotifOpen(false); setProfileOpen(false); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-2xl border text-sm font-bold transition-all ${
                dm ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <span>{LANGUAGES.find(l => l.code === lang)?.flag}</span>
              <span>{LANGUAGES.find(l => l.code === lang)?.label}</span>
              <ChevronDown size={12} />
            </button>
            {langOpen && (
              <div className={`absolute top-full right-0 mt-2 w-40 ${dm ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} border rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in-up`}>
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold transition-colors ${
                      lang === l.code
                        ? 'bg-violet-600 text-white'
                        : dm ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!dm)}
            className={`p-2.5 rounded-2xl border transition-all ${
              dm
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
                : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
            }`}
          >
            {dm ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Notifications */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setNotifOpen(!notifOpen); setProfileOpen(false); setLangOpen(false); }}
              className={`p-2.5 rounded-2xl border relative transition-all ${
                dm ? 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700' : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
              }`}
            >
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </button>
            {notifOpen && (
              <div className={`absolute top-full right-0 mt-2 w-90 ${dm ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} rounded-2xl border shadow-2xl p-4 z-50 animate-fade-in-up`} style={{ width: '340px' }}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className={`font-bold text-sm ${dm ? 'text-white' : 'text-slate-900'}`}>Admin Notifications</span>
                    <span className="ml-2 text-[10px] bg-red-500 text-white px-1.5 py-0.5 rounded-full font-bold">5 new</span>
                  </div>
                  <button onClick={() => setNotifOpen(false)} className={`p-1 rounded-full ${dm ? 'hover:bg-slate-700' : 'hover:bg-slate-100'}`}>
                    <X size={14} className="text-slate-400" />
                  </button>
                </div>
                <div className="space-y-2 max-h-72 overflow-y-auto">
                  {ADMIN_NOTIFICATIONS.map((n, i) => (
                    <div key={i} className={`p-3 rounded-xl ${dm ? 'bg-slate-700' : 'bg-slate-50'} cursor-pointer hover:opacity-80 transition-opacity`}>
                      <div className="flex items-start gap-2">
                        <span className="text-base">{n.icon}</span>
                        <div>
                          <p className={`text-xs font-medium ${dm ? 'text-slate-200' : 'text-slate-700'}`}>{n.text}</p>
                          <p className={`text-[10px] mt-0.5 ${n.color} font-semibold`}>{n.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 text-xs font-bold text-violet-600 hover:text-violet-700 transition-colors">
                  View all notifications →
                </button>
              </div>
            )}
          </div>

          {/* Admin Profile */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => { setProfileOpen(!profileOpen); setNotifOpen(false); setLangOpen(false); }}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0 shadow-lg shadow-violet-500/30">
                AD
              </div>
              <div className="hidden md:block text-left">
                <p className={`text-xs font-bold ${dm ? 'text-white' : 'text-slate-900'}`}>Admin User</p>
                <p className={`text-[10px] font-medium ${dm ? 'text-slate-400' : 'text-slate-400'}`}>Super Admin</p>
              </div>
              <ChevronDown size={14} className={dm ? 'text-slate-400' : 'text-slate-400'} />
            </button>
            {profileOpen && (
              <div className={`absolute top-full right-0 mt-2 w-52 ${dm ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-100'} border rounded-2xl shadow-2xl overflow-hidden z-50 animate-fade-in-up`}>
                <div className={`px-4 py-3 ${dm ? 'bg-slate-700' : 'bg-slate-50'}`}>
                  <p className={`text-sm font-bold ${dm ? 'text-white' : 'text-slate-900'}`}>Admin User</p>
                  <p className={`text-xs ${dm ? 'text-slate-400' : 'text-slate-500'}`}>admin@wellbot.com</p>
                </div>
                {[
                  { label: 'Profile Settings', icon: '👤' },
                  { label: 'Admin Preferences', icon: '⚙️' },
                  { label: 'Activity Log', icon: '📋' },
                ].map((item) => (
                  <button
                    key={item.label}
                    onClick={() => { setView('Settings'); setProfileOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                      dm ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.icon}</span> {item.label}
                  </button>
                ))}
                <div className={`h-px ${dm ? 'bg-slate-700' : 'bg-slate-100'}`} />
                <button className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 transition-colors`}>
                  <span>🚪</span> Sign Out
                </button>
              </div>
            )}
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {view === 'Overview' && <AdminOverviewView darkMode={dm} />}
          {view === 'User Management' && <AdminUserManagement darkMode={dm} />}
          {view === 'Chat Logs' && <AdminChatLogs darkMode={dm} />}
          {view === 'Stress Tracker' && <AdminStressTracker darkMode={dm} />}
          {view === 'Feedback' && <AdminFeedback darkMode={dm} />}
          {view === 'Health Reports' && <AdminHealthReports darkMode={dm} />}
          {view === 'Recommendations' && <AdminRecommendations darkMode={dm} />}
          {view === 'Daily Check-In' && <AdminDailyCheckIn darkMode={dm} />}
          {view === 'Settings' && <AdminSettings darkMode={dm} />}
        </main>
      </div>
    </div>
  );
}
