import React, { useEffect } from 'react';
import { useSettingsReducer, loadSettings, SettingsContext } from './SettingsService';

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, reduceSettings] = useSettingsReducer();

  useEffect(() => {
    loadSettings()
      .then((v) => reduceSettings({ data: v, type: 'settings/whole/set' }));
  }, []);

  return (
    <SettingsContext.Provider value={[settings, reduceSettings]}>
      {children}
    </SettingsContext.Provider>
  );
};
