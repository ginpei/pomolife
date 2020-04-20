// @ts-check

/**
 * @typedef {import('../../models/Task').TomatoTask} TomatoTask
 */

/**
 * @typedef {Worker & WindowOrWorkerGlobalScope & {
 *   addEventListener(type: 'notificationclick', listener: NotificationEventListener): void;
 *   registration: {
 *     showNotification(title: string, options?: NotificationOptions): void;
 *   }
 * }} ServiceWorkerScope
 */

/**
 * @typedef {Event & {
 *   action: string;
 *   notification: Notification;
 * }} NotificationEvent
 */

/**
 * @typedef {(
 *   event: NotificationEvent
 * ) => void} NotificationEventListener
 */

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line no-restricted-globals
setUp(self);

/**
 * @param {ServiceWorkerScope} sw
 */
function setUp(sw) {
  // eslint-disable-next-line no-param-reassign
  sw.onmessage = ({ data: { type, data } }) => {
    if (typeof type !== 'string') {
      throw new Error('Type must be string');
    }

    if (type === 'sprint/update') {
      console.log('# data', data);
      showSprintUpdate(sw, data);
    }
  };
}

/**
 * @param {ServiceWorkerScope} sw
 * @param {string} message
 * @param {NotificationOptions} [options]
 */
function show(sw, message, options) {
  if (Notification.permission !== 'granted') {
    throw new Error('Notification has not yet been granted');
  }

  sw.registration.showNotification(message, {
    ...options,
    icon: '/images/icons/icon-512x512.png',
  });
}

/**
 * @param {ServiceWorkerScope} sw
 * @param {{ task: TomatoTask}} data
 */
async function showSprintUpdate(sw, { task }) {
  await show(sw, task.label);

  sw.addEventListener('notificationclick', (event) => {
    event.notification.close();
  });
}
