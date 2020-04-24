export type Settings = {
  /**
   * How many sprints in an hour
   */
  sprintCycle: SprintCycle;
}

export type SprintCycle = 1 | 2 | 4 | 6 | 12 | 60

export const sprintCycles: readonly SprintCycle[] = [1, 2, 4, 6, 12, 60];

export function isSprintCycle(n: number): n is SprintCycle {
  return (sprintCycles as number[]).includes(n);
}
