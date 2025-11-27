import { initializeApp } from "firebase/app";
import { fireBaseConfig } from "./fireBaseConfig";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(fireBaseConfig);
export const db=getFirestore(app)//Firestore adatbázis inicializálása