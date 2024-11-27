import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = require("./foody-last-49ef4-firebase-adminsdk-ar98a-a133b5b900.json"); // Replace with your own path

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
