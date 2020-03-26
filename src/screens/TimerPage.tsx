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
  const [activityLog, setActivityLog] = useState<Activity.Activity[]>([]);
  const [popupVisible, setPopupVisible] = useState(false);

  useBeyondSprintEffect((lastPeriod) => {
    // do nothing if not tracking
    if (currentTask === noneTask) {
      return;
    }

    bell.currentTime = 0;
    bell.play();

    activityLog.push({
      doneAt: lastPeriod,
      elapse: 0,
      feeling: '',
      title: currentTask.label,
    });
    setActivityLog(activityLog);

    setPopupVisible(true);
  });

  const onTaskSelect = (task: TomatoTask) => {
    if (task === settingsTask) {
      return;
    }

    setCurrentTask(task);
  };

  const onLastFeelingSelect = (feeling: Activity.ActivityFeeling) => {
    bell.pause();

    const lastActivity = activityLog[activityLog.length - 1];
    if (!lastActivity) {
      return;
    }

    lastActivity.feeling = feeling;
    setActivityLog(activityLog);

    setPopupVisible(false);
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
        onSelect={onLastFeelingSelect}
        visible={popupVisible}
      />
    </div>
  );
};

const FeelingPopup: React.FC<{
  onSelect: (feeling: Activity.ActivityFeeling) => void;
  visible: boolean;
}> = ({ onSelect, visible }) => {
  const feelings: Activity.ActivityFeeling[] = ['great', 'good', 'bad'];

  return (
    <div className="TimerPage-FeelingPopup" data-visible={visible}>
      <div className="ui-container">
        <div className="TimerPage-FeelingPopup-inner">
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
                onClick={onSelect}
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
