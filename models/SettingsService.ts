import { Settings, isSprintCycle } from './Settings';

const storageKey = 'pomolife-settings';

export async function loadSettings(): Promise<Settings> {
  const json = localStorage.getItem(storageKey);
  if (!json) {
    return {
      sprintCycle: 2,
    };
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
