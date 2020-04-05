export type Activity = {
  endAt: number;
  feeling: ActivityFeeling;
  id: string;
  startAt: number;
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
    endAt: 0,
    feeling: '',
    id: '',
    startAt: 0,
    title: '',
  };
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
  // eslint-disable-next-line no-param-reassign
  activity.endAt = now;
}

const dummyStartAt = new Date();
dummyStartAt.setMinutes(0);
dummyStartAt.setSeconds(0);
dummyStartAt.setMilliseconds(0);

export const dummyActivities: Activity[] = [
  {
    endAt: 1586021400000,
    feeling: 'great',
    id: '100',
    startAt: 1586019600000,
    title: 'Breaking',
  },
  {
    endAt: 1586025000000,
    feeling: 'bad',
    id: '101',
    startAt: 1586023200000,
    title: 'Breaking',
  },
  {
    endAt: 1586028600000,
    feeling: 'bad',
    id: '102',
    startAt: 1586026800000,
    title: 'Breaking',
  },
  {
    endAt: 1586032200000,
    feeling: 'great',
    id: '103',
    startAt: 1586030400000,
    title: 'Breaking',
  },
  {
    endAt: 1586035800000,
    feeling: 'great',
    id: '104',
    startAt: 1586034000000,
    title: 'Working',
  },
  {
    endAt: 1586039400000,
    feeling: 'great',
    id: '105',
    startAt: 1586037600000,
    title: 'Breaking',
  },
  {
    endAt: 1586043000000,
    feeling: 'great',
    id: '106',
    startAt: 1586041200000,
    title: 'Working',
  },
  {
    endAt: 1586046600000,
    feeling: 'great',
    id: '107',
    startAt: 1586044800000,
    title: 'Breaking',
  },
  {
    endAt: 1586050200000,
    feeling: 'good',
    id: '108',
    startAt: 1586048400000,
    title: 'Breaking',
  },
  {
    endAt: 1586053800000,
    feeling: 'great',
    id: '109',
    startAt: 1586052000000,
    title: 'Working',
  },
];
