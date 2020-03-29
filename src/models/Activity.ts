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
  activity.endAt = now;
}

const dummyStartAt = new Date();
dummyStartAt.setMinutes(0);
dummyStartAt.setSeconds(0);
dummyStartAt.setMilliseconds(0);

function randomOf(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const min30 = 30 * 1000 * 60;

export const dummyActivities: Activity[] = Array.from(
  { length: 10 },
  (_, i) => {
    const startAt = new Date(dummyStartAt.getTime() + (2 * i * min30)).getTime();
    const feeling: ActivityFeeling = randomOf(Object.keys(ActivityFeeling));
    const title = randomOf(['Working', 'Breaking']);
    const item: Activity = {
      endAt: startAt + min30,
      feeling,
      id: `${i + 100}`,
      startAt,
      title,
    };
    return item;
  },
).sort((a, b) => a.endAt - b.endAt);
