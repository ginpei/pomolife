import React, { useState, useEffect } from 'react';
import { BasicLayout } from '../complexes/BasicLayout';
import * as Tomato from '../models/Tomato';

const TimerPage: React.FC = () => {
  const [tomato, setTomato] = useState(Tomato.getNewTomato());
  const [tm, setTm] = useState(0);
  const [remaining, setRemaining] = useState(Tomato.getRemaining(tomato));

  // render current time
  useEffect(() => {
    window.clearInterval(tm);

    if (!tomato.running) {
      return;
    }

    setTm(window.setInterval(
      () => {
        const newRemaining = Tomato.getRemaining(tomato);
        setRemaining(newRemaining);
        if (newRemaining <= 0) {
          onPauseClick();
        }
      },
      100,
    ));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tomato.running])

  const onStartClick = () => {
    setTomato(Tomato.start());
  };

  const onPauseClick = () => {
    Tomato.pause(tomato);
    setTomato(tomato);
  };

  const onRestartClick = () => {
    Tomato.restart(tomato);
  };

  return (
    <BasicLayout className="TimerPage">
      <h1>Timer Page</h1>
      <div>
        Remaining:
        {' '}
        {ht(remaining)}
        {' '}
        ({(Tomato.getProgress(tomato) * 100).toFixed(2)} %)
      </div>
      <div>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onPauseClick}>Pause</button>
        <button onClick={onRestartClick}>Restart</button>
      </div>
    </BasicLayout>
  );
};

/**
 * Returns remaining time in human readable style.
 */
function ht(ms: number): string {
  const s = Math.ceil(ms / 1000);
  if (s < 60) {
    return `${s} sec`;
  }

  const m = Math.ceil(s / 60);
  return `${m} min`;
}

export default TimerPage;
