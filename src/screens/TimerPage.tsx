import React, { useState, createRef } from 'react';
import { TimerConsole } from '../complexes/TimerConsole';
import * as Activity from '../models/Activity';
import { TimerActivityItem } from '../simples/TimerActivityItem';
import { TimerForm } from '../simples/TimerForm';
import './TimerPage.scss';
import { useBeyondSprintEffect } from '../models/Clock';

export const TimerPage: React.FC = () => {
  const [activityLog] = useState(Activity.dummyActivities);

  return (
    <div className="TimerPage">
      <header className="TimerPage-header">
        <TimerConsole />
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
      <ChimePopup />
    </div>
  );
};

const ChimePopup: React.FC = () => {
  const url = '/D0002070098_00000_A_001.m4a';
  const [bell] = useState(new Audio(url));
  const [visible, setVisible] = useState(false);

  useBeyondSprintEffect(() => {
    setVisible(true);
    bell.currentTime = 0;
    bell.play();
  });

  const onStopClick = () => {
    setVisible(false);
    bell.pause();
  };

  return (
    <div className="TimerPage-ChimePopup" data-visible={visible}>
      <div className="ui-container">
        <div className="TimerPage-ChimePopup-inner" onClick={onStopClick}>
          <span role="img" aria-label="">🔔</span> Tap to stop ringing
        </div>
      </div>
    </div>
  );
};
