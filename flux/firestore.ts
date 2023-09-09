import {
  Query,
  QueryConstraint,
  QuerySnapshot,
  getDocs,
  query,
} from 'firebase/firestore';

export async function queryAsyncFirestore<T>(
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
