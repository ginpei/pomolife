import React, { useState } from 'react';
import { TimerConsole } from '../complexes/TimerConsole';
import * as Activity from '../models/Activity';
import { useBeyondSprintEffect } from '../models/Clock';
import { noneTask, settingsTask, TomatoTask } from '../models/Task';
import { TimerActivityItem } from '../simples/TimerActivityItem';
import { TimerForm } from '../simples/TimerForm';
import './TimerPage.scss';

export const TimerPage: React.FC = () => {
  const url = '/D0002070098_00000_A_001.m4a';
  const [bell] = useState(new Audio(url));
  const [currentTask, setCurrentTask] = useState(noneTask);
  const [activityLog, setActivityLog] = useState<Activity.Activity[]>(Activity.dummyActivities);
  const [editingActivity, setEditingActivity] = useState<Activity.Activity | null>(null);

  useBeyondSprintEffect((lastPeriod) => {
    // do nothing if not tracking
    if (currentTask === noneTask) {
      return;
    }

    // sound
    bell.currentTime = 0;
    bell.play();

    // add a new activity
    const latestActivity: Activity.Activity = {
      doneAt: lastPeriod,
      elapse: 0,
      feeling: '',
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
  };

  const onActivityClick = (activity: Activity.Activity) => {
    if (editingActivity === activity) {
      setEditingActivity(null);
    } else {
      setEditingActivity(activity);
    }
  };

  const onLastFeelingSelect = (activity: Activity.Activity, feeling: Activity.ActivityFeeling | null) => {
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
              key={activity.doneAt}
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
  activity: Activity.Activity | null;
  onSelect: (activity: Activity.Activity, feeling: Activity.ActivityFeeling | null) => void;
}> = ({ activity, onSelect }) => {
  const feelings: Activity.ActivityFeeling[] = ['great', 'good', 'bad'];

  const visible = activity !== null;

  const onDismissClick = () => onSelect(activity!, null);
  const onFeelingClick = (feeling: Activity.ActivityFeeling) => onSelect(activity!, feeling);

  return (
    <div className="TimerPage-FeelingPopup" data-visible={visible}>
      <div className="ui-container">
        <div className="TimerPage-FeelingPopup-inner">
          <div
            className="TimerPage-FeelingPopup-dismiss"
            onClick={onDismissClick}
          >
            ×
          </div>
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
  feeling: Activity.ActivityFeeling;
  onClick: (feeling: Activity.ActivityFeeling) => void;
}> = ({ feeling, onClick }) => {
  const emoji = Activity.getEmoji(feeling);

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
