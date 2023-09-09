'use client';

import useAuth from '@/hooks/useAuth';
import initFirebase from '@/services/firebase';

initFirebase();

export default function ShareGlobal() {
  useAuth();

  return null;
}
