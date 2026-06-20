import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ModeProvider } from './contexts/ModeContext';
import { ToastProvider } from './contexts/ToastContext';
import { LanguageProvider } from './contexts/LanguageContext';

// Pages
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import PersonaSelectPage from './pages/PersonaSelect';
import AmmaDashboard from './pages/dashboards/AmmaDashboard';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import SeniorDashboard from './pages/dashboards/SeniorDashboard';
import BusinessDashboard from './pages/dashboards/BusinessDashboard';
import ScamShieldPage from './pages/ScamShield';

import ProtectedRoute from './components/shared/ProtectedRoute';
import Toast from './components/shared/Toast';

export default function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <ModeProvider>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
        </ModeProvider>
      </LanguageProvider>
    </AuthProvider>
  );
}

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/"        element={<LandingPage />} />
        <Route path="/login"   element={<LoginPage />} />

        {/* Protected */}
        <Route path="/choose"  element={<ProtectedRoute><PersonaSelectPage /></ProtectedRoute>} />

        {/* Persona Dashboards */}
        <Route path="/amma/*"     element={<ProtectedRoute><AmmaDashboard /></ProtectedRoute>} />
        <Route path="/student/*"  element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />
        <Route path="/senior/*"   element={<ProtectedRoute><SeniorDashboard /></ProtectedRoute>} />
        <Route path="/business/*" element={<ProtectedRoute><BusinessDashboard /></ProtectedRoute>} />

        {/* Scam Shield — accessible from all personas */}
        <Route path="/scam-shield" element={<ProtectedRoute><ScamShieldPage /></ProtectedRoute>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toast />
    </>
  );
}
