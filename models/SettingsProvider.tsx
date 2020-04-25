import React, { useEffect } from 'react';
import { useSettingsReducer, loadSettings, SettingsContext } from './SettingsService';

/**
 * @example
 * // 1. prepare you component
 * const MyComponent: React.FC = () => {
 *   // 3. you can use state and reducer
 *   const [settings, reduceSettings] = useSettingsReducer();
 *   return <div />;
 * };
 *
 * // 2. wrap your component
 * const MyComponentProvided = () => (
 *   <SettingsProvider>
 *     <MyComponent />
 *   </SettingsProvider>
 * );
 */
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
