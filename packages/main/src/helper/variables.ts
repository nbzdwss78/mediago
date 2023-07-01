import { app } from "electron";
import isDev from "electron-is-dev";
import path from "path";

if (!isDev) {
  global.__bin__ = path.resolve(app.getAppPath(), "../bin");
}

export const appData = app.getPath("appData");
export const appName = process.env.APP_NAME || "electron-template";
export const workspace = path.resolve(appData, appName);
export const defaultScheme = "mediago";
export const download = app.getPath("downloads");
export const PERSIST_MEDIAGO = "persist:mediago";
export const PERSIST_WEBVIEW = "persist:webview";
export const db = path.resolve(workspace, "app.db");
export const macDownloaderPath = path.resolve(__bin__, "N_m3u8DL-RE");
export const winDownloaderPath = path.resolve(
  __bin__,
  "N_m3u8DL-CLI_v3.0.2.exe"
);
export const ffmpegPath =
  process.platform === "win32"
    ? path.resolve(__bin__, "ffmpeg.exe")
    : path.resolve(__bin__, "ffmpeg");
export const mobilePath = path.resolve(app.getAppPath(), "../mobile");

// user agent
export const pcUA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36";
export const mobileUA =
  "Mozilla/5.0 (Linux; Android 8.0.0; SM-G955U Build/R16NW) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Mobile Safari/537.36";
