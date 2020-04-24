import React, { useState } from 'react';
import { TimerConsole } from '../complexes/TimerConsole';
import { Activity, ActivityFeeling, dummyActivities } from '../models/Activity';
import { useBell } from '../models/Bell';
import { useBeyondSprintEffect } from '../models/Clock';
import { notifyNewSprint } from '../models/Notification';
import { noneTask, settingsTask, TomatoTask } from '../models/Task';
import BasicHead from '../pure/BasicHead';
import MainTabs from '../pure/MainTabs';
import ActivityEditPopup from '../simples/ActivityEditPopup';
import TimerActivityItem from '../simples/TimerActivityItem';
import { TimerForm } from '../simples/TimerForm';
import styles from './index.module.scss';

const TimerPage: React.FC = () => {
  const [refBell, bell] = useBell();
  const [currentTask, setCurrentTask] = useState(noneTask);
  const [activityLog, setActivityLog] = useState<Activity[]>(dummyActivities);
  const [editingActivity, setEditingActivityValue] = useState<Activity | null>(null);
  const [sessionStartAt, setSessionStartAt] = useState(0);

  const setEditingActivity: typeof setEditingActivityValue = (activity) => {
    if (editingActivity && activity) {
      setEditingActivityValue(null);

      // omit timing conflict as it should be OK...
      window.setTimeout(() => setEditingActivityValue(activity), 100);
    } else {
      setEditingActivityValue(activity);
    }
  };

  useBeyondSprintEffect((lastPeriod) => {
    // do nothing if not tracking
    if (currentTask === noneTask) {
      return;
    }

    if (bell.ready) {
      bell.play();
    }

    const lastActivity = activityLog[activityLog.length - 1];
    const startAt = Math.max(lastActivity.endAt, sessionStartAt);

    // add a new activity
    const latestActivity: Activity = {
      endAt: lastPeriod,
      feeling: '',
      id: `${Math.random}`.slice(2),
      startAt,
      title: currentTask.label,
    };
    activityLog.push(latestActivity);
    setActivityLog(activityLog);

    // open activity edit popup
    setEditingActivity(latestActivity);

    notifyNewSprint({ task: currentTask });
  });

  const onTaskSelect = (task: TomatoTask) => {
    if (task === settingsTask) {
      return;
    }

    setCurrentTask(task);
    setSessionStartAt(Date.now());
    notifyNewSprint({ task });
  };

  const onActivityClick = (activity: Activity) => {
    if (editingActivity === activity) {
      setEditingActivity(null);
    } else {
      setEditingActivity(activity);
    }
  };

  const onLastFeelingSelect = (activity: Activity, feeling: ActivityFeeling | null) => {
    if (bell.ready) {
      bell.stop();
    }

    if (activity && feeling !== null) {
      // eslint-disable-next-line no-param-reassign
      activity.feeling = feeling;
      setActivityLog(activityLog);
    }

    setEditingActivity(null);
  };

  return (
    <div className={styles.root}>
      <BasicHead />
      <header className={styles.header}>
        <TimerConsole
          currentTask={currentTask}
          onSelect={onTaskSelect}
        />
      </header>
      <div className={styles.body}>
        <div className={styles.activityList}>
          {activityLog.map((activity) => (
            <TimerActivityItem
              activity={activity}
              key={activity.endAt}
              onClick={onActivityClick}
              selected={activity === editingActivity}
            />
          ))}
        </div>
      </div>
      <footer className={styles.footer}>
        <div className="ui-container">
          <TimerForm />
        </div>
      </footer>
      <MainTabs />
      <ActivityEditPopup
        activity={editingActivity}
        onSelect={onLastFeelingSelect}
      />
      <audio
        ref={refBell}
        src="/D0002070098_00000_A_001.m4a"
      />
    </div>
  );
};

export default TimerPage;
