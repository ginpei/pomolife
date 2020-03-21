import React, { useState } from 'react';
import { TimerConsole } from '../complexes/TimerConsole';
import * as Activity from '../models/Activity';
import { TimerActivityItem } from '../simples/TimerActivityItem';
import { TimerForm } from '../simples/TimerForm';
import './TimerPage.scss';

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
    </div>
  );
};
