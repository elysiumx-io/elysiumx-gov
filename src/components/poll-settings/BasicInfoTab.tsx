import type { DAOProposalData, Poll, PollPermissions } from '../../types';
import React, { useState } from 'react';

import DAOProposalEditor from '../DAOProposalEditor';

interface BasicInfoTabProps {
  poll: Poll;
  permissions: PollPermissions;
  onSave: (updates: Partial<Poll>) => void;
  saving: boolean;
}

const BasicInfoTab: React.FC<BasicInfoTabProps> = ({ poll, permissions, onSave, saving }) => {
  const [formData, setFormData] = useState({
    title: poll.title,
    description: poll.description || '',
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      title: formData.title,
      description: formData.description || undefined,
    });
  };

  return (
    <div className="space-y-6 text-gray-100 min-h-screen rounded-lg">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Basic Information</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Poll Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-1">
              Proposal Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200
                ${permissions.canEdit
                  ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-500 focus:ring-blue-600'
                  : 'bg-gray-800 border-gray-700 text-gray-400 cursor-not-allowed'
                }`}
              disabled={!permissions.canEdit}
              placeholder="Enter proposal title..."
              required
            />
          </div>

          {/* DAO Proposal Editor */}
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-300 mb-2">Metadata</label>
            <DAOProposalEditor
              title={formData.title}
              initialData={formData.description ? JSON.parse(formData.description) as DAOProposalData : undefined}
              mode="editing"
              onChange={(data: DAOProposalData) =>{
                 setFormData({ ...formData, description: JSON.stringify(data, null, 2) })
              }
                
              }
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-2">
            {permissions.canEdit && (
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
                  disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-blue-600
                  flex items-center gap-2"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Saving...
                  </>
                ) : (
                  'Save Changes'
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default BasicInfoTab;