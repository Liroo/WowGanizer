import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from '@firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { FirestoreCollection } from '@/types/firestore';
import { UserType } from '@/types/user';
import { DocumentReference, doc, getFirestore } from 'firebase/firestore';
import { ClubThunkApiConfig } from 'types/thunk';
import { setFirestore } from '../firestore';
import { addToast } from '../toast/reducer';
import { setUser } from '../user/reducer';

export const initUser = createAsyncThunk<void, void, ClubThunkApiConfig>(
  'auth/initUser',
  async (_, { dispatch }) => {
    const auth = getAuth();
    const db = getFirestore();
    if (!auth.currentUser?.uid) return;

    const user = await setFirestore<UserType>(
      doc(
        db,
        FirestoreCollection.Users,
        auth.currentUser?.uid,
      ) as DocumentReference<UserType, any>,
      { email: auth.currentUser?.email, lastLogin: new Date().toISOString() },
      { merge: true },
    );
    dispatch(setUser(user as unknown as UserType));
  },
);

export const logout = createAsyncThunk<void, void, ClubThunkApiConfig>(
  'auth/logout',
  async (_, {}) => {
    const auth = getAuth();

    await signOut(auth);
  },
);

export const loginPassword = createAsyncThunk<
  void,
  {
    email: string;
    password: string;
  },
  ClubThunkApiConfig
>('auth/loginPassword', async ({ email, password }, { dispatch }) => {
  try {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password);
    dispatch(
      addToast({
        text: 'Logged in!',
      }),
    );
  } catch (err: any) {
    if (err.code === 'auth/wrong-password') {
      dispatch(
        addToast({
          text: 'Wrong password.',
          className: '!bg-[#eb5757]',
        }),
      );
    } else if (err.code === 'auth/user-not-found') {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        dispatch(
          addToast({
            text: 'Logged in!',
          }),
        );
      } catch (err) {
        dispatch(
          addToast({
            text: 'Something failed. Please try again.',
            className: '!bg-[#eb5757]',
          }),
        );
      }
    } else {
      dispatch(
        addToast({
          text: 'Something failed. Please try again.',
          className: '!bg-[#eb5757]',
        }),
      );
    }
    throw err;
  }
});
export const resetPassword = createAsyncThunk<
  void,
  {
    email: string;
  },
  ClubThunkApiConfig
>('auth/resetPassword', async ({ email }, { dispatch }) => {
  try {
    const auth = getAuth();
    await sendPasswordResetEmail(auth, email);
    dispatch(addToast({ text: 'Email has been sent.' }));
  } catch (err) {
    dispatch(
      addToast({ text: 'Email not found.', className: '!bg-[#eb5757]' }),
    );
    throw err;
  }
});
