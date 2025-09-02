import { Link, useNavigate } from "react-router-dom";
import { LogOut, Menu, Settings, X } from "lucide-react";
import { type MouseEventHandler, useState } from "react";
import type { Poll, PollPermissions } from "../types";

import PollUrlDisplay from './poll-settings/PollUrlDisplay';

interface HeaderProps {
  user?: any;
  logout?: () => void;
  getRoleColor?: (role: string) => string;
  mode?: 'user' | 'admin' | 'poll-settings';
  handleLaunchPoll?: MouseEventHandler<HTMLButtonElement>;
  saving?: boolean;
  poll?: Poll | null;
  permissions?: PollPermissions | null;
}

export default function Header({ user, logout, getRoleColor, mode = 'user', handleLaunchPoll, saving, poll, permissions }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  // Helper functions
  const truncateName = (name: string, maxLength = 15) => {
    if (!name) return '';
    if (name.length <= maxLength) return name;
    return name.substring(0, maxLength) + '...';
  };

  const getInitials = (name: string) => {
    if (!name) return 'U';
    const words = name.split(' ').filter(Boolean);
    if (words.length === 1) return words[0].charAt(0).toUpperCase();
    return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
  };

  const defaultGetRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'bg-red-100 text-red-800';
      case 'moderator': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      draft: 'bg-gray-100 text-gray-800 border-gray-200',
      active: 'bg-green-100 text-green-800 border-green-200',
      completed: 'bg-blue-100 text-blue-800 border-blue-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200',
    };
    return badges[status as keyof typeof badges] || badges.draft;
  };

  const roleColor = getRoleColor || defaultGetRoleColor;

  // === Render Mode Admin (dengan style seperti user) ===
  if (mode === 'admin') {
    return (

      <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Admin Logo & Title */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-2xl flex items-center justify-center shadow-xl shadow-pink-500/30 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/40">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 rounded-2xl opacity-20 blur-sm"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-xs text-slate-400 -mt-1">ElysiumX Gov Management</p>
              </div>
            </div>

            {/* Right - Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Back to Dashboard Button */}
              <Link
                to="/dashboard"
                className="group relative inline-flex items-center px-4 py-2.5 bg-slate-700/50 hover:bg-red-600/80 text-slate-300 hover:text-white text-sm font-medium rounded-xl border border-slate-600/50 hover:border-red-500/50 shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Dashboard
              </Link>

              {/* User Info Card */}
              <div className="flex items-center space-x-3 bg-slate-800/50 rounded-2xl px-3 py-2 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 h-12">
                <div className="relative">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white font-bold text-xs">
                      {getInitials(user?.name)}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <div className="max-w-[100px]">
                  <p className="text-sm font-semibold text-white truncate" title={user?.name}>
                    {truncateName(user?.name, 10)}
                  </p>
                  <p className={`inline-flex text-[9px] px-1.5 py-0.5 rounded-full font-medium tracking-wide ${roleColor(user?.role || 'user')}`}>
                    {user?.role?.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="group relative inline-flex items-center px-4 py-2.5 bg-slate-700/50 hover:bg-red-600/80 text-slate-300 hover:text-white text-sm font-medium rounded-xl border border-slate-600/50 hover:border-red-500/50 shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:scale-105"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 text-white hover:bg-slate-700/50 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4">
              <div className="mt-3 space-y-3 bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50 shadow-xl">
                {/* Mobile User Info */}
                <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-xl">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <span className="text-white font-bold">
                        {getInitials(user?.name)}
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-white truncate" title={user?.name}>
                      {user?.name}
                    </p>
                    <p className={`inline-flex text-[11px] px-2 py-1 rounded-full font-medium mt-1 ${roleColor(user?.role || 'user')}`}>
                      {user?.role?.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Mobile Back to Dashboard */}
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Dashboard
                </Link>

                {/* Mobile Logout */}
                <button
                  onClick={() => {
                    logout?.();
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-3 bg-slate-700/50 hover:bg-red-600/80 text-slate-300 hover:text-white text-sm font-medium rounded-xl border border-slate-600/50 hover:border-red-500/50 transition-all duration-300"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  } else if (mode === 'poll-settings') {
    return (
      <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left - Poll Title & Status */}
            <div className="flex items-start sm:items-center space-x-3">
              <button
                onClick={() => navigate('/dashboard')}
                className="text-slate-400 hover:text-white transition-colors duration-200 p-2 rounded-xl hover:bg-slate-700/50 mt-1"
                aria-label="Back to Dashboard"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="min-w-0 flex-1">
                <h1 className="text-lg font-bold text-white truncate max-w-xs sm:max-w-sm">
                  {poll?.title || 'Untitled Poll'}
                </h1>
                <div className="flex flex-wrap items-center gap-2 mt-0.5">


                  <span className="text-xs text-slate-400">
                    Settings
                  </span>
                </div>
              </div>
              {/* Status Badge - lebih kecil dan halus */}
              <span className={`inline-flex px-2 py-0.5 text-xs font-sm rounded-full border ${getStatusBadge(poll?.status || 'draft')}`}>
                {(poll?.status?.charAt(0).toUpperCase() || '') + poll?.status?.slice(1)}
              </span>
            </div>

            {/* Right - Actions (Desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              {poll?.status === 'draft' && permissions?.canManage && (
                <button
                  onClick={handleLaunchPoll}
                  disabled={saving}
                  className="inline-flex items-center px-4 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-green-500 text-white text-sm font-medium rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-70"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Launch Poll
                </button>
              )}
              {(poll?.status === 'active' || poll?.status === 'completed') && (
                <PollUrlDisplay pollId={poll?.id} />
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative p-2 text-white hover:bg-slate-700/50 rounded-xl transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pb-4">
              <div className="mt-3 space-y-3 bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50 shadow-xl">
                {/* Mobile Launch Poll Button */}
                {poll?.status === 'draft' && permissions?.canManage && (
                  <button
                    onClick={() => {
                      handleLaunchPoll?.({} as any);
                      setIsOpen(false);
                    }}
                    disabled={saving}
                    className="w-full flex items-center px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-500 text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-300 disabled:opacity-70"
                  >
                    <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Launch Poll
                  </button>
                )}

                {/* Mobile Poll URL Display */}
                {(poll?.status === 'active' || poll?.status === 'completed') && (
                  <PollUrlDisplay pollId={poll?.id} />
                )}

                {/* Mobile Back to Dashboard */}
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-500 hover:to-slate-600 text-white text-sm font-medium rounded-xl shadow transition-all duration-300"
                >
                  <svg className="w-4 h-4 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // === Mode User (Default) ===
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border-b border-slate-700/50 shadow-2xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-2xl opacity-20 blur-sm"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                ElysiumX
              </h1>
              <p className="text-xs text-slate-400 -mt-1">Government Portal</p>
            </div>
          </div>

          {/* Right - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* User Info Card */}
            <div className="flex items-center space-x-3 bg-slate-800/50 rounded-2xl px-3 py-2 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 h-12">
              <div className="relative">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                  <span className="text-white font-bold text-xs">
                    {getInitials(user?.name)}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></div>
              </div>
              <div className="max-w-[100px]">
                <p className="text-sm font-semibold text-white truncate" title={user?.name}>
                  {truncateName(user?.name, 10)}
                </p>
                <p className={`inline-flex text-[9px] px-1.5 py-0.5 rounded-full font-medium tracking-wide ${roleColor(user?.role || 'user')}`}>
                  {user?.role?.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Admin Panel Button */}
            {user?.role === 'admin' && (
              <Link
                to="/admin"
                className="group relative inline-flex items-center px-4 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white text-sm font-medium rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              >
                <Settings className="w-4 h-4 mr-2" />
                Admin Panel
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            )}

            {/* Logout Button */}
            <button
              onClick={logout}
              className="group relative inline-flex items-center px-4 py-2.5 bg-slate-700/50 hover:bg-red-600/80 text-slate-300 hover:text-white text-sm font-medium rounded-xl border border-slate-600/50 hover:border-red-500/50 shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:scale-105"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative p-2 text-white hover:bg-slate-700/50 rounded-xl transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}
              />
              <X
                size={24}
                className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pb-4">
            <div className="mt-3 space-y-3 bg-slate-800/60 backdrop-blur-xl rounded-2xl p-4 border border-slate-700/50 shadow-xl">
              {/* Mobile User Info */}
              <div className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-xl">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
                    <span className="text-white font-bold">
                      {getInitials(user?.name)}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-white truncate" title={user?.name}>
                    {user?.name}
                  </p>
                  <p className={`inline-flex text-[11px] px-2 py-1 rounded-full font-medium mt-1 ${roleColor(user?.role || 'user')}`}>
                    {user?.role?.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Admin Panel (Mobile) */}
              {user?.role === 'admin' && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-300"
                >
                  <Settings className="w-4 h-4 mr-3" />
                  Admin Panel
                </Link>
              )}

              {/* Mobile Logout */}
              <button
                onClick={() => {
                  logout?.();
                  setIsOpen(false);
                }}
                className="flex items-center w-full px-4 py-3 bg-slate-700/50 hover:bg-red-600/80 text-slate-300 hover:text-white text-sm font-medium rounded-xl border border-slate-600/50 hover:border-red-500/50 transition-all duration-300"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}