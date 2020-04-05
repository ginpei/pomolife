import * as TimerContext from './TimerContext';

describe('TimerContext', () => {
  const min25 = 25 * 60 * 1000;

  let context: TimerContext.TimerContext;
  let startedAt: number;
  let now: number;

  beforeEach(() => {
    startedAt = Date.now();
    context = TimerContext.start(startedAt);

    now = new Date(startedAt + 1234).getTime();
  });

  describe('start()', () => {
    it('sets running', () => {
      expect(context.running).toBe(true);
    });
  });

  describe('getRemaining()', () => {
    it('returns clean remaining', () => {
      expect(TimerContext.getRemaining(context, now)).toBe(min25 - 1234);
    });

    it('returns paused remaining', () => {
      TimerContext.pause(context, now);
      const remaining = TimerContext.getRemaining(context, now);
      expect(remaining).toBe(min25 - 1234);
    });

    it('returns restarted remaining', () => {
      TimerContext.pause(context, now);
      TimerContext.restart(context, now + 3000);
      const remaining = TimerContext.getRemaining(context, now + 3000 + 1000);
      expect(remaining).toBe(min25 - (1234 + 1000));
    });

    it('does not returns negative number', () => {
      const remaining = TimerContext.getRemaining(context, now + min25);
      expect(remaining).toBe(0);
    });
  });

  describe('getProgress()', () => {
    it('returns progress in range 0-1', () => {
      expect(TimerContext.getProgress(context, now + (min25 / 2))).toBeCloseTo(0.5);
    });
  });

  describe('pause()', () => {
    beforeEach(() => {
      TimerContext.pause(context, now);
    });

    it('stops running', () => {
      expect(context.running).toBe(false);
    });

    it('merges elapse into remaining', () => {
      expect(TimerContext.getRemaining(context)).toBe(min25 - 1234);
    });

    it('does not break if already paused', () => {
      TimerContext.pause(context, now);
      expect(TimerContext.getRemaining(context)).toBe(min25 - 1234);
    });
  });

  describe('restart()', () => {
    beforeEach(() => {
      TimerContext.pause(context, now);
      TimerContext.restart(context, now + 3000);
    });

    it('starts running', () => {
      expect(context.running).toBe(true);
    });

    it('does not break if not paused', () => {
      TimerContext.restart(context, now + 4000);
      expect(context.sessionStartedAt).toBe(now + 3000);
    });
  });
});
