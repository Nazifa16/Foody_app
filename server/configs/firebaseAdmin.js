import admin from "firebase-admin";

if (!admin.apps.length) {
  const serviceAccount = require("./foody-d795a-firebase-adminsdk-r7ffh-ed048ec852.json"); // Replace with your own path

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const storage = admin.storage();
export const firestore = admin.firestore();

export default admin;
