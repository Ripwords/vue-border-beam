import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["./src/index.ts"],
  format: ["esm", "cjs"],
  platform: "neutral",
  fromVite: true,
  dts: { vue: true },
  deps: { neverBundle: ["vue"] },
  clean: true,
});
