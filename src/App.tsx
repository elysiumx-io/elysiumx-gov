import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AdminPanel from './components/admin-panel/AdminPanel';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { ParticleConnectkit } from './components/ParticleConnectkit';
import PollParticipation from './components/PollParticipation';
import PollSettings from './components/poll-settings/index';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <ParticleConnectkit>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute requiredRole="admin">
                <AdminPanel />
              </ProtectedRoute>
            } />
            <Route path="/polls/:pollId/settings" element={
              <ProtectedRoute>
                <PollSettings />
              </ProtectedRoute>
            } />
            <Route path="/poll/:pollId" element={<PollParticipation />} />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ParticleConnectkit>
  );
}

export default App;
