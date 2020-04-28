import React from 'react';
import MainTabs from '../components/pure/MainTabs';
import styles from './logs.module.scss';

// eslint-disable-next-line arrow-body-style
const LogsPage: React.FC = () => {
  return (
    <div className={`LogsPage ${styles.root}`}>
      <div className="ui-container">
        <h1>Logs</h1>
      </div>
      <MainTabs />
    </div>
  );
};

export default LogsPage;
