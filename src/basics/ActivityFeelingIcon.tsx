import React from 'react';
import { ActivityFeeling } from '../models/Activity';

export const ActivityFeelingIcon: React.FC<{
  feeling: ActivityFeeling;
}> = ({ feeling }) => {
  if (feeling === 'great') {
    return (<>😄</>);
  }

  if (feeling === 'good') {
    return (<>🙂</>);
  }

  if (feeling === 'bad') {
    return (<>😰</>);
  }

  return null;
};
