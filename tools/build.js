import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { minify } from "terser";
import iecst from "../src/iecst.js";

// Register language using a standard ID
const standalone = `hljs.registerLanguage("iecst", ${iecst.toString()});`;

// Read core highlight.js (pre-downloaded for v10 compatibility)
const core = readFileSync("tools/highlight.js", "utf8");

// Bundle Highlight.js + language definition
const bundled = `${core}\n${standalone}`;

async function build() {
  mkdirSync("dist", { recursive: true });

  // Minify language file
  const minifiedStandalone = await minify(standalone, {
    format: { comments: false },
  });

  // Minify bundled file
  const minifiedBundled = await minify(bundled, {
    format: { comments: false },
  });

  writeFileSync("dist/iecst.min.js", minifiedStandalone.code, "utf8");
  console.log("✅ Built: dist/iecst.min.js");

  try {
    writeFileSync("example/browser/iecst.min.js", minifiedStandalone.code, "utf8");
    console.log("✅ Built: example/browser/iecst.min.js");
  } catch (error) {
    console.error("⚠️ Failed to build highlight.js to example/browser");
  }

  writeFileSync("dist/highlight.min.js", minifiedBundled.code, "utf8");
  console.log("✅ Built: dist/highlight.min.js");

  try {
    writeFileSync("example/mdbook/theme/highlight.js", minifiedBundled.code, "utf8");
    console.log("✅ Copied: example/mdbook/theme/highlight.js");
  } catch (error) {
    console.error("⚠️ Failed to copy highlight.js to example/mdbook/theme");
  }
}

build();
