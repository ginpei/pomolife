/**
 * Pomodoro session context.
 * Use `TimerContext.start()` to obtain this.
 */
export type TimerContext = {
  duration: number,
  remaining: number,
  running: boolean,
  sessionStartedAt: number,
}

export function getNewTimerContext(): TimerContext {
  const duration = 25 * 60 * 1000;

  return {
    duration,
    remaining: duration,
    running: false,
    sessionStartedAt: 0,
  };
}

/**
 * Starts a new pomodoro session.
 */
export function start(now = Date.now()): TimerContext {
  const context = getNewTimerContext();
  context.remaining = context.duration;
  context.running = true;
  context.sessionStartedAt = now;
  return context;
}

/**
 * Returns remaining time in milliseconds.
 */
export function getRemaining(context: TimerContext, now = Date.now()) {
  const remaining = context.running
    ? context.remaining - (now - context.sessionStartedAt)
    : context.remaining;
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

  context.remaining -= now - context.sessionStartedAt;
  context.running = false;
  context.sessionStartedAt = 0;
}

/**
 * Restarts paused session.
 */
export function restart(context: TimerContext, now = Date.now()) {
  if (context.running) {
    return;
  }

  context.running = true;
  context.sessionStartedAt = now;
}
