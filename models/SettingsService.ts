import { useReducer } from 'react';
import { isSprintCycle, Settings, SprintCycle } from './Settings';

const storageKey = 'pomolife-settings';

export const defaultSettings: Settings = {
  sprintCycle: 2,
};

export async function loadSettings(): Promise<Settings> {
  const json = localStorage.getItem(storageKey);
  if (!json) {
    return defaultSettings;
  }

  const data = JSON.parse(json);

  const sprintCycle = Number(data.sprintCycle);
  if (!isSprintCycle(sprintCycle)) {
    throw new Error('Invalid sprint cycle');
  }

  return {
    sprintCycle,
  };
}

export async function saveSettings(settings: Settings): Promise<void> {
  const json = JSON.stringify(settings);
  localStorage.setItem(storageKey, json);
}

export type SettingsAction =
  | SetWholeSettingsAction
  | SetSprintCycleAction

export type SetWholeSettingsAction = {
  type: 'settings/whole/set';
  data: Settings;
}

export type SetSprintCycleAction = {
  type: 'settings/sprintCycle/set';
  data: {
    sprintCycle: SprintCycle;
  };
}

export function useSettingsReducer(initialState: Settings | null = null) {
  return useReducer((state: Settings | null, action: SettingsAction) => {
    const { data, type } = action;

    if (type === 'settings/whole/set') {
      return { ...data };
    }

    if (type === 'settings/sprintCycle/set') {
      return { ...state, sprintCycle: data.sprintCycle };
    }

    return state;
  }, initialState);
}
