import React, { useCallback, useEffect, useState } from 'react';
import BasicHead from '../components/pure/BasicHead';
import MainTabs from '../components/pure/MainTabs';
import { isSprintCycle, SprintCycle, sprintCycles } from '../models/Settings';
import { loadSettings, saveSettings, useSettingsReducer } from '../models/SettingsService';
import styles from './settings.module.scss';

const SettingsPage: React.FC = () => {
  const [settings, reduceSettings] = useSettingsReducer();
  const [selectedCycle, setSelectedCycle] = useState<SprintCycle>(2);

  const onCycleChange = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    const cycle = Number(value);
    if (!isSprintCycle(cycle)) {
      throw new Error('Invalid cycle');
    }
    setSelectedCycle(cycle);

    reduceSettings({
      data: { sprintCycle: cycle },
      type: 'settings/sprintCycle/set',
    });
  }, []);

  useEffect(() => {
    loadSettings().then((loadedSettings) => {
      reduceSettings({
        data: loadedSettings,
        type: 'settings/whole/set',
      });

      // initial values
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
