import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { clientConfig } from "./config";

export const app = !getApps().length ? initializeApp(clientConfig) : getApp();

export const auth = getAuth(app);