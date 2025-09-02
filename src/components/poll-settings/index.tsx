import type { Poll, PollPermissions } from '../../types';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AuditorsTab from './AuditorsTab';
import BasicInfoTab from './BasicInfoTab';
import DotGrid from '../custom/Backgrounds/DotGrid/DotGrid';
import Header from '../Header';
import ParticipantsTab from './ParticipantsTab';
import QuestionsTab from './QuestionsTab';
import ResultsTab from './ResultsTab';
import ScheduleTab from './ScheduleTab';
import SettingsTab from './SettingsTab';
import { pollApi } from '../../utils/api';

const PollSettings: React.FC = () => {
  const { pollId } = useParams<{ pollId: string }>();
  const navigate = useNavigate();
  const [poll, setPoll] = useState<Poll | null>(null);
  const [permissions, setPermissions] = useState<PollPermissions | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('basic');

  useEffect(() => {
    if (pollId) {
      loadPollAndPermissions();
    }
  }, [pollId]);

  const loadPollAndPermissions = async () => {
    if (!pollId) return;

    try {
      const [pollResponse, permissionsResponse] = await Promise.all([
        pollApi.getPoll(pollId),
        pollApi.getUserPollPermissions(pollId),
      ]);
      setPoll(pollResponse.data.poll);
      setPermissions(permissionsResponse.data.permissions);
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to load poll');
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updates: Partial<Poll>) => {
    if (!pollId || !poll) return;

    setSaving(true);
    setError('');

    try {
      const response = await pollApi.updatePoll(pollId, updates);
      setPoll(response.data.poll);
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to update poll');
    } finally {
      setSaving(false);
    }
  };

  const handleLaunchPoll = async () => {
    if (!poll) return;

    if (!poll.startDate || !poll.endDate) {
      setError('Please set start and end dates before launching the poll');
      setActiveTab('schedule');
      return;
    }

    if (poll.ballot.length === 0) {
      setError('Please add at least one question before launching the poll');
      setActiveTab('questions');
      return;
    }

    const invalidQuestions = poll.ballot.filter((q) => q.options.length < 2);
    if (invalidQuestions.length > 0) {
      setError('All questions must have at least 2 options before launching the poll');
      setActiveTab('questions');
      return;
    }

    if (poll.startDate < Date.now()) {
      setError('Start date must be in the future or current time');
      setActiveTab('schedule');
      return;
    }

    if (poll.endDate <= poll.startDate) {
      setError('End date must be after start date');
      setActiveTab('schedule');
      return;
    }

    await handleSave({ status: 'active' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading poll settings...</p>
        </div>
      </div>
    );
  }

  if (!poll || !permissions) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-gray-600 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-200 mb-2">Poll not found</h3>
          <p className="text-gray-500 mb-6">The poll you're looking for doesn't exist or you don't have access to it.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  if (!permissions.canView) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-red-500 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
          <h3 className="text-lg font-medium text-gray-200 mb-2">Access Denied</h3>
          <p className="text-gray-500 mb-6">You don't have permission to view this poll.</p>
          <button
            onClick={() => navigate('/dashboard')}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }


  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background DotGrid */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} className='bg-gray-900/90'>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#0f0f15"
          activeColor="#00baff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Overlay gelap untuk kontras teks */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          zIndex: 2,
        }}
      />

      {/* Konten Utama */}
      <div className="relative z-30">
        {/* Header */}
        <Header mode="poll-settings" handleLaunchPoll={handleLaunchPoll} saving={saving} poll={poll} permissions={permissions} />

        {/* Error Message */}
        {error && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <div className="p-4 bg-red-900/50 border-l-4 border-red-500 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-red-300 font-medium">{error}</span>
              </div>
            </div>
          </div>
        )}

        {/* Permissions Info */}
        {(!permissions.canEdit || !permissions.canManage) && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
            <div className="p-4 bg-blue-900/30 border-l-4 border-blue-500 rounded-lg backdrop-blur-sm">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-blue-300 font-medium">
                  {permissions.canEdit && !permissions.canManage
                    ? 'You are viewing as an Editor - You can modify poll content and settings'
                    : !permissions.canEdit && permissions.canAudit
                    ? 'You are viewing as an Auditor - You have read-only access'
                    : 'You have limited access to this poll'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-black/70 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-800">
            {/* Tab Navigation */}
            <div className="border-b border-gray-800">
              <nav className="flex space-x-8 px-6 pt-6">
                {[
                  { id: 'basic', label: 'Basic Info', icon: 'info' },
                  { id: 'schedule', label: 'Schedule', icon: 'calendar' },
                  { id: 'questions', label: 'Questions', icon: 'question' },
                  { id: 'settings', label: 'Settings', icon: 'cog' },
                  { id: 'participants', label: 'Participants', icon: 'users' },
                  { id: 'auditors', label: 'Auditors & Editors', icon: 'shield' },
                  { id: 'results', label: 'Results', icon: 'chart' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 capitalize
                      ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-300 shadow-sm shadow-blue-500/20'
                          : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6 text-gray-200">
              {activeTab === 'basic' && (
                <BasicInfoTab
                  poll={poll}
                  permissions={permissions}
                  onSave={permissions.canEdit ? handleSave : () => {}}
                  saving={saving}
                />
              )}
              {activeTab === 'schedule' && (
                <ScheduleTab
                  poll={poll}
                  permissions={permissions}
                  onSave={permissions.canEdit ? handleSave : () => {}}
                  saving={saving}
                />
              )}
              {activeTab === 'questions' && (
                <QuestionsTab
                  poll={poll}
                  permissions={permissions}
                  onSave={permissions.canEdit ? handleSave : () => {}}
                  saving={saving}
                />
              )}
              {activeTab === 'settings' && (
                <SettingsTab
                  poll={poll}
                  permissions={permissions}
                  onSave={permissions.canEditSettings ? handleSave : () => {}}
                  saving={saving}
                />
              )}
              {activeTab === 'participants' && (
                <ParticipantsTab
                  poll={poll}
                  permissions={permissions}
                  onSave={permissions.canManageParticipants ? handleSave : () => {}}
                  saving={saving}
                />
              )}
              {activeTab === 'auditors' && (
                <AuditorsTab
                  poll={poll}
                  permissions={permissions}
                  onSave={permissions.canManage ? handleSave : () => {}}
                  saving={saving}
                />
              )}
              {activeTab === 'results' && <ResultsTab poll={poll} />}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PollSettings;