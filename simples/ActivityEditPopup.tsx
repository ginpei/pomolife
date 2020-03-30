import React from 'react';
import { Activity, ActivityFeeling, getEmoji } from '../models/Activity';
import styles from './ActivityEditPopup.module.scss';

const ActivityEditPopup: React.FC<{
  activity: Activity | null;
  onSelect: (activity: Activity, feeling: ActivityFeeling | null) => void;
}> = ({ activity, onSelect }) => {
  const feelings: ActivityFeeling[] = ['great', 'good', 'bad'];

  const visible = activity !== null;

  const onDismissClick = () => onSelect(activity!, null);
  const onFeelingClick = (feeling: ActivityFeeling) => onSelect(activity!, feeling);

  return (
    <div className={styles.ActivityEditPopup} data-visible={visible}>
      <div className="ui-container">
        <div className={styles.inner}>
          <button
            className={styles.dismiss}
            onClick={onDismissClick}
          >
            ×
          </button>
          <h1 className={styles.heading}>
            <span role="img" aria-label="">🔔</span>
            {' '}
            How was the sprint?
          </h1>
          <div className={styles.feelingList}>
            {feelings.map((feeling) => (
              <FeelingButton
                feeling={feeling}
                key={feeling}
                onClick={onFeelingClick}
                selected={feeling === activity?.feeling}
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
  selected: boolean;
}> = ({ feeling, onClick, selected }) => {
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
    <button
      className={styles.FeelingButton}
      data-selected={selected}
      onClick={onButtonClick}
    >
      {emoji}
      <br/>
      {text}
    </button>
  );
};

export default ActivityEditPopup;
