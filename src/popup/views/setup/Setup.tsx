import { useEffect } from "react";
import browser from "webextension-polyfill";

export default function Setup() {
  useEffect(() => {
    browser.runtime.sendMessage(browser.runtime.id, "test").then((value) => {
      console.log(value);
    });
  }, []);
  return <h1>Setup</h1>;
}
