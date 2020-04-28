import React from 'react';
import { ActivityFeeling } from '../../models/Activity';

const ActivityFeelingIcon: React.FC<{
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

export default ActivityFeelingIcon;
