import React from 'react';
import './TimerConsole.scss';

export const TimerConsole: React.FC<{}> = (props) => {
  return (
    <div className="TimerConsole ui-container">
      <h1 className="TimerConsole-heading ui-center">Current Sprint</h1>
      <div className="TimerConsole-clock ui-center">
        12:00 - 12:30
      </div>
      <div className="TimerConsole-remaining ui-center">
        25 min
        <span className="TimerConsole-runningIndicator">.</span>
      </div>
      <button className="TimerConsole-toggle">
        <span role="img" aria-label="Play">▶️</span>
        <span className="TimerConsole-toggleLabel">Logging</span>
      </button>
      <input
        className="TimerConsole-task"
        placeholder="Task (e.g. Homework, Game, Exercise)"
        type="text"
      />
    </div>
  );
};
