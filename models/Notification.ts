import { TomatoTask } from './Task';

export async function notifyNewSprint(data: {task: TomatoTask}) {
  return postMessage('sprint/update', data);
}

async function postMessage(type: string, data = {}) {
  const registration = await navigator.serviceWorker.getRegistration();
  if (!registration) {
    throw new Error('No registration found');
  }
  const sw = registration.active;
  if (!sw) {
    throw new Error('SW not ready');
  }

  if (Notification.permission !== 'granted') {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      return;
    }
  }

  sw.postMessage({ data, type });
}
