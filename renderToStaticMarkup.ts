import type { ReactElement } from "react";
import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";

/**
 * Mimics react-dom/server's renderToStaticMarkup method for client environments,
 * as suggested by React docs:
 * https://react.dev/reference/react-dom/server/renderToString#removing-rendertostring-from-the-client-code
 */
export default function renderToStaticMarkup(element: ReactElement): string {
  const div = document.createElement("div");
  const root = createRoot(div);
  flushSync(() => {
    root.render(element);
  });
  return div.innerHTML;
}
