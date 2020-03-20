import React from 'react';
import { ActivityFeelingIcon } from '../basics/ActivityFeelingIcon';
import { Activity } from '../models/Activity';
import './TimerActivityItem.scss';

export const TimerActivityItem: React.FC<{
  activity: Activity;
}> = (props) => {
  const { activity } = props;

  return (
    <article className="TimerActivityItem">
      <div className="TimerActivityItem-container ui-container">
        <span className="TimerActivityItem-feeling">
          <ActivityFeelingIcon feeling={activity.feeling} />
        </span>
        <h1 className="TimerActivityItem-title">
          {activity.title}
        </h1>
        <span className="TimerActivityItem-settings">
          ⚙
        </span>
      </div>
    </article>
  );
};
