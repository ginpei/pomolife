import { useEffect, useState } from "react";

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

  return [now];
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

export function toSprintTime(d: Date): string {
  const hh = to2digits(d.getHours());
  const mm = to2digits(d.getMinutes());
  return `${hh}:${mm}`;
}

function to2digits(n: number) {
  if (n < 0 || 100 <= n) {
    throw new Error('Number must be equal to or more than zero, and less than 100');
  }

  const integer = Math.floor(n);

  if (n < 10) {
    return `0${integer}`;
  }

  return `${integer}`
}
