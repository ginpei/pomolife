/**
 * Pomodoro session context.
 * Use `Tomato.start()` to obtain this.
 */
export type Tomato = {
  period: number,
  remaining: number,
  running: boolean,
  startedAt: number,
}

export function getNewTomato(): Tomato {
  const period = 25 * 60 * 1000;

  return {
    period,
    remaining: period,
    running: false,
    startedAt: 0,
  };
}

/**
 * Starts a new pomodoro session.
 */
export function start(now = Date.now()): Tomato {
  const tomato = getNewTomato();
  tomato.remaining = tomato.period;
  tomato.running = true;
  tomato.startedAt = now;
  return tomato;
}

/**
 * Returns remaining time in milliseconds.
 */
export function getRemaining(tomato: Tomato, now = Date.now()) {
  const remaining = tomato.running
    ? tomato.remaining - (now - tomato.startedAt)
    : tomato.remaining;
  return remaining < 0 ? 0 : remaining;
}

/**
 * Returns remaining time in progress as range of 0-1.
 */
export function getProgress(tomato: Tomato, now = Date.now()) {
  return getRemaining(tomato, now) / tomato.period;
}

/**
 * Pauses pomodoro session.
 * @see Tomato.restart()
 */
export function pause(tomato: Tomato, now = Date.now()) {
  if (!tomato.running) {
    return;
  }

  tomato.remaining -= now - tomato.startedAt;
  tomato.running = false;
  tomato.startedAt = 0;
}

/**
 * Restarts paused session.
 */
export function restart(tomato: Tomato, now = Date.now()) {
  if (tomato.running) {
    return;
  }

  tomato.running = true;
  tomato.startedAt = now;
}
