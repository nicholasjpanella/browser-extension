import { Plugin } from "vite";
import browserify from "browserify";

export default function ViteBrowserifyPlugin(): Plugin {
  return {
    name: "vite-browserify-plugin",
    buildEnd() {
      const b = browserify({});

      b.add("dist/src/background/index.js");

      b.bundle().pipe(
        require("fs").createWriteStream("dist/src/background/index.js")
      );
    },
  };
}
