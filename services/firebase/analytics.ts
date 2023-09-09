import { getAnalytics, logEvent as logFirebaseEvent } from 'firebase/analytics';

import { isServer } from 'utils/isServer';

export const logEvent = (
  eventName: string,
  eventLocation: string,
  eventProperties: object = {},
) => {
  if (isServer()) return;
  const analytics = getAnalytics();

  while (eventLocation.startsWith('-')) {
    eventLocation = eventLocation.substring(1);
  }

  const properties = {
    ...eventProperties,
    _event: eventLocation,
  };

  console.debug(eventName, properties);

  logFirebaseEvent(analytics, `web_${eventName}`, properties);
};
