import React, { useState } from 'react';
import { TimerConsole } from '../complexes/TimerConsole';
import { Activity, ActivityFeeling, dummyActivities, getEmoji } from '../models/Activity';
import { useBeyondSprintEffect } from '../models/Clock';
import { noneTask, settingsTask, TomatoTask } from '../models/Task';
import { TimerActivityItem } from '../simples/TimerActivityItem';
import { TimerForm } from '../simples/TimerForm';
import './TimerPage.scss';

export const TimerPage: React.FC = () => {
  const url = '/D0002070098_00000_A_001.m4a';
  const [bell] = useState(new Audio(url));
  const [currentTask, setCurrentTask] = useState(noneTask);
  const [activityLog, setActivityLog] = useState<Activity[]>(dummyActivities);
  const [editingActivity, setEditingActivityValue] = useState<Activity | null>(null);
  const [sessionStartAt, setSessionStartAt] = useState(0);

  const setEditingActivity: typeof setEditingActivityValue = (activity) => {
    if (editingActivity && activity) {
      setEditingActivityValue(null);

      // omit timing conflict as it should be OK...
      window.setTimeout(() => setEditingActivityValue(activity), 100);
    } else {
      setEditingActivityValue(activity);
    }
  };

  useBeyondSprintEffect((lastPeriod) => {
    // do nothing if not tracking
    if (currentTask === noneTask) {
      return;
    }

    // sound
    bell.currentTime = 0;
    bell.play();

    const lastActivity = activityLog[activityLog.length - 1];
    const startAt = Math.max(lastActivity.endAt, sessionStartAt);

    // add a new activity
    const latestActivity: Activity = {
      endAt: lastPeriod,
      feeling: '',
      id: `${Math.random}`.slice(2),
      startAt,
      title: currentTask.label,
    };
    activityLog.push(latestActivity);
    setActivityLog(activityLog);

    // open activity edit popup
    setEditingActivity(latestActivity);
  });

  const onTaskSelect = (task: TomatoTask) => {
    if (task === settingsTask) {
      return;
    }

    setCurrentTask(task);
    setSessionStartAt(Date.now());
  };

  const onActivityClick = (activity: Activity) => {
    if (editingActivity === activity) {
      setEditingActivity(null);
    } else {
      setEditingActivity(activity);
    }
  };

  const onLastFeelingSelect = (activity: Activity, feeling: ActivityFeeling | null) => {
    bell.pause();

    if (activity && feeling !== null) {
      activity.feeling = feeling;
      setActivityLog(activityLog);
    }

    setEditingActivity(null);
  };

  return (
    <div className="TimerPage">
      <header className="TimerPage-header">
        <TimerConsole
          currentTask={currentTask}
          onSelect={onTaskSelect}
        />
      </header>
      <div className="TimerPage-body">
        <div className="TimerPage-activityList">
          {activityLog.map((activity) => (
            <TimerActivityItem
              activity={activity}
              key={activity.endAt}
              onClick={onActivityClick}
              selected={activity === editingActivity}
            />
          ))}
        </div>
      </div>
      <footer className="TimerPage-footer">
        <div className="ui-container">
          <TimerForm />
        </div>
      </footer>
      <FeelingPopup
        activity={editingActivity}
        onSelect={onLastFeelingSelect}
      />
    </div>
  );
};

const FeelingPopup: React.FC<{
  activity: Activity | null;
  onSelect: (activity: Activity, feeling: ActivityFeeling | null) => void;
}> = ({ activity, onSelect }) => {
  const feelings: ActivityFeeling[] = ['great', 'good', 'bad'];

  const visible = activity !== null;

  const onDismissClick = () => onSelect(activity!, null);
  const onFeelingClick = (feeling: ActivityFeeling) => onSelect(activity!, feeling);

  return (
    <div className="TimerPage-FeelingPopup" data-visible={visible}>
      <div className="ui-container">
        <div className="TimerPage-FeelingPopup-inner">
          <button
            className="TimerPage-FeelingPopup-dismiss"
            onClick={onDismissClick}
          >
            ×
          </button>
          <h1 className="TimerPage-FeelingPopup-heading">
            <span role="img" aria-label="">🔔</span>
            {' '}
            How was the sprint?
          </h1>
          <div className="TimerPage-FeelingPopup-feelingList">
            {feelings.map((feeling) => (
              <FeelingButton
                feeling={feeling}
                key={feeling}
                onClick={onFeelingClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeelingButton: React.FC<{
  feeling: ActivityFeeling;
  onClick: (feeling: ActivityFeeling) => void;
}> = ({ feeling, onClick }) => {
  const emoji = getEmoji(feeling);

  let text;
  if (feeling === 'great') {
    text = 'Great!';
  } else if (feeling === 'good') {
    text = 'Good'
  } else if (feeling === 'bad') {
    text = 'Bad...'
  }

  const onButtonClick = () => onClick(feeling);

  return (
    <button className="TimerPage-FeelingButton" onClick={onButtonClick}>
      {emoji}
      <br/>
      {text}
    </button>
  );
};
