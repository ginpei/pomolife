import React from 'react';
import { getSprintTimes, toReadableElapse, toSprintTime, useClock } from '../models/Clock';
import { noneTask, settingsTask, tasks, TomatoTask } from '../models/Task';
import styles from './TimerConsole.module.scss';

export const TimerConsole: React.FC<{
  currentTask: TomatoTask;
  onSelect: (task: TomatoTask) => void;
}> = ({ currentTask, onSelect }) => {
  const tracking = currentTask !== noneTask;

  const [now] = useClock();

  const [dStart, dEnd] = getSprintTimes(now);
  const remaining = dEnd.getTime() - now;

  return (
    <div className={`${styles.TimerConsole} ui-container`}>
      <h1 className={`${styles.heading} ui-center`}>Current Sprint</h1>
      <div className={`${styles.clock} ui-center`}>
        {toSprintTime(dStart)} - {toSprintTime(dEnd)}
      </div>
      <div className={`${styles.remaining} ui-center`} data-active={tracking}>
        {toReadableElapse(remaining)}
        <RunningIndicator now={now} />
      </div>
      <div className={styles.taskList}>
        <TaskButton
          active={noneTask === currentTask}
          onClick={onSelect}
          task={noneTask}
        />
        {tasks.map((task) => (
          <TaskButton
            active={task === currentTask}
            key={task.id}
            onClick={onSelect}
            task={task}
          />
        ))}
        <TaskButton
          active={false}
          onClick={onSelect}
          isSystem={true}
          task={settingsTask}
        />
      </div>
    </div>
  );
};

const TaskButton: React.FC<{
  active: boolean;
  onClick: (task: TomatoTask) => void;
  isSystem?: boolean;
  task: TomatoTask;
}> = (props) => {
  const { isSystem = false, task } = props;

  const onClick = () => props.onClick(task);

  return (
    <button
      className={styles.TaskButton}
      data-active={props.active}
      data-system={isSystem}
      onClick={onClick}
    >
      <span role="img" aria-label="">{task.emoji}</span>
      <span className={styles.TaskButton_label}>{task.label}</span>
    </button>
  );
};

const RunningIndicator: React.FC<{ now: number }> = ({ now }) => {
  const on = now !== 0 && now % 1000 < 500;

  return (
    <span
      className={styles.RunningIndicator}
      data-on={on}
    >
      .
    </span>
  );
};
