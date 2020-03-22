import React, { useState } from 'react';
import { getSprintTimes, toReadableElapse, toSprintTime, useClock } from '../models/Clock';
import './TimerConsole.scss';

type TomatoTask = {
  emoji: string;
  id: string;
  label: string;
}

const dummyTasks: TomatoTask[] = [
  {
    emoji: '😎',
    id: '',
    label: 'Working',
  },
  {
    emoji: '🎮',
    id: '',
    label: 'Having fun',
  },
  {
    emoji: '🏃🏽',
    id: '',
    label: 'Exercising',
  },
  {
    emoji: '🍵',
    id: '',
    label: 'Having break',
  },
];

const tasks: TomatoTask[] = Array.from({ length: 9 }, (v, i) => ({
  ...(dummyTasks[Math.floor(Math.random() * dummyTasks.length)]),
  id: String(i),
}));

const noneTask: TomatoTask = {
  emoji: '⏸️',
  id: 'none',
  label: '(None)',
};

const settingsTask: TomatoTask = {
  emoji: '⚙',
  id: 'setting',
  label: 'Settings',
};

export const TimerConsole: React.FC<{}> = (props) => {
  const [currentTask, setCurrentTask] = useState(noneTask);
  const [now] = useClock();

  const onTaskClick = (task: TomatoTask) => {
    if (task === settingsTask) {
      return;
    }

    setCurrentTask(task);
  };

  const [dStart, dEnd] = getSprintTimes(now);
  const remaining = dEnd.getTime() - now;

  return (
    <div className="TimerConsole ui-container">
      <h1 className="TimerConsole-heading ui-center">Current Sprint</h1>
      <div className="TimerConsole-clock ui-center">
        {toSprintTime(dStart)} - {toSprintTime(dEnd)}
      </div>
      <div className="TimerConsole-remaining ui-center">
        {toReadableElapse(remaining)}
        <RunningIndicator now={now} />
      </div>
      <div className="TimerConsole-taskList">
        <TaskButton
          active={noneTask === currentTask}
          onClick={onTaskClick}
          task={noneTask}
        />
        {tasks.map((task) => (
          <TaskButton
            active={task === currentTask}
            key={task.id}
            onClick={onTaskClick}
            task={task}
          />
        ))}
        <TaskButton
          active={false}
          onClick={onTaskClick}
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
      className="TimerConsole-TaskButton"
      data-active={props.active}
      data-system={isSystem}
      onClick={onClick}
    >
      <span role="img" aria-label="">{task.emoji}</span>
      <span className="TimerConsole-TaskButton-label">{task.label}</span>
    </button>
  );
};

const RunningIndicator: React.FC<{ now: number }> = ({ now }) => {
  const on = now !== 0 && now % 1000 < 500;

  return (
    <span
      className="TimerConsole-RunningIndicator"
      data-on={on}
    >
      .
    </span>
  );
};
