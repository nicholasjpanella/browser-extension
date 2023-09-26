import packageJson from "./package.json";
import { Manifest } from "webextension-polyfill";

const manifest: Manifest.WebExtensionManifest = {
  manifest_version: 3,
  name: packageJson.displayName,
  version: packageJson.version,
  description: packageJson.description,
  permissions: ["storage"],
  background: {
    service_worker: "src/background/index.js",
    type: "module",
  },
  action: {
    default_popup: "src/popup/index.html",
    default_icon: "Icon.png",
  },
  icons: {
    "128": "Icon.png",
  },
  //   options_page: "src/options/index.html",
  //   content_scripts: [
  //     {
  //       matches: ["http://*/*", "https://*/*", "<all_urls>"],
  //       js: ["src/content/index.js"]
  //     },
  //   ],
  web_accessible_resources: [
    {
      resources: ["assets/js/*.js", "assets/css/*.css", "Icon.png"],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
