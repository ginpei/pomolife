import * as Tomato from './Tomato';

describe('Tomato', () => {
  const min25 = 25 * 60 * 1000;

  let tomato: Tomato.Tomato;
  let startedAt: number;
  let now: number;

  beforeEach(() => {
    startedAt = Date.now();
    tomato = Tomato.start(startedAt);

    now = new Date(startedAt + 1234).getTime();
  });

  describe('start()', () => {
    it('sets tomato running', () => {
      expect(tomato.running).toBe(true);
    });
  });

  describe('getRemaining()', () => {
    it('returns clean remaining', () => {
      expect(Tomato.getRemaining(tomato, now)).toBe(min25 - 1234);
    });

    it('returns paused remaining', () => {
      Tomato.pause(tomato, now);
      const remaining = Tomato.getRemaining(tomato, now);
      expect(remaining).toBe(min25 - 1234);
    });

    it('returns restarted remaining', () => {
      Tomato.pause(tomato, now);
      Tomato.restart(tomato, now + 3000);
      const remaining = Tomato.getRemaining(tomato, now + 3000 + 1000);
      expect(remaining).toBe(min25 - (1234 + 1000));
    });
  });

  describe('getProgress()', () => {
    it('returns progress in range 0-1', () => {
      expect(Tomato.getProgress(tomato, now + (min25 / 2))).toBeCloseTo(0.5);
    });
  });

  describe('pause()', () => {
    beforeEach(() => {
      Tomato.pause(tomato, now);
    });

    it('stops running', () => {
      expect(tomato.running).toBe(false);
    });

    it('merges elapse into remaining', () => {
      expect(tomato.remaining).toBe(min25 - 1234);
    });

    it('does not break if already paused', () => {
      Tomato.pause(tomato, now);
      expect(tomato.remaining).toBe(min25 - 1234);
    });
  });

  describe('restart()', () => {
    beforeEach(() => {
      Tomato.pause(tomato, now);
      Tomato.restart(tomato, now + 3000);
    });

    it('starts running', () => {
      expect(tomato.running).toBe(true);
    });

    it('does not break if not paused', () => {
      Tomato.restart(tomato, now + 4000);
      expect(tomato.startedAt).toBe(now + 3000);
    });
  });
});
