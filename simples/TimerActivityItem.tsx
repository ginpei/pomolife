import React from 'react';
import ActivityFeelingIcon from '../basics/ActivityFeelingIcon';
import { Activity } from '../models/Activity';
import styles from './TimerActivityItem.module.scss';
import { toReadableTime, toReadableElapse } from '../models/Clock';

const TimerActivityItem: React.FC<{
  activity: Activity;
  onClick: (activity: Activity) => void;
  selected: boolean;
}> = ({ activity, onClick, selected }) => {
  const onItemClick = () => onClick(activity);
  return (
    <article
      className={styles.TimerActivityItem}
      data-selected={selected}
      onClick={onItemClick}
    >
      <div className={`${styles.container} ui-container`}>
        <span className={styles.feeling}>
          <ActivityFeelingIcon feeling={activity.feeling} />
        </span>
        <h1 className={styles.title}>
          {activity.title}
        </h1>
        <span className={styles.time}>
          {toReadableTime(activity.startAt)}-
          ({toReadableElapse(activity.endAt - activity.startAt)})
        </span>
        <span className={styles.settings}>
          ⚙
        </span>
      </div>
    </article>
  );
};

export default TimerActivityItem;
