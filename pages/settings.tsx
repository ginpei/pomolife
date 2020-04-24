import React, { useCallback, useEffect, useState } from 'react';
import {
  isSprintCycle, Settings, SprintCycle, sprintCycles,
} from '../models/Settings';
import { loadSettings, saveSettings } from '../models/SettingsService';
import BasicHead from '../pure/BasicHead';
import MainTabs from '../pure/MainTabs';
import styles from './settings.module.scss';

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [selectedCycle, setSelectedCycle] = useState<SprintCycle>(2);

  const onCycleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    const cycle = Number(value);
    if (!isSprintCycle(cycle)) {
      throw new Error('Invalid cycle');
    }
    setSelectedCycle(cycle);

    setSettings({
      ...settings,
      sprintCycle: cycle,
    });
  }, []);

  useEffect(() => {
    loadSettings().then((loadedSettings) => {
      setSettings(loadedSettings);
      setSelectedCycle(loadedSettings.sprintCycle);
    });
  }, []);

  useEffect(() => {
    if (!settings) {
      return;
    }

    saveSettings(settings);
  }, [settings]);

  if (!settings) {
    return <>…</>;
  }

  return (
    <div className={`SettingsPage ${styles.root}`}>
      <BasicHead title="Settings" />
      <div className="ui-container">
        <h1>Settings</h1>
        <h2>Sprint</h2>
        <label>
          {'Period: '}
          <select onChange={onCycleChange} value={selectedCycle}>
            {sprintCycles.map((cycle) => (
              <PeriodOption cycle={cycle} key={cycle} />
            ))}
          </select>
        </label>
      </div>
      <MainTabs />
    </div>
  );
};

const PeriodOption: React.FC<{ cycle: SprintCycle }> = ({ cycle }) => (
  <option className="PeriodOption" value={cycle}>
    {`${60 / cycle} min`}
  </option>
);

export default SettingsPage;
