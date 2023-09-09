import { logEvent } from '@/services/firebase/analytics';
import { createListenerMiddleware, isRejected } from '@reduxjs/toolkit';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isRejected,
  effect: async (action: any) => {
    const actionType = action.type.replace('/rejected', '');

    const arg: any = {};
    if (action.meta.arg) {
      Object.keys(action.meta.arg).forEach((key) => {
        if (
          ['string', 'number', 'boolean', 'null'].includes(
            (typeof action.meta.arg[key]).toLowerCase(),
          )
        )
          arg[key] = action.meta.arg[key];
        else arg[key] = JSON.stringify(action.meta.arg[key]);
      });
    }

    logEvent('technical', 'thunk-error', {
      actionType,
      error: {
        message: action.error.message,
        code: action.error.code,
        name: action.error.name,
      },
      arg,
    });
  },
});

export default listenerMiddleware;
