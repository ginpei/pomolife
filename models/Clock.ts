import { useEffect, useState } from 'react';
import { SprintCycle } from './Settings';

/**
 * @example
 * const [now] = useClock();
 */
export function useClock() {
  const [now, setNow] = useState(0);

  useEffect(() => {
    const tm = window.setInterval(() => setNow(Date.now()), 100);
    return () => window.clearTimeout(tm);
  }, []);

  // use Date.now() here to avoid invoking it every time
  // to give it to useState() above
  return [now || Date.now()];
}

export function useBeyondSprintEffect(
  sprintCycle: SprintCycle | 0,
  callback: (lastPeriod: number, period: number) => void,
) {
  const [now] = useClock();
  const [curPeriod, setCurPeriod] = useState(0);

  if (sprintCycle === 0) {
    return;
  }

  const [, dEnd] = getSprintTimes(sprintCycle, now);

  const tEnd = dEnd.getTime();
  if (now !== 0 && tEnd !== curPeriod) {
    const lastPeriod = curPeriod;
    setCurPeriod(tEnd);

    const initial = lastPeriod === 0;
    if (!initial) {
      callback(lastPeriod, tEnd);
    }
  }
}

export function getSprintTimes(
  numHourlySprints: SprintCycle,
  now: number,
): [Date, Date] {
  const sprintPeriod = 60 / numHourlySprints; // in min

  const d = new Date(now);
  d.setSeconds(0);
  d.setMilliseconds(0);

  const min = d.getMinutes();
  d.setMinutes(min - (min % sprintPeriod));

  const dEnd = new Date(d.getTime() + sprintPeriod * 1000 * 60);

  return [d, dEnd];
}

/**
 * Returns remaining time in human readable style.
 * @example
 * toReadableElapse(30 * 1000); // => '30 sec'
 * toReadableElapse(30 * 1000 * 60); // => '30 min'
 */
export function toReadableElapse(ms: number): string {
  const s = Math.ceil(ms / 1000);
  if (s < 60) {
    return `${s} sec`;
  }

  const m = Math.ceil(s / 60);
  return `${m} min`;
}

export function toReadableTime(time: number): string {
  const d = new Date(time);
  return toSprintTime(d); // TODO
}

export function toSprintTime(d: Date): string {
  const hh = to2digits(d.getHours());
  const mm = to2digits(d.getMinutes());
  return `${hh}:${mm}`;
}

function to2digits(n: number) {
  if (n < 0 || n >= 100) {
    throw new Error('Number must be equal to or more than zero, and less than 100');
  }

  const integer = Math.floor(n);

  if (n < 10) {
    return `0${integer}`;
  }

  return `${integer}`;
}
