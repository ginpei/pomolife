/**
 * Pomodoro session context.
 * Use `TimerContext.start()` to obtain this.
 */
export type TimerContext = {
  duration: number;
  consumption: number;
  running: boolean;
  sessionStartedAt: number;
}

export function getNewTimerContext(): TimerContext {
  const duration = 25 * 60 * 1000;

  return {
    duration,
    consumption: 0,
    running: false,
    sessionStartedAt: 0,
  };
}

/**
 * Starts a new pomodoro session.
 */
export function start(now = Date.now()): TimerContext {
  const context = getNewTimerContext();
  context.consumption = 0;
  context.running = true;
  context.sessionStartedAt = now;
  return context;
}

/**
 * Returns remaining time in milliseconds.
 */
export function getRemaining(context: TimerContext, now = Date.now()) {
  const elapse = context.running ? now - context.sessionStartedAt : 0;
  const remaining = context.duration - context.consumption - elapse;
  return remaining < 0 ? 0 : remaining;
}

/**
 * Returns remaining time in progress as range of 0-1.
 */
export function getProgress(context: TimerContext, now = Date.now()) {
  return getRemaining(context, now) / context.duration;
}

/**
 * Pauses pomodoro session.
 * @see TimerContext.restart()
 */
export function pause(context: TimerContext, now = Date.now()) {
  if (!context.running) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  context.consumption += now - context.sessionStartedAt;
  // eslint-disable-next-line no-param-reassign
  context.running = false;
  // eslint-disable-next-line no-param-reassign
  context.sessionStartedAt = 0;
}

/**
 * Restarts paused session.
 */
export function restart(context: TimerContext, now = Date.now()) {
  if (context.running) {
    return;
  }

  // eslint-disable-next-line no-param-reassign
  context.running = true;
  // eslint-disable-next-line no-param-reassign
  context.sessionStartedAt = now;
}
