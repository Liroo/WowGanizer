import {
  DocumentReference,
  Query,
  QueryConstraint,
  QuerySnapshot,
  SetOptions,
  getDoc,
  getDocs,
  query,
  setDoc,
} from 'firebase/firestore';

export async function queryFirestore<T>(
  queryLoc: Query<T>,
  ...queryConstraints: QueryConstraint[]
) {
  const q = query<T, any>(queryLoc, ...queryConstraints);

  const querySnapshot: QuerySnapshot<T> = await getDocs<T, any>(q);
  const results: T[] = [];
  querySnapshot.forEach((doc) => {
    results.push({
      id: doc.id,
      ...doc.data(),
    } as T);
  });
  return results;
}

export async function setFirestore<T>(
  docRef: DocumentReference<Partial<T>>,
  docData: Partial<T>,
  options: SetOptions = { merge: true },
) {
  await setDoc(docRef, docData, options);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists())
    return {
      id: docSnap.id,
      ...(docSnap.data() as Partial<T>),
    } as T;
  else return null;
}
