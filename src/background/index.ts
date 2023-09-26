import reloadOnUpdate from "virtual:reload-on-update-in-background-script";
import browser from "webextension-polyfill";
import get from "lodash.get";
import events from "./events";

reloadOnUpdate("background");

browser.runtime.onInstalled.addListener((info) => {
  console.log("Initialized", info);
});

browser.runtime.onMessage.addListener(
  async (message, sender, respondWith: (x) => any) => {
    if (!sender.url.startsWith(`chrome-extension://${browser.runtime.id}`))
      return;

    const eventFn = get(events, "ping");

    const result = eventFn();

    respondWith(result);

    return result;
  }
);
