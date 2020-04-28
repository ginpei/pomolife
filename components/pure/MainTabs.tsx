import React, { useEffect, useMemo, useState } from 'react';
import styles from './MainTabs.module.scss';

// eslint-disable-next-line arrow-body-style
const MainTabs: React.FC = () => {
  return (
    <div className={`MainTabs ${styles.root}`}>
      <div className={`ui-container ${styles.container}`}>
        <TabItem link="/">🏠</TabItem>
        <TabItem link="/logs">📊</TabItem>
        <TabItem link="/settings">⚙</TabItem>
      </div>
    </div>
  );
};

const TabItem: React.FC<{ link: string }> = ({ link, children }) => {
  const [pathname, setPathname] = useState('');

  const on = useMemo(() => link === pathname, [pathname]);

  useEffect(() => setPathname(window.location.pathname), []);

  return (
    <a className={styles.TabItem} data-on={on} href={link}>
      {children}
    </a>
  );
};

export default MainTabs;
