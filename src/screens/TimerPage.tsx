import React, { useState } from 'react';
import { TimerConsole } from '../complexes/TimerConsole';
import * as Activity from '../models/Activity';
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
  const [activityLog] = useState(dummyActivities);

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

// /**
//  * Returns remaining time in human readable style.
//  */
// function ht(ms: number): string {
//   const s = Math.ceil(ms / 1000);
//   if (s < 60) {
//     return `${s} sec`;
//   }

//   const m = Math.ceil(s / 60);
//   return `${m} min`;
// }
