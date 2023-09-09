import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();

exports.createFirestoreUserOnAuthUserCreate = functions.auth
  .user()
  .onCreate(async (user) => {
    const userData = {
      email: user.email,
      createdAt: user.metadata.creationTime,
    };

    await admin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .set(userData, { merge: true });
  });
