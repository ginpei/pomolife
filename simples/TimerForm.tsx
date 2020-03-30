import React from 'react';
import styles from './TimerForm.module.scss';

export const TimerForm: React.FC<{
}> = (props) => {
  return (
    <div className={styles.TimerForm}>
      <div className={styles.portForm}>
        <input
          type="text"
          className={styles.title}
          placeholder="(e.g. Homework, Game, Exercise)"
        />
        <button className={styles.buttons}>
          Add
        </button>
      </div>
    </div>
  );
};
