import React from 'react';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { toReadableTime } from '../../models/Clock';
import DateTime from './DateTime';

describe('<DateTime>', () => {
  let component: ReactTestRenderer;
  let now: number;

  beforeEach(() => {
    now = Date.now();
    component = renderer.create(
      <DateTime time={now} />,
    );
  });

  it('renders time', () => {
    expect(component.toJSON()).toBe(toReadableTime(now));
  });
});
