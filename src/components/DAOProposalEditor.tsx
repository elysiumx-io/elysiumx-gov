import { Download, Edit2, Plus, Trash2} from 'lucide-react';
import React, { useState } from 'react';
import {DynamicTable} from './DynamicTable';

import type {
  DAOProposalData,
} from '../types';
import { WYSIWYGTextarea } from './WYSIWYGTextarea';

interface DAOProposalEditorProps {
  title: string;
  initialData?: Partial<DAOProposalData> | null;
  onChange?: (data: DAOProposalData) => void;
  mode?: 'new' | 'editing';
}

const DAOProposalEditor: React.FC<DAOProposalEditorProps> = ({
  title,
  initialData = null,
  onChange,
  mode = 'new',

}) => {
  const [data, setData] = useState<DAOProposalData>(() => {
    const defaultData: DAOProposalData = {
      title: title,
      author: '',
      authorTwitter: '',
      authorDiscord: '',
      dao: '',
      date: new Date().toISOString().split('T')[0],
      fundingRequest: '',
      voteOptions: ['For', 'Against', 'Abstain'],
      abstract: '',
      background: '',
      solution: {
        concept: '',
        features: [''],
        technologies: [''],
      },
      valueProposition: {
        community: '',
        dao: '',
        ecosystem: '',
      },
      timeline: [{ phase: '', activity: '', duration: '', deliverables: '' }],
      budget: [{ category: '', amount: '', detail: '' }],
      team: [{ name: '', role: '', bio: '', github: '', portfolio: '' }],
      risks: [{ risk: '', mitigation: '' }],
      kpis: [''],
      conclusion: '',
      walletAddress: '',
      multisigConfig: '',
    };

    if (initialData && mode === 'editing') {
      return { ...defaultData, ...initialData };
    }

    return defaultData;
  });

  const [activeTab, setActiveTab] = useState<string>('basic');
  const [previewMode, setPreviewMode] = useState<boolean>(false);

  const setAndNotify = (updater: (prev: DAOProposalData) => DAOProposalData) => {
    setData((prev) => {
      const newData = updater(prev);
      onChange?.(newData);
      return newData;
    });
  };

  // Utility: Update nested field
  const updateField = (path: string, value: any | ((prev: any) => any)): void => {
  setAndNotify((prev) => {
    const newData = { ...prev };
    const keys = path.split('.');
    let current: any = newData;

    for (let i = 0; i < keys.length - 1; i++) {
      current = current[keys[i]];
    }

    const lastKey = keys[keys.length - 1];
    current[lastKey] = typeof value === "function" ? value(current[lastKey]) : value;

    return newData;
  });
};



  // Utility: Add item to array
  const addArrayItem = (path: string, defaultItem: any = ''): void => {
    setAndNotify((prev) => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]].push(defaultItem);
      return newData;
    });
  };

  // Utility: Remove item from array
  const removeArrayItem = (path: string, index: number): void => {
    setAndNotify((prev) => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]].splice(index, 1);
      return newData;
    });
  };

  // Utility: Update array item
  const updateArrayItem = (path: string, index: number, value: any): void => {
    setAndNotify((prev) => {
      const newData = { ...prev };
      const keys = path.split('.');
      let current: any = newData;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      current[keys[keys.length - 1]][index] = value;
      return newData;
    });
  };

  // Export JSON
  const exportJSON = (): void => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dao-proposal-${data.title.replace(/\s+/g, '-').toLowerCase()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Render Preview
  const renderPreview = () => {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-gray-950">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">🏗️ Proposal: {data.title || '[Project/Initiative Name]'}</h1>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>
              <strong>Author(s):</strong>{' '}
              <a href={`https://twitter.com/${data.authorTwitter}`} className="text-blue-600">
                @{data.authorTwitter}
              </a>
              , Discord: {data.authorDiscord}
            </p>
            <p><strong>DAO:</strong> {data.dao}</p>
            <p><strong>Date:</strong> {data.date}</p>
            <p><strong>Funding Request:</strong> {data.fundingRequest}</p>
            <p><strong>Vote Options:</strong> {data.voteOptions.join(', ')}</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🔍 Abstract / Summary</h2>
          <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">
            {data.abstract || 'Not filled yet...'}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🧩 Background & Problem</h2>
          <div className="whitespace-pre-wrap">{data.background || 'Not filled yet...'}</div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">🛠 Solution & Project Description</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Core Concept</h3>
            <div className="whitespace-pre-wrap">{data.solution.concept || 'Not filled yet...'}</div>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside">
              {data.solution.features.filter((f) => f).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Technologies Used</h3>
            <ul className="list-disc list-inside">
              {data.solution.technologies.filter((t) => t).map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">💰 Budget & Fund Usage</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-3 text-left">Category</th>
                <th className="border border-gray-300 p-3 text-left">Amount</th>
                <th className="border border-gray-300 p-3 text-left">Detail</th>
              </tr>
            </thead>
            <tbody>
              {data.budget.filter((b) => b.category).map((item, idx) => (
                <tr key={idx}>
                  <td className="border border-gray-300 p-3">{item.category}</td>
                  <td className="border border-gray-300 p-3">{item.amount}</td>
                  <td className="border border-gray-300 p-3">{item.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">👥 Team & Contributors</h2>
          {data.team.filter((t) => t.name).map((member, idx) => (
            <div key={idx} className="mb-4 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold">{member.name} ({member.role})</h3>
              <p className="whitespace-pre-wrap">{member.bio}</p>
              {member.github && (
                <p>
                  GitHub:{' '}
                  <a href={member.github} className="text-blue-600">
                    {member.github}
                  </a>
                </p>
              )}
              {member.portfolio && (
                <p>
                  Portfolio:{' '}
                  <a href={member.portfolio} className="text-blue-600">
                    {member.portfolio}
                  </a>
                </p>
              )}
            </div>
          ))}
        </section>
      </div>
    );
  };

  if (previewMode) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="sticky top-0 bg-gray-950 shadow-sm p-4 flex justify-between items-center">
          <button
            onClick={() => setPreviewMode(false)}
            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            <Edit2 size={16} /> Back to Edit
          </button>
          <button
            onClick={exportJSON}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <Download size={16} /> Export JSON
          </button>
        </div>
        {renderPreview()}
      </div>
    );
  }

  return (
    <div className="mx-auto">

      {/* Tabs */}
      <div className="mb-6">
        <nav className="flex space-x-1 border-b">
          {[
            { key: 'basic', label: 'Basic Info' },
            { key: 'content', label: 'Content' },
            { key: 'solution', label: 'Solution' },
            { key: 'timeline', label: 'Timeline' },
            { key: 'budget', label: 'Budget' },
            { key: 'team', label: 'Team' },
            { key: 'risks', label: 'Risks & KPIs' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 border-b-2 font-medium text-sm transition-all duration-200 ${activeTab === tab.key
                ? 'border-blue-500 text-blue-400 shadow-md shadow-blue-500/20'
                : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Form Content */}
      <div className="space-y-6">
        {/* Tab: Basic Info */}
        {activeTab === 'basic' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Author Name</label>
              <input
                type="text"
                value={data.author}
                onChange={(e) => updateField('author', e.target.value)}
                placeholder="Your name"
                className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Twitter Handle</label>
              <input
                type="text"
                value={data.authorTwitter}
                onChange={(e) => updateField('authorTwitter', e.target.value)}
                placeholder="yourhandle"
                className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Discord</label>
              <input
                type="text"
                value={data.authorDiscord}
                onChange={(e) => updateField('authorDiscord', e.target.value)}
                placeholder="yourname#1234"
                className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">DAO Name</label>
              <input
                type="text"
                value={data.dao}
                onChange={(e) => updateField('dao', e.target.value)}
                placeholder="e.g., Uniswap DAO"
                className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Funding Request</label>
              <input
                type="text"
                value={data.fundingRequest}
                onChange={(e) => updateField('fundingRequest', e.target.value)}
                placeholder="e.g., 75,000 ELY + 600 USDC"
                className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
          </div>
        )}

        {/* Tab: Content */}
        {activeTab === 'content' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Abstract / Summary</label>
              <WYSIWYGTextarea
                value={data.abstract}
                onChange={(value) => updateField('abstract', value)}
                placeholder="1-2 paragraphs explaining the core of the proposal: the problem, solution, and main impact. Example: Currently, the [DAO/Protocol X] community faces challenges in..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Background & Problem</label>
              <WYSIWYGTextarea
                value={data.background}
                onChange={(value) => updateField('background', value)}
                placeholder="Explain the context and urgency:&#10;- What problem is the community/protocol facing?&#10;- Is there supporting data? (e.g., declining TVL, user complaints, competitive gaps)&#10;- Why is this problem important to solve now?"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Conclusion & Call to Action</label>
              <WYSIWYGTextarea
                value={data.conclusion}
                onChange={(value) => updateField('conclusion', value)}
                placeholder="This proposal is a concrete step toward... We kindly request community support through a [For] vote so this project can be executed."
              />
            </div>
          </div>
        )}

        {/* Tab: Solution */}
        {activeTab === 'solution' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Core Concept</label>
              <WYSIWYGTextarea
                value={data.solution.concept}
                onChange={(value) => updateField('solution.concept', value)}
                placeholder="What will be built? What is the main goal? Example: We will develop Governance Dashboard 2.0 — a simple web-based interface that enables..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Key Features</label>
              {data.solution.features.map((feature, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={feature}
                    onChange={(e) => updateArrayItem('solution.features', idx, e.target.value)}
                    placeholder="e.g., AI-powered voting preview with summary"
                    className="flex-1 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  <button
                    onClick={() => removeArrayItem('solution.features', idx)}
                    className="p-3 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addArrayItem('solution.features', '')}
                className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <Plus size={16} /> Add Feature
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Technologies Used</label>
              {data.solution.technologies.map((tech, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={tech}
                    onChange={(e) => updateArrayItem('solution.technologies', idx, e.target.value)}
                    placeholder="e.g., Frontend: React + Next.js"
                    className="flex-1 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  <button
                    onClick={() => removeArrayItem('solution.technologies', idx)}
                    className="p-3 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addArrayItem('solution.technologies', '')}
                className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <Plus size={16} /> Add Technology
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Value for Community</label>
                <WYSIWYGTextarea
                  value={data.valueProposition.community}
                  onChange={(value) => updateField('valueProposition.community', value)}
                  placeholder="e.g., Increase governance participation from 12% → target 40% within 6 months"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Value for DAO</label>
                <WYSIWYGTextarea
                  value={data.valueProposition.dao}
                  onChange={(value) => updateField('valueProposition.dao', value)}
                  placeholder="e.g., Improve decision legitimacy due to increased voter turnout"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Value for Ecosystem</label>
                <WYSIWYGTextarea
                  value={data.valueProposition.ecosystem}
                  onChange={(value) => updateField('valueProposition.ecosystem', value)}
                  placeholder="e.g., Dashboard will be open-source and can be adopted by other DAOs"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab: Timeline */}
        {activeTab === 'timeline' && (
          <div>
            <label className="block text-sm font-medium mb-4">Timeline & Milestones</label>
            <DynamicTable
              data={data.timeline}
              onUpdate={(newData) => updateField('timeline', newData)}
              columns={[
                { key: 'phase', label: 'Phase', placeholder: 'e.g., 1' },
                { key: 'activity', label: 'Activity', placeholder: 'e.g., UI/UX Design & Technical Architecture' },
                { key: 'duration', label: 'Duration', placeholder: 'e.g., Weeks 1–2' },
                { key: 'deliverables', label: 'Deliverables', placeholder: 'e.g., Wireframes, technical specs' },
              ]}
            />
          </div>
        )}

        {/* Tab: Budget */}
        {activeTab === 'budget' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-4">Budget & Fund Usage</label>
              <DynamicTable
                data={data.budget}
                onUpdate={(newData) => updateField('budget', newData)}
                columns={[
                  { key: 'category', label: 'Category', placeholder: 'e.g., Development' },
                  { key: 'amount', label: 'Amount', placeholder: 'e.g., 40,000 USDC' },
                  { key: 'detail', label: 'Detail', placeholder: 'e.g., 3 developers (12 weeks @ $1k/week)' },
                ]}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Wallet Address</label>
                <input
                  type="text"
                  value={data.walletAddress}
                  onChange={(e) => updateField('walletAddress', e.target.value)}
                  placeholder="0x..."
                  className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Multisig Configuration</label>
                <input
                  type="text"
                  value={data.multisigConfig}
                  onChange={(e) => updateField('multisigConfig', e.target.value)}
                  placeholder="e.g., 2/3 multisig"
                  className="w-full p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab: Team */}
        {activeTab === 'team' && (
          <div>
            <label className="block text-sm font-medium mb-4">Team & Contributors</label>
            <DynamicTable
              data={data.team}
              onUpdate={(newData) => updateField('team', newData)}
              columns={[
                { key: 'name', label: 'Name', placeholder: '@dev_alice' },
                { key: 'role', label: 'Role', placeholder: 'Lead Developer' },
                { key: 'bio', label: 'Bio', placeholder: '5 years in blockchain, core contributor to [Project Y]' },
                { key: 'github', label: 'GitHub', placeholder: 'https://github.com/dev_alice' },
                { key: 'portfolio', label: 'Portfolio', placeholder: 'https://portfolio.link' },
              ]}
            />
          </div>
        )}

        {/* Tab: Risks & KPIs */}
        {activeTab === 'risks' && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-4">Risks & Mitigation</label>
              <DynamicTable
                data={data.risks}
                onUpdate={(newData) => updateField('risks', newData)}
                columns={[
                  { key: 'risk', label: 'Risk', placeholder: 'e.g., Development delays' },
                  { key: 'mitigation', label: 'Mitigation', placeholder: 'e.g., 2-week buffer; MVP prioritization' },
                ]}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">KPIs & Success Metrics</label>
              {data.kpis.map((kpi, idx) => (
                <div key={idx} className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={kpi}
                    onChange={(e) => updateArrayItem('kpis', idx, e.target.value)}
                    placeholder="e.g., Voting participation increases ≥30% within 3 months"
                    className="flex-1 p-3 border border-gray-600 bg-gray-900 text-white rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  />
                  <button
                    onClick={() => removeArrayItem('kpis', idx)}
                    className="p-3 text-red-500 hover:text-red-700"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
              <button
                onClick={() => addArrayItem('kpis', '')}
                className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                <Plus size={16} /> Add KPI
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default DAOProposalEditor;