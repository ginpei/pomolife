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

function getNewTomato(): Tomato {
  return {
    period: 25 * 60 * 1000,
    remaining: 0,
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
  return tomato.running
    ? tomato.remaining - (now - tomato.startedAt)
    : tomato.remaining;
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
  tomato.running = true;
  tomato.startedAt = now;
}
