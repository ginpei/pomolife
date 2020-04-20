import React from 'react';
import MainTabs from '../pure/MainTabs';
import styles from './settings.module.scss';

// eslint-disable-next-line arrow-body-style
const SettingsPage: React.FC = () => {
  return (
    <div className={`SettingsPage ${styles.root}`}>
      <div className="ui-container">
        <h1>Settings</h1>
      </div>
      <MainTabs />
    </div>
  );
};

export default SettingsPage;
