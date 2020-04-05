import React from 'react';
import { toReadableTime } from '../models/Clock';

/**
 * This renders the given time in user's timezone.
 * @example
 * const DateTime = dynamic(
 *   () => import('../basics/DateTime'),
 *   { ssr: false },
 * );
 * @example
 * <DateTime time={Date.now()} />
 */
const DateTime: React.FC<{
  time: number;
  format?: '';
}> = ({ format, time }) => {
  const sTime = toReadableTime(time);
  return <>{sTime}</>;
};

export default DateTime;
