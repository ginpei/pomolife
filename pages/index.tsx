import dynamic from 'next/dynamic';

// TODO remove dynamic import if possible
const TimerPage = dynamic(() => import('./TimerPage'), { ssr: false });

export default () => (<TimerPage />);
