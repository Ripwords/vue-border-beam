import { createApp } from "vue";

export function withSetup<T>(composable: () => T): { result: T; unmount: () => void } {
  let result!: T;
  const app = createApp({
    setup() {
      result = composable();
      return () => {};
    },
  });
  const div = document.createElement("div");
  app.mount(div);
  return { result, unmount: () => app.unmount() };
}
