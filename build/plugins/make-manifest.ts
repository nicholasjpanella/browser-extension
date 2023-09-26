import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve } from "path";
import type { PluginOption } from "vite";
import { Manifest } from "webextension-polyfill";

import logger from "../helpers/loggers";
import ManifestParser from "../helpers/parse-manifest";

const distDir = resolve(__dirname, "..", "..", "dist");
const publicDir = resolve(__dirname, "..", "..", "public");

export default function makeManifest(
  manifest: Manifest.WebExtensionManifest,
  config: { isDev: boolean; contentScriptCssKey?: string }
): PluginOption {
  function makeManifest(to: string) {
    if (!existsSync(to)) mkdirSync(to);

    const manifestPath = resolve(to, "manifest.json");

    // Naming change for cache invalidation
    if (config.contentScriptCssKey && manifest.content_scripts) {
      manifest.content_scripts.forEach((script) => {
        script.css = script.css.map((css) =>
          css.replace("<KEY>", config.contentScriptCssKey)
        );
      });
    }

    writeFileSync(
      manifestPath,
      ManifestParser.convertManifestToString(manifest)
    );

    logger(`Manifest file copy complete: ${manifestPath}`, "success");
  }

  return {
    name: "make-manifest",
    buildStart() {
      if (!config.isDev) return;
      makeManifest(distDir);
    },
    // buildEnd() {
    //   if (config.isDev) return;
    //   makeManifest(publicDir);
    // },
  };
}
