import React, { createRef, useState } from 'react';

type BellContext = {
  el: HTMLAudioElement;
  play(): void;
  ready: true;
  stop(): void;
} | {
  ready: false;
}

export function useBell(): [React.RefObject<HTMLAudioElement>, BellContext] {
  const [ref] = useState(createRef<HTMLAudioElement>());

  const el = ref.current
  let context: BellContext = el
    ? createBellContext(el)
    : { ready: false };

  return [ref, context];
}

function createBellContext(el: HTMLAudioElement) {
  const context: BellContext = {
    el,

    ready: true,

    play() {
      el.currentTime = 0;
      el.play();
    },

    stop() {
      el.pause();
    },
  };
  return context;
}
