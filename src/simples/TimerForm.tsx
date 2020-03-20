import React from 'react';
import './TimerForm.scss';

export const TimerForm: React.FC<{
}> = (props) => {
  return (
    <div className="TimerForm">
      <div className="TimerForm-portForm">
        <input
          type="text"
          className="TimerForm-title"
          placeholder="(e.g. Homework, Game, Exercise)"
        />
        <button className="TimerForm-buttons">
          Add
        </button>
      </div>
    </div>
  );
};
