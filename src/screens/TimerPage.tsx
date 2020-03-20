import React, { useEffect, useState } from 'react';
import { BasicLayout } from '../complexes/BasicLayout';
import * as Activity from '../models/Activity';
import * as TimerContext from '../models/TimerContext';
import { TimerActivityItem } from '../simples/TimerActivityItem';
import { TimerForm } from '../simples/TimerForm';
import './TimerPage.scss';

const dummyActivitySource: Activity.Activity[] = [
  {
    doneAt: new Date('2020/04/14 12:00:00.0000Z').getTime(),
    elapse: 25 * 1000 * 60,
    feeling: 'great',
    title: 'hoge',
  },
  {
    doneAt: new Date('2020/04/14 12:25:00.0000Z').getTime(),
    elapse: 25 * 1000 * 60,
    feeling: 'good',
    title: 'fuga',
  },
  {
    doneAt: new Date('2020/04/14 12:50:00.0000Z').getTime(),
    elapse: 25 * 1000 * 60,
    feeling: 'bad',
    title: 'ugh',
  },
];

const dummyActivities: Activity.Activity[] = Array.from(
  { length: 30 },
  (_, i) => {
    const h24 = 24 * 1000 * 60 * 60;
    const sourceIndex = Math.floor(Math.random() * dummyActivitySource.length);
    const source = dummyActivitySource[sourceIndex];
    const item: Activity.Activity = {
      ...source,
      doneAt: source.doneAt + Math.floor(Math.random() * h24),
    };
    return item;
  },
).sort((a, b) => a.doneAt - b.doneAt);

export const TimerPage: React.FC = () => {
  const [context, setContext] = useState(TimerContext.getNewTimerContext());
  const [remaining, setRemaining] = useState(TimerContext.getRemaining(context));
  const [tm, setTm] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(Activity.getNewActivity());
  const [activityLog] = useState(
    dummyActivities //.concat(dummyActivities).concat(dummyActivities)
  );

  // render current time
  useEffect(() => {
    window.clearInterval(tm);

    if (!context.running) {
      return;
    }

    setTm(window.setInterval(
      () => {
        const newRemaining = TimerContext.getRemaining(context);
        setRemaining(newRemaining);
        if (newRemaining <= 0) {
          onPauseClick();
        }
      },
      100,
    ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [context.running])

  const onStartClick = () => {
    setContext(TimerContext.start());

    Activity.setDone(currentActivity);
    activityLog.push(currentActivity);
    setCurrentActivity(Activity.getNewActivity());
  };

  const onPauseClick = () => {
    TimerContext.pause(context);
    setContext(context);
  };

  const onRestartClick = () => {
    TimerContext.restart(context);
  };

  const onActivityChange = (activity: Activity.Activity) => {
    setCurrentActivity(activity);
  };

  return (
    <div className="TimerPage">
      <header className="TimerPage-header">
        <TimerPageHeader />
      </header>
      <div className="TimerPage-body">
        <div className="TimerActivityItemList">
          {activityLog.map((activity) => (
            <TimerActivityItem
              activity={activity}
              key={activity.doneAt}
            />
          ))}
        </div>
        <div className="TimerPage-remainingGrid" style={{ opacity: 0.3 }}>
          <div>
            <button onClick={onStartClick}>Start</button>
            <button onClick={onPauseClick}>Pause</button>
            <button onClick={onRestartClick}>Restart</button>
          </div>
          <ActivityForm
            activity={currentActivity}
            onChange={onActivityChange}
          />
        </div>
      </div>
      <footer className="TimerPage-footer">
        <div className="ui-container">
          <TimerForm />
        </div>
      </footer>
    </div>
  );
};

const TimerPageHeader: React.FC<{
}> = (props) => {
  return (
    <div className="TimerPageHeader ui-container">
      <h1 className="TimerPageHeader-heading ui-center">Current Sprint</h1>
      <div className="TimerPageHeader-clock ui-center">
        12:00 - 12:30
      </div>
      <div className="TimerPageHeader-remaining ui-center">
        25 min
        <span className="TimerPageHeader-runningIndicator">.</span>
      </div>
      <button className="TimerPageHeader-toggle">
        <span role="img" aria-label="Play">▶️</span>
        <span className="TimerPageHeader-toggleLabel">Logging</span>
      </button>
      <input
        className="TimerPageHeader-task"
        placeholder="Task (e.g. Homework, Game, Exercise)"
        type="text"
      />
    </div>
  );
};

const ActivityForm: React.FC<{
  activity: Activity.Activity;
  onChange: (activity: Activity.Activity) => void;
}> = (props) => {
  const { feeling, title } = props.activity;

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const onTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      ...props.activity,
      title: event.currentTarget.value,
    });
  };

  const onActivityFeelingChange = (feeling: Activity.ActivityFeeling) => {
    props.onChange({
      ...props.activity,
      feeling,
    });
  };

  return (
    <form className="ActivityForm" onSubmit={onSubmit}>
      <div>
        <label>
          Title:
          {' '}
          <input
            onChange={onTitleChange}
            type="text"
            value={title}
          />
        </label>
      </div>
      <div>
        Feeling:
        {' '}
        <ActivityFeelingInputList
          feeling={feeling}
          onChange={onActivityFeelingChange}
        />
      </div>
    </form>
  );
};

const ActivityFeelingInputList: React.FC<{
  feeling: Activity.ActivityFeeling;
  onChange: (feeling: Activity.ActivityFeeling) => void;
}> = (props) => {
  const feelings: {
    feeling: Activity.ActivityFeeling;
    label: string;
  }[] = [
    { feeling: '', label: '(Empty)' },
    { feeling: 'great', label: 'Great' },
    { feeling: 'good', label: 'Good' },
    { feeling: 'bad', label: 'Bad' },
  ]

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    const feeling = feelings.find((v) => v.feeling === value);

    // this should not happen
    if (!feeling) {
      throw new Error('Invalid value');
    }

    props.onChange(feeling.feeling);
  };

  return (
    <>
      {feelings.map((feeling) => (
        <label
          className="ActivityFeelingInputList-item"
          key={feeling.feeling}
        >
          <input
            checked={feeling.feeling === props.feeling}
            name="feeling"
            onChange={onChange}
            type="radio"
            value={feeling.feeling}
          />
          {feeling.label}
          {feeling.feeling && ` ${Activity.getEmoji(feeling.feeling)}`}
        </label>
      ))}
    </>
  );
};

/**
 * Returns remaining time in human readable style.
 */
function ht(ms: number): string {
  const s = Math.ceil(ms / 1000);
  if (s < 60) {
    return `${s} sec`;
  }

  const m = Math.ceil(s / 60);
  return `${m} min`;
}
