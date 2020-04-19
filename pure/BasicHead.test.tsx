import Head from 'next/head';
import React from 'react';
import renderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';
import BasicHead from './BasicHead';

describe('<BasicHead>', () => {
  let testRenderer: ReactTestRenderer;
  let children: (string | ReactTestInstance)[];
  let elTitle: ReactTestInstance;

  describe('default', () => {
    beforeEach(() => {
      testRenderer = renderer.create(
        <BasicHead />,
      );

      const { root } = testRenderer;
      const elHead = root.children[0] as ReactTestInstance;
      children = elHead.props.children;

      elTitle = children[0] as ReactTestInstance;
    });

    it('renders app name as title', () => {
      expect(elTitle.props.children).toBe('Pomolife');
    });
  });

  describe('with specified title', () => {
    beforeEach(() => {
      testRenderer = renderer.create(
        <BasicHead title="Test page" />,
      );

      const { root } = testRenderer;
      const elHead = root.children[0] as ReactTestInstance;
      children = elHead.props.children;

      elTitle = children[0] as ReactTestInstance;
    });

    it('renders specified text with app name as title', () => {
      expect(elTitle.props.children).toBe('Test page | Pomolife');
    });
  });
});
