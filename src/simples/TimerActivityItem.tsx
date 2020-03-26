import React from 'react';
import { ActivityFeelingIcon } from '../basics/ActivityFeelingIcon';
import { Activity } from '../models/Activity';
import './TimerActivityItem.scss';

export const TimerActivityItem: React.FC<{
  activity: Activity;
  onClick: (activity: Activity) => void;
  selected: boolean;
}> = ({ activity, onClick, selected }) => {
  const onItemClick = () => onClick(activity);

  return (
    <article
      className="TimerActivityItem"
      data-selected={selected}
      onClick={onItemClick}
    >
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
