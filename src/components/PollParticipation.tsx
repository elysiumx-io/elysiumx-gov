import type { PollResults, Poll as PollType } from '../types';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import DotGrid from './custom/Backgrounds/DotGrid/DotGrid';
import { publicPollApi } from '../utils/api';

const PollParticipation: React.FC = () => {
  const { pollId } = useParams<{ pollId: string }>();
  const navigate = useNavigate();
  // Poll data
  const [poll, setPoll] = useState<PollType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sessionToken, setSessionToken] = useState('');
  const [participant, setParticipant] = useState<any>(null);
  // Authentication form
  const [authMethod, setAuthMethod] = useState<'login' | 'token'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  // Voting state
  const [votes, setVotes] = useState<Record<string, string[]>>({});
  const [hasVoted, setHasVoted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [allowVoteChanges, setAllowVoteChanges] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<PollResults | null>(null);
  const [loadingResults, setLoadingResults] = useState(false);

  useEffect(() => {
    if (pollId) {
      loadPoll();
    }
  }, [pollId]);

  const loadPoll = async () => {
    if (!pollId) return;
    try {
      const response = await publicPollApi.getPoll(pollId);
      setPoll(response.data.poll);
    } catch (error: any) {
      setError(error.response?.data?.error || 'Poll not found or not accessible');
    } finally {
      setLoading(false);
    }
  };

  const handleAuthentication = async () => {
    if (!pollId) return;
    setAuthLoading(true);
    setError('');
    try {
      const credentials = authMethod === 'login'
        ? { email, password }
        : { token };
      const response = await publicPollApi.validateAccess(pollId, credentials);
      if ((response.data as any).hasVoted) {
        // User has already voted
        setParticipant((response.data as any).participant);
        setHasVoted(true);
        setAllowVoteChanges((response.data as any).allowVoteChanges || false);
        setIsAuthenticated(true);
        setSessionToken(response.data.sessionToken);
      } else {
        // User can vote
        setIsAuthenticated(true);
        setSessionToken(response.data.sessionToken);
        setParticipant(response.data.participant);
      }
    } catch (error: any) {
      setError(error.response?.data?.error || 'Authentication failed');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleOptionChange = (questionId: string, optionId: string, isChecked: boolean) => {
    const question = poll?.ballot.find(q => q.id === questionId);
    if (!question) return;
    setVotes(prev => {
      const currentVotes = prev[questionId] || [];
      if (question.maxSelection === 1) {
        // Single selection - replace current vote
        return { ...prev, [questionId]: isChecked ? [optionId] : [] };
      } else {
        // Multiple selection
        if (isChecked) {
          // Add option if under max limit
          if (currentVotes.length < question.maxSelection!) {
            return { ...prev, [questionId]: [...currentVotes, optionId] };
          }
          return prev; // Don't allow more than max
        } else {
          // Remove option
          return { ...prev, [questionId]: currentVotes.filter(id => id !== optionId) };
        }
      }
    });
  };

  const handleSubmitVote = async () => {
    if (!poll || !pollId || !sessionToken) return;
    // Validate minimum selections
    for (const question of poll.ballot) {
      const questionVotes = votes[question.id] || [];
      if (questionVotes.length < (question.minSelection || 1)) {
        setError(`Please select at least ${question.minSelection || 1} option(s) for "${question.title}"`);
        return;
      }
    }
    setSubmitting(true);
    setError('');
    try {
      await publicPollApi.submitVote(pollId, sessionToken, votes);
      setHasVoted(true);
      setShowResults(false); // Hide results after voting
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to submit vote');
    } finally {
      setSubmitting(false);
    }
  };

  const loadResults = async () => {
    if (!pollId || !sessionToken) return;
    setLoadingResults(true);
    try {
      const response = await publicPollApi.getResults(pollId, sessionToken);
      setResults(response.data.results);
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to load results');
    } finally {
      setLoadingResults(false);
    }
  };

  const handleChangeVote = () => {
    setHasVoted(false);
    setVotes({});
    setShowResults(false);
    setError('');
  };

  const isVoteValid = () => {
    if (!poll) return false;
    return poll.ballot.every(question => {
      const questionVotes = votes[question.id] || [];
      return questionVotes.length >= (question.minSelection || 1) &&
        questionVotes.length <= (question.maxSelection || 1);
    });
  };

  const formatDate = (timestamp?: number) => {
    if (!timestamp) return 'N/A';
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400 bg-green-900/30 border-green-700';
      case 'completed': return 'text-blue-400 bg-blue-900/30 border-blue-700';
      case 'cancelled': return 'text-red-400 bg-red-900/30 border-red-700';
      default: return 'text-gray-400 bg-gray-800 border-gray-600';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading poll...</p>
        </div>
      </div>
    );
  }

  if (error && !poll) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <svg className="mx-auto h-16 w-16 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-100 mb-2">Unable to Load Poll</h3>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (hasVoted && isAuthenticated) {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background DotGrid */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} className='bg-gray-900/90'>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#232333"
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 2,
        }}
      />

      {/* Konten Utama */}
      <div className="relative z-30">
        {/* Header */}
        <header className="shadow-2xl backdrop-blur-xl bg-slate-900/10 border-b border-b-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">{poll?.title}</h1>
              {poll?.description && (
                <p className="text-gray-300 mb-4">{poll.description}</p>
              )}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(poll?.status || '')}`}>
                  {poll?.status.toUpperCase()}
                </span>
                <span>Ends: {poll && formatDate(poll.endDate)}</span>
              </div>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {/* Vote Status Banner */}
          <div className="bg-emerald-900/30 border border-emerald-800 rounded-lg p-6 mb-8">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-emerald-400 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="flex-1">
                <h3 className="text-lg font-medium text-emerald-100">Vote Submitted Successfully!</h3>
                <p className="text-emerald-200 mt-1">Thank you for participating in "{poll?.title}". Your vote has been recorded.</p>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              {allowVoteChanges && (
                <button
                  onClick={handleChangeVote}
                  className="inline-flex items-center px-4 py-2 border border-amber-700 text-sm font-medium rounded-lg text-amber-100 bg-amber-900/50 hover:bg-amber-900/80 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Change Vote
                </button>
              )}
              {poll?.settings.allowResultsView && (
                <button
                  onClick={() => {
                    setShowResults(!showResults);
                    if (!showResults && !results) {
                      loadResults();
                    }
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-blue-900 bg-blue-400 hover:bg-blue-500 transition-colors duration-200"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {showResults ? 'Hide Results' : 'View Results'}
                </button>
              )}
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center px-4 py-2 border border-gray-600 text-sm font-medium rounded-lg text-gray-200 bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Go Home
              </button>
            </div>
          </div>
          {/* Results Section */}
          {showResults && (
            <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Poll Results</h2>
                <button
                  onClick={() => setShowResults(false)}
                  className="text-gray-400 hover:text-gray-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {loadingResults ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
                  <p className="text-gray-400">Loading results...</p>
                </div>
              ) : results ? (
                <div className="space-y-6">
                  {/* Poll Statistics */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-800">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-blue-300">Total Participants</p>
                          <p className="text-lg font-semibold text-blue-100">{results.statistics.totalParticipants}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-green-900/30 rounded-lg p-4 border border-green-800">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-green-300">Voted</p>
                          <p className="text-lg font-semibold text-green-100">{results.statistics.votedParticipants}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-4 border border-purple-800">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <svg className="h-6 w-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-purple-300">Participation Rate</p>
                          <p className="text-lg font-semibold text-purple-100">{formatPercentage(results.statistics.participationRate)}</p>
                        </div>
                      </div>
                    </div>
                    {results.poll.voteWeightEnabled && results.statistics.totalVoteWeight && (
                      <div className="bg-orange-900/30 rounded-lg p-4 border border-orange-800">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">
                            <svg className="h-6 w-6 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-orange-300">Total Vote Weight</p>
                            <p className="text-lg font-semibold text-orange-100">{results.statistics.totalVoteWeight}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* Question Results */}
                  {results.permissions.canViewResultsBreakdown && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold text-white">Results by Question</h3>
                      {results.questions.map((question, questionIndex) => (
                        <div key={question.questionId} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                          <div className="mb-6">
                            <h4 className="text-base font-medium text-white mb-2">
                              {questionIndex + 1}. {question.title}
                            </h4>
                            {results.permissions.canViewVoteCounts && (
                              <div className="flex items-center space-x-4 text-sm text-gray-400">
                                <span>Total Votes: {question.totalVotes}</span>
                                {results.poll.voteWeightEnabled && question.totalWeightedVotes && (
                                  <span>Weighted Votes: {question.totalWeightedVotes}</span>
                                )}
                              </div>
                            )}
                          </div>
                          <div className="space-y-4">
                            {question.options.map((option) => (
                              <div key={option.optionId} className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium text-gray-100">{option.title}</span>
                                  <div className="flex items-center space-x-3 text-sm text-gray-300">
                                    {results.permissions.canViewVoteCounts && (
                                      <span>{option.voteCount} votes</span>
                                    )}
                                    <span className="font-medium">{formatPercentage(option.percentage)}</span>
                                  </div>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                  <div
                                    className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                                    style={{ width: `${Math.max(option.percentage, 2)}%` }}
                                  ></div>
                                </div>
                                {results.poll.voteWeightEnabled && (
                                  <div className="flex items-center justify-between text-xs text-gray-400">
                                    <span>Weighted: {option.weightedVoteCount}</span>
                                    <span>{formatPercentage(option.weightedPercentage)}</span>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Participants List */}
                  {results.participants.length > 0 && results.permissions.canViewParticipantNames && (
                    <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
                      <h3 className="text-lg font-semibold text-white mb-6">Participants</h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-700">
                          <thead className="bg-gray-800">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Participant
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Type
                              </th>
                              {results.poll.voteWeightEnabled && results.permissions.canViewVoteWeights && (
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                  Vote Weight
                                </th>
                              )}
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                Voted At
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-gray-900 divide-y divide-gray-700">
                            {results.participants.map((participant, index) => (
                              <tr key={participant.id || index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div>
                                    <div className="text-sm font-medium text-white">{participant.name}</div>
                                    <div className="text-sm text-gray-400">{participant.email}</div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                    participant.isUser
                                      ? 'bg-blue-900/50 text-blue-200 border border-blue-800'
                                      : 'bg-orange-900/50 text-orange-200 border border-orange-800'
                                  }`}>
                                    {participant.isUser ? 'Registered User' : 'External'}
                                  </span>
                                </td>
                                {results.poll.voteWeightEnabled && results.permissions.canViewVoteWeights && typeof participant.voteWeight !== 'undefined' && (
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                                    {participant.voteWeight}
                                  </td>
                                )}
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-900/50 text-green-200 border border-green-800">
                                    Voted
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                                  {participant.votedAt ? formatDate(participant.votedAt) : 'N/A'}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {/* Access Notice */}
                  {!results.permissions.canViewResultsBreakdown && (
                    <div className="bg-yellow-900/30 border border-yellow-800 rounded-lg p-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="text-sm font-medium text-yellow-200">Limited Results View</h4>
                          <p className="text-sm text-yellow-300 mt-1">
                            {poll?.status === 'active'
                              ? "Full poll results will be available when the poll ends."
                              : "The poll manager has chosen to hide detailed results until the poll ends."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-400">
                  <p>Click "View Results" to load the poll results</p>
                </div>
              )}
            </div>
          )}
        </main>
      </div>
      </div>
    );
  }

  // Authentication screen
  if (!isAuthenticated) {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Background DotGrid */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }} className='bg-gray-900/90'>
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#232333"
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
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 2,
        }}
      />

      {/* Konten Utama */}
      <div className="relative z-30">
        {/* Header */}
        <header className="shadow-2xl backdrop-blur-xl bg-slate-900/10 border-b border-b-white/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">{poll?.title}</h1>
              {poll?.description && (
                <p className="text-gray-300 mb-4 text-opacity-90">{poll.description}</p>
              )}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-300">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                    poll?.status || ''
                  )}`}
                >
                  {poll?.status.toUpperCase()}
                </span>
                <span>Ends: {poll && formatDate(poll.endDate)}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Authentication Form */}
        <main className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-8 shadow-2xl backdrop-blur-xl bg-slate-900/40 border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-1">Access Poll</h2>
              <p className="text-gray-400 text-sm">Please authenticate to participate in this poll</p>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-900/40 border-l-4 border-red-600 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-red-200 font-medium">{error}</span>
                </div>
              </div>
            )}

            {/* Auth Method Selection */}
            <div className="mb-6">
              <div className="flex border border-gray-600 rounded-lg p-1 bg-gray-800/70">
                <button
                  onClick={() => setAuthMethod('login')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    authMethod === 'login'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  User Login
                </button>
                <button
                  onClick={() => setAuthMethod('token')}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    authMethod === 'token'
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Access Token
                </button>
              </div>
            </div>

            {/* Authentication Form */}
            {authMethod === 'login' ? (
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                    placeholder="Enter your password"
                    required
                  />
                </div>
              </div>
            ) : (
              <div>
                <label htmlFor="token" className="block text-sm font-medium text-gray-300 mb-1">
                  Access Token
                </label>
                <input
                  type="text"
                  id="token"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-800 text-white placeholder-gray-400"
                  placeholder="Enter your access token"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Use the token provided in your invitation email
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleAuthentication}
              disabled={authLoading || (authMethod === 'login' ? !email || !password : !token)}
              className="w-full mt-6 py-3 px-4 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {authLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2 inline-block"></div>
                  Authenticating...
                </>
              ) : (
                'Access Poll'
              )}
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

  // Voting screen - authenticated user can now vote
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bshadow-2xl backdrop-blur-xl bg-slate-900/10 border-b border-b-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center space-y-3">
            {/* Title */}
            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              {poll?.title}
            </h1>
            {/* Description */}
            {poll?.description && (
              <p className="text-gray-300 text-base max-w-2xl mx-auto">
                {poll.description}
              </p>
            )}
            {/* Status + End Date */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <span
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide border ${getStatusColor(
                  poll?.status || ''
                )}`}
              >
                {(poll?.status || '').toUpperCase()}
              </span>
              <span className="flex items-center gap-1 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10m-9 4h9m-9 4h6" />
                </svg>
                Ends: {formatDate(poll?.endDate)}
              </span>
            </div>
            {/* Participant Info */}
            {participant && (
              <div className="mt-4 text-sm bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 inline-block">
                <span className="text-gray-300">
                  Voting as: <span className="font-medium text-white">{participant.name}</span>
                </span>
                {participant.voteWeight !== 1 && (
                  <span className="ml-2 text-xs text-blue-400 font-medium">
                    (Weight: {participant.voteWeight})
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </header>
      {/* Error Message */}
      {error && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="p-4 bg-red-900/30 border-l-4 border-red-700 rounded-lg">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <span className="text-red-200 font-medium">{error}</span>
            </div>
          </div>
        </div>
      )}
      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {poll?.ballot.map((question, questionIndex) => (
            <div key={question.id} className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 p-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  {questionIndex + 1}. {question.title}
                </h2>
                {question.description && (
                  <p className="text-gray-300 mb-4">{question.description}</p>
                )}
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <span>
                    Select {question.minSelection === question.maxSelection
                      ? `${question.minSelection}`
                      : `${question.minSelection}-${question.maxSelection}`} option(s)
                  </span>
                  {question.randomizedOrder && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-900/50 text-blue-200 border border-blue-800">
                      Randomized Order
                    </span>
                  )}
                </div>
                {/* Attachments */}
                {question.attachments && question.attachments.length > 0 && (
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-300 mb-2">Attachments:</p>
                    <div className="space-y-1">
                      {question.attachments.filter(att => att.trim()).map((attachment, idx) => (
                        <a
                          key={idx}
                          href={attachment}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300 mr-4"
                        >
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 10-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                          </svg>
                          Attachment {idx + 1}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {/* Options */}
              <div className="space-y-4">
                {question.options.map((option) => {
                  const isSelected = (votes[question.id] || []).includes(option.id);
                  const inputType = question.maxSelection === 1 ? 'radio' : 'checkbox';
                  return (
                    <div key={option.id} className="border border-gray-700 rounded-lg p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex items-start space-x-3">
                        <div className="flex items-center mt-1">
                          <input
                            type={inputType}
                            name={`question-${question.id}`}
                            id={`option-${option.id}`}
                            checked={isSelected}
                            onChange={(e) => handleOptionChange(question.id, option.id, e.target.checked)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-500 bg-gray-700"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <label htmlFor={`option-${option.id}`} className="text-base font-medium text-white cursor-pointer">
                                {option.title}
                              </label>
                              {option.shortDescription && (
                                <p className="text-sm text-gray-300 mt-1">{option.shortDescription}</p>
                              )}
                              {option.longDescription && (
                                <p className="text-sm text-gray-400 mt-2">{option.longDescription}</p>
                              )}
                              {option.link && (
                                <div className="mt-2">
                                  <a
                                    href={option.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300"
                                  >
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                    </svg>
                                    Learn More
                                  </a>
                                </div>
                              )}
                            </div>
                            {option.image && (
                              <div className="ml-4 flex-shrink-0">
                                <img
                                  src={option.image}
                                  alt={option.title}
                                  className="w-20 h-20 object-cover rounded border border-gray-600"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
          {/* Submit Button */}
          <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-800 p-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">
                Please review your selections before submitting your vote.
              </div>
              <button
                onClick={handleSubmitVote}
                disabled={!isVoteValid() || submitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Submitting Vote...
                  </>
                ) : (
                  'Submit Vote'
                )}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PollParticipation;