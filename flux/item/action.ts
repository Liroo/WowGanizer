import { createAsyncThunk } from '@reduxjs/toolkit';

import { FirestoreCollection } from '@/types/firestore';
import { ItemType } from '@/types/wow/item';
import { DocumentReference, doc, getFirestore } from 'firebase/firestore';
import { ClubThunkApiConfig } from 'types/thunk';
import { setFirestore } from '../firestore';
import { addToast } from '../toast/reducer';
import { setItem } from './reducer';

export const createItem = createAsyncThunk<void, ItemType, ClubThunkApiConfig>(
  'item/createItem',
  async (itemData, { dispatch }) => {
    const db = getFirestore();

    try {
      const item = await setFirestore<ItemType>(
        doc(db, FirestoreCollection.Items, itemData.id) as DocumentReference<
          ItemType,
          any
        >,
        itemData,
      );
      dispatch(setItem(item as unknown as ItemType));
      dispatch(addToast({ text: 'Item created' }));
    } catch (error: any) {
      dispatch(
        addToast({
          text: `${error.message} - ${error.code}`,
          className: '!bg-[#eb5757]',
        }),
      );
      throw error;
    }
  },
);
