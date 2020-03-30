export type TomatoTask = {
  emoji: string;
  id: string;
  label: string;
}

export const dummyTasks: TomatoTask[] = [
  {
    emoji: '😎',
    id: '',
    label: 'Working',
  },
  {
    emoji: '🎮',
    id: '',
    label: 'Having fun',
  },
  {
    emoji: '🏃🏽',
    id: '',
    label: 'Exercising',
  },
  {
    emoji: '🍵',
    id: '',
    label: 'Having break',
  },
];

export const tasks: TomatoTask[] = Array.from({ length: 9 }, (v, i) => ({
  ...(dummyTasks[Math.floor(Math.random() * dummyTasks.length)]),
  id: String(i),
}));

export const noneTask: TomatoTask = {
  emoji: '⏸️',
  id: 'none',
  label: '(None)',
};

export const settingsTask: TomatoTask = {
  emoji: '⚙',
  id: 'setting',
  label: 'Settings',
};
