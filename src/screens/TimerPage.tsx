import React, { useEffect, useState } from 'react';
import { BasicLayout } from '../complexes/BasicLayout';
import * as Activity from '../models/Activity';
import * as Tomato from '../models/Tomato';
import './TimerPage.scss';

export const TimerPage: React.FC = () => {
  const [tomato, setTomato] = useState(Tomato.getNewTomato());
  const [remaining, setRemaining] = useState(Tomato.getRemaining(tomato));
  const [tm, setTm] = useState(0);
  const [currentActivity, setCurrentActivity] = useState(Activity.getNewActivity());
  const [activityLog] = useState<Activity.Activity[]>([]);

  // render current time
  useEffect(() => {
    window.clearInterval(tm);

    if (!tomato.running) {
      return;
    }

    setTm(window.setInterval(
      () => {
        const newRemaining = Tomato.getRemaining(tomato);
        setRemaining(newRemaining);
        if (newRemaining <= 0) {
          onPauseClick();
        }
      },
      100,
    ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tomato.running])

  const onStartClick = () => {
    setTomato(Tomato.start());

    Activity.setDone(currentActivity);
    activityLog.push(currentActivity);
    setCurrentActivity(Activity.getNewActivity());
  };

  const onPauseClick = () => {
    Tomato.pause(tomato);
    setTomato(tomato);
  };

  const onRestartClick = () => {
    Tomato.restart(tomato);
  };

  const onActivityChange = (activity: Activity.Activity) => {
    setCurrentActivity(activity);
  };

  return (
    <BasicLayout className="TimerPage">
      <h1>Timer Page</h1>
      <div>
        Remaining:
        {' '}
        {ht(remaining)}
        {' '}
        ({(Tomato.getProgress(tomato) * 100).toFixed(2)} %)
      </div>
      <div>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onPauseClick}>Pause</button>
        <button onClick={onRestartClick}>Restart</button>
      </div>
      <ActivityForm
        activity={currentActivity}
        onChange={onActivityChange}
      />
      <ul>
        {activityLog.map((activity) => (
          <li key={activity.doneAt}>
            {activity.title || activity.feeling ? (
              <>
                {activity.title}
                {activity.feeling && ` ${Activity.getEmoji(activity.feeling)}`}
              </>
            ) : (
              '(No title)'
            )}
          </li>
        ))}
      </ul>
    </BasicLayout>
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
