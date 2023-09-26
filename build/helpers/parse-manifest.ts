export default class ManifestParser {
  private constructor() {}

  static convertManifestToString(manifest): string {
    if (process.env.__FIREFOX__) {
      manifest = this.convertToFirefoxCompatibleManifest(manifest);
    }
    manifest = this.convertVersion(manifest);
    return JSON.stringify(manifest, null, 2);
  }

  static convertVersion(manifest) {
    if (manifest.version.includes("next")) {
      manifest.version = manifest.version.replace("-next", "");
    }
    return manifest;
  }

  static convertToFirefoxCompatibleManifest(manifest) {
    const manifestCopy = { ...manifest } as Record<string, unknown>;

    manifestCopy.background = {
      scripts: [manifest.background?.service_worker],
      type: "module",
    };
    manifestCopy.options_ui = {
      page: manifest.options_page,
      browser_style: false,
    };
    manifestCopy.content_security_policy = {
      extension_pages: "script-src 'self'; object-src 'self'",
    };
    delete manifestCopy.options_page;
    return manifestCopy;
  }
}
