export type Activity = {
  doneAt: number;
  elapse: number;
  feeling: ActivityFeeling;
  title: string;
}

export const ActivityFeeling = Object.freeze({
  '': '',
  bad: 'bad',
  good: 'good',
  great: 'great',
});

export type ActivityFeeling = keyof typeof ActivityFeeling;

export function getNewActivity(): Activity {
  return {
    doneAt: 0,
    elapse: 0,
    feeling: '',
    title: '',
  }
}

export function getEmoji(feeling: ActivityFeeling) {
  if (feeling === 'great') {
    return '😄';
  }

  if (feeling === 'good') {
    return '🙂';
  }

  if (feeling === 'bad') {
    return '😰';
  }

  return '';
}

export function setDone(activity: Activity, now = Date.now()) {
  activity.doneAt = now;
}


const dummyActivitySource: Activity[] = [
  {
    doneAt: new Date('2020/04/14 12:00:00.0000Z').getTime(),
    elapse: 25 * 1000 * 60,
    feeling: 'great',
    title: 'hoge',
  },
  {
    doneAt: new Date('2020/04/14 12:25:00.0000Z').getTime(),
    elapse: 25 * 1000 * 60,
    feeling: 'good',
    title: 'fuga',
  },
  {
    doneAt: new Date('2020/04/14 12:50:00.0000Z').getTime(),
    elapse: 25 * 1000 * 60,
    feeling: 'bad',
    title: 'ugh',
  },
];

export const dummyActivities: Activity[] = Array.from(
  { length: 30 },
  (_, i) => {
    const h24 = 24 * 1000 * 60 * 60;
    const sourceIndex = Math.floor(Math.random() * dummyActivitySource.length);
    const source = dummyActivitySource[sourceIndex];
    const item: Activity = {
      ...source,
      doneAt: source.doneAt + Math.floor(Math.random() * h24),
    };
    return item;
  },
).sort((a, b) => a.doneAt - b.doneAt);
