import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = require("./foodyapp-b4d5f-firebase-adminsdk-6b0ln-ffca5c6ae6.json"); // Replace with your own path

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
