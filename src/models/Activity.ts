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
