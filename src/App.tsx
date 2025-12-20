
import React, { useState } from 'react';
import { useApp } from './hooks/useApp';
import { PartyConfig } from './components/PartyConfig';
import { CLASSES } from './data/classes';
import classNames from 'classnames';
import './App.css';

// Sub-components (I'll keep them in this file for simplicity or refactor later if huge)
// Ideally, I should put them in separate files as per plan.
// Plan Step 4 said "Build Layout & Navigation".
// Plan Step 6 said "Build Checklist Views".
// I will create separate files for the views to keep it clean.

const Sidebar = () => {
  const { profiles, activeProfileId, createProfile, setActiveProfileId, deleteProfile, exportProfile } = useApp();
  const [newProfileName, setNewProfileName] = useState('');

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newProfileName.trim()) {
      createProfile(newProfileName.trim());
      setNewProfileName('');
    }
  };

  const handleShare = (id: string) => {
    const url = exportProfile(id);
    if (url) {
      navigator.clipboard.writeText(url).then(() => {
        alert('Shareable link copied to clipboard!');
      }).catch(err => {
        console.error('Failed to copy link: ', err);
        alert('Failed to copy link to clipboard. You can manually copy the URL from the address bar if it updated.');
      });
    }
  };

  return (
    <div className="sidebar">
      <h3>Profiles</h3>
      <ul className="profile-list">
        {profiles.map(p => (
          <li key={p.id}
              className={classNames('profile-item', { active: p.id === activeProfileId })}
              onClick={() => setActiveProfileId(p.id)}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</span>
              <div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleShare(p.id); }}
                  title="Share Profile"
                  style={{ marginRight: '4px' }}
                >
                  Share
                </button>
                <button onClick={(e) => { e.stopPropagation(); if(confirm('Delete?')) deleteProfile(p.id); }}>x</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreate} style={{ marginTop: '1rem' }}>
        <input
          value={newProfileName}
          onChange={e => setNewProfileName(e.target.value)}
          placeholder="New Profile..."
          style={{ width: '100%' }}
        />
        <button type="submit" style={{ width: '100%', marginTop: '0.5rem' }}>Create</button>
      </form>
    </div>
  );
};

// ... Placeholder for other views, will import them
import { QuestView } from './components/QuestView';
import { AlchemyView } from './components/AlchemyView';
import { GeneralView } from './components/GeneralView';
import { CharacterView } from './components/CharacterView';

function AppContent() {
  const { activeProfile } = useApp();
  const [activeTab, setActiveTab] = useState('party');

  if (!activeProfile) {
    return <div className="main-content">Please select or create a profile.</div>;
  }

  return (
    <div className="main-content">
      <h1>Might & Magic VII Tracker</h1>

      <div className="tabs">
        <button className={classNames('tab', { active: activeTab === 'party' })} onClick={() => setActiveTab('party')}>Party Config</button>
        <button className={classNames('tab', { active: activeTab === 'quests' })} onClick={() => setActiveTab('quests')}>Quests</button>
        <button className={classNames('tab', { active: activeTab === 'alchemy' })} onClick={() => setActiveTab('alchemy')}>Alchemy</button>
        <button className={classNames('tab', { active: activeTab === 'general' })} onClick={() => setActiveTab('general')}>General</button>
        {activeProfile.party.map((char, idx) => (
          <button
            key={char.id}
            className={classNames('tab', { active: activeTab === `char_${idx}` })}
            onClick={() => setActiveTab(`char_${idx}`)}
          >
            {char.name || `Char ${idx + 1}`} ({CLASSES[char.classId].name})
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 'party' && <PartyConfig />}
        {activeTab === 'quests' && <QuestView />}
        {activeTab === 'alchemy' && <AlchemyView />}
        {activeTab === 'general' && <GeneralView />}
        {activeTab.startsWith('char_') && (
          <CharacterView charIndex={parseInt(activeTab.split('_')[1])} />
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <AppContent />
    </div>
  );
}
