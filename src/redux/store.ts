import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import typingReducer from './typingSlice';

export const store = configureStore({
  reducer: {
    typing:typingReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
