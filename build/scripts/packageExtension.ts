import { build } from "vite";
import zipPack from "vite-plugin-zip-pack";
import packageJson from "../extension/package.json";

(async () => {
  build({
    plugins: [
      zipPack({
        inDir: "./dist",
        outDir: "./target",
        outFileName: `${packageJson.name}-v${packageJson.version}.zip`,
      }),
    ],
    build: {
      lib: {
        entry: "./dist/manifest.json",
        formats: [],
      },
    },
  });
})();

export default {};
