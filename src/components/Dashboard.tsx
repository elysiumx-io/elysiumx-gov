import type { Poll, PollPermissions } from '../types';
import React, { useEffect, useState } from 'react';

import CreatePollModal from './CreatePollModal';
import Header from './Header';
import Iridescence from './custom/Backgrounds/Iridescence/Iridescence';
import { pollApi } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [polls, setPolls] = useState<Poll[]>([]);
  const [otherPolls, setOtherPolls] = useState<Poll[]>([]);
  const [pollPermissions, setPollPermissions] = useState<Record<string, PollPermissions>>({});
  const [loading, setLoading] = useState(true);
  const [loadingOther, setLoadingOther] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [activeOtherTab, setActiveOtherTab] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);

  useEffect(() => {
    loadPolls();
    loadOtherPolls();
  }, []);

  const loadPolls = async () => {
    try {
      const response = await pollApi.getPolls();
      const pollsData = response.data.polls;
      setPolls(pollsData);

      const permissionsPromises = pollsData.map(poll =>
        pollApi.getUserPollPermissions(poll.id).then(res => ({
          pollId: poll.id,
          permissions: res.data.permissions
        }))
      );

      const permissionsResults = await Promise.all(permissionsPromises);
      const permissionsMap = permissionsResults.reduce((acc, { pollId, permissions }) => {
        acc[pollId] = permissions;
        return acc;
      }, {} as Record<string, PollPermissions>);

      setPollPermissions(permissionsMap);
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to load polls');
    } finally {
      setLoading(false);
    }
  };

  const loadOtherPolls = async () => {
    try {
      setLoadingOther(true);
      const response = await pollApi.getOtherPolls();
      setOtherPolls(response.data.polls);
    } catch (error: any) {
      console.error('Failed to load other polls:', error);
    } finally {
      setLoadingOther(false);
    }
  };

  const handlePollCreated = (pollId: string) => {
    loadPolls();
    navigate(`/polls/${pollId}/settings`);
  };

  const handlePollClick = (poll: Poll) => {
    const permissions = pollPermissions[poll.id];
    if (permissions?.canView) {
      navigate(`/polls/${poll.id}/settings`);
    } else {
      navigate(`/poll/${poll.id}`);
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      draft: 'bg-gray-700 text-gray-300 border-gray-600 shadow-sm',
      active: 'bg-blue-900/40 text-blue-300 border-blue-700 shadow-blue-500/20',
      completed: 'bg-purple-900/40 text-purple-300 border-purple-700 shadow-purple-500/20',
      cancelled: 'bg-red-900/40 text-red-300 border-red-700 shadow-red-500/20',
    };
    return badges[status as keyof typeof badges] || badges.draft;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return (
          <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'completed':
        return (
          <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        );
      case 'draft':
        return (
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return 'text-purple-400 bg-purple-900/30';
      case 'sub-admin': return 'text-blue-400 bg-blue-900/30';
      default: return 'text-green-400 bg-green-900/30';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
            <Iridescence
              color={[0, 0, 0.1]}
              mouseReact={true}
              amplitude={0.1}
              speed={1.0}
            />
          </div>
      {/* Navigation Header */}
      <Header user={user} logout={logout} getRoleColor={getRoleColor} />



      {/* Main Content */}

      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-blue-900/60 to-purple-900/60 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-700/40 shadow-lg shadow-blue-500/10 backdrop-blur-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-white flex flex-wrap items-center gap-1">
                  <span>Welcome back,</span>
                  <span className="max-w-[200px] sm:max-w-[300px] lg:max-w-none truncate">
                    {user?.name}
                  </span>
                  <span>! 👋</span>
                </h2>
                <p className="text-blue-100 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {user?.role === 'admin'
                    ? 'Manage proposal polls, users, and monitor the entire voting platform.'
                    : user?.role === 'sub-admin'
                      ? 'Manage your assigned proposal polls and participate in the voting process.'
                      : 'Participate in proposal polls and view your voting history. You can submit proposals through our official community.'}
                </p>
              </div>
              {(user?.role === 'admin') && (
                <div className="flex-shrink-0">
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-purple-300 font-medium py-3 px-4 sm:px-6 rounded-xl transition-all duration-200 border border-purple-600/50 hover:border-purple-500 cursor-pointer backdrop-blur-sm flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span className="whitespace-nowrap">Create New Proposal</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border-l-4 border-red-600 rounded-lg animate-slide-in-right backdrop-blur-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-300 font-medium">{error}</span>
            </div>
          </div>
        )}

        {/* Polls Section */}
        <div className="bg-gray-800/60 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm">
          
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-white">
                {user?.role === 'admin' ? 'All Proposals' :
                  user?.role === 'sub-admin' ? 'My Proposals' :
                    'Proposals Available'}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">{polls.length} total</span>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 bg-gray-700 p-1 rounded-lg">
              {['all', 'active', 'draft', 'completed'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeTab === tab
                    ? 'bg-gray-900 text-blue-400 shadow-inner'
                    : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            {polls.length === 0 ? (
              <div className="text-center py-12 animate-fade-in">
                <svg className="mx-auto h-16 w-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                <h3 className="text-lg font-medium text-white mb-2">No proposals found</h3>
                <p className="text-gray-500 mb-6">
                  {user?.role === 'admin' || user?.role === 'sub-admin'
                    ? 'Get started by creating your first poll.'
                    : 'No polls are available for you to participate in yet.'}
                </p>
                {(user?.role === 'admin' || user?.role === 'sub-admin') && (
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    Create Your First Proposal
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {polls
                  .filter(poll => activeTab === 'all' || poll.status === activeTab)
                  .map((poll, index) => (
                    <div
                      key={poll.id}
                      className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      onClick={() => handlePollClick(poll)}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="text-lg font-semibold text-white leading-tight">
                          {poll.title}
                        </h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(poll.status)}`}>
                          {getStatusIcon(poll.status)}
                          <span className="ml-1">{poll.status}</span>
                        </span>
                      </div>

                      {poll.description && (
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {poll.description}
                        </p>
                      )}

                      <div className="space-y-2 text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          <span>{formatDate(poll.startDate)} - {formatDate(poll.endDate)}</span>
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{poll.ballot.length} question{poll.ballot.length !== 1 ? 's' : ''}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePollClick(poll);
                          }}
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-gray-600 text-sm font-medium rounded-lg text-gray-200 bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {pollPermissions[poll.id]?.canView ? 'Settings' : 'View'}
                        </button>
                        {user?.role === 'user' && (poll.status === 'completed' || poll.status === 'active') && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/poll/${poll.id}`);
                            }}
                            className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                            </svg>
                            Participate
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Other Polls Section */}
        {(user?.role === 'sub-admin' || user?.role === 'user') && otherPolls.length > 0 && (
          <div className="mt-8 bg-gray-800/60 rounded-2xl shadow-lg border border-gray-700 backdrop-blur-sm">
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  {user?.role === 'sub-admin' ? 'Other Polls' : 'All Proposals'}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400">{otherPolls.length} available</span>
                </div>
              </div>

              <div className="flex space-x-1 bg-gray-700 p-1 rounded-lg">
                {['all', 'active', 'draft', 'completed'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveOtherTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${activeOtherTab === tab
                      ? 'bg-gray-900 text-blue-400 shadow-inner'
                      : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6">
              {loadingOther ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading other polls...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherPolls
                    .filter(poll => activeOtherTab === 'all' || poll.status === activeOtherTab)
                    .map((poll, index) => (
                      <div
                        key={poll.id}
                        className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-purple-600/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-pointer animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => navigate(`/poll/${poll.id}`)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h4 className="text-lg font-semibold text-white leading-tight">
                            {poll.title}
                          </h4>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusBadge(poll.status)}`}>
                            {getStatusIcon(poll.status)}
                            <span className="ml-1">{poll.status}</span>
                          </span>
                        </div>

                        {poll.description && (
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {poll.description}
                          </p>
                        )}

                        <div className="space-y-2 text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{formatDate(poll.startDate)} - {formatDate(poll.endDate)}</span>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{poll.ballot.length} question{poll.ballot.length !== 1 ? 's' : ''}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Create Poll Modal */}
      <CreatePollModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onPollCreated={handlePollCreated}
      />
    </div>
  );
};

export default Dashboard;