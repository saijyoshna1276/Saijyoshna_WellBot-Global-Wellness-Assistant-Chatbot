import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LanguageProvider } from './contexts/LanguageContext';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';

function AppContent() {
  const { user, loading } = useAuth();
  const [page, setPage] = useState<'signup' | 'signin'>('signup');
  const [isAdmin, setIsAdmin] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-xl mx-auto mb-4 animate-pulse">W</div>
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-400 border-t-transparent"></div>
          <p className="mt-4 text-slate-500 font-semibold text-sm">Loading WellBot...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        {page === 'signup' ? (
          <SignUp onNavigate={(p) => setPage(p as 'signup' | 'signin')} />
        ) : (
          <SignIn onNavigate={(p) => setPage(p as 'signup' | 'signin')} />
        )}
      </>
    );
  }

  if (isAdmin) {
    return <AdminDashboard onSwitchToUser={() => setIsAdmin(false)} />;
  }

  return (
    <div className="relative">
      <Dashboard />
      {/* Admin Panel Button — demo mode toggle */}
      <button
        onClick={() => setIsAdmin(true)}
        className="fixed bottom-24 right-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs font-black rounded-2xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 transition-all duration-200"
        title="Switch to Admin Panel"
      >
        🛡️ Admin Panel
      </button>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;
