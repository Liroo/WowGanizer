import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authSlice from './auth/reducer';
import listenerMiddleware from './listenerMiddleware';
import statusSlice from './status/reducer';
import toastSlice from './toast/reducer';
import userSlice from './user/reducer';

const makeStore = () => {
  const rootReducer = combineReducers({
    auth: authSlice.reducer,
    status: statusSlice.reducer,
    toast: toastSlice.reducer,
    user: userSlice.reducer,
  });

  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: [],
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).prepend(listenerMiddleware.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

  (store as any).__persisitor = persistStore(store);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore);
