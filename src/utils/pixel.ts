import ReactPixel from 'react-facebook-pixel';

const PIXEL_ID = import.meta.env.VITE_PIXEL_KEY;
const TEST_EVENT_CODE = import.meta.env.VITE_PIXEL_TEST_EVENT_CODE;

export const initPixel = () => {
  if (!PIXEL_ID) {
    console.warn('Meta Pixel ID missing. Tracking will not function.');
    return;
  }

  const options = {
    autoConfig: true,
    debug: import.meta.env.DEV,
  };

  ReactPixel.init(PIXEL_ID, undefined, options);
  ReactPixel.pageView();
};

export const trackEvent = (event: string, data = {}) => {
  if (!PIXEL_ID) return;

  const eventData = {
    ...data,
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  };

  ReactPixel.track(event, eventData);
};

export const trackCustomEvent = (event: string, data = {}) => {
  if (!PIXEL_ID) return;

  const eventData = {
    ...data,
    ...(TEST_EVENT_CODE ? { test_event_code: TEST_EVENT_CODE } : {}),
  };

  ReactPixel.trackCustom(event, eventData);
};
