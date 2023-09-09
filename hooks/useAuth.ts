import { initUser } from '@/flux/auth/action';
import { setAuth } from '@/flux/auth/reducer';
import { useAppDispatch } from '@/flux/hooks';
import { AuthStatus } from '@/types/auth';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

export default function useAuth() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;

        dispatch(
          setAuth({
            uid,
            email: user.email,
            authStatus: AuthStatus.Authenticated,
          }),
        );
        dispatch(initUser());
      } else {
        dispatch(
          setAuth({
            uid: null,
            email: null,
            authStatus: AuthStatus.Unauthenticated,
          }),
        );
      }
    });
  }, []);
}
