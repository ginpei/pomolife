import React, { useState, useEffect } from 'react';
import { BasicLayout } from '../complexes/BasicLayout';

const TimerPage: React.FC = () => {
  const [originalPeriod, setOriginalPeriod] = useState(25 * 60 * 1000);
  const [period, setPeriod] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [running, setRunning] = useState(false);
  const [startedAt, setStartedAt] = useState(0);
  const [tm, setTm] = useState(0);

  // render current time
  useEffect(() => {
    window.clearInterval(tm);

    if (running) {
      setTm(window.setInterval(
        () => {
          const newRemaining = Math.max(0, period - (Date.now() - startedAt));
          setRemaining(newRemaining);
          if (newRemaining <= 0) {
            onStopClick();
          }
        },
        100,
      ));
    } else {
      setRemaining(0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [period, running, startedAt])

  const onStartClick = () => {
    setPeriod(originalPeriod);
    setStartedAt(Date.now());
    setRunning(true);
  };

  const onStopClick = () => {
    setRunning(false);
  };

  return (
    <BasicLayout className="TimerPage">
      <h1>Timer Page</h1>
      <div>
        Remaining:
        {' '}
        {ht(remaining)}
        {' '}
        ({(Math.ceil(remaining / originalPeriod * 10000) / 100).toFixed(2)} %)
      </div>
      <div>
        <button onClick={onStartClick}>Start</button>
        <button onClick={onStopClick}>Stop</button>
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
