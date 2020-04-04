export type TomatoTask = {
  emoji: string;
  id: string;
  label: string;
}

export const tasks: TomatoTask[] = [
  {
    emoji: '😎',
    id: '1',
    label: 'Working',
  },
  {
    emoji: '🎮',
    id: '2',
    label: 'Having fun',
  },
  {
    emoji: '🏃🏽',
    id: '3',
    label: 'Exercising',
  },
  {
    emoji: '🍵',
    id: '4',
    label: 'Having break',
  },
];

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
