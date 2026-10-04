import type { MouseEvent } from "react";

export default function isModifiedClick(event: MouseEvent<HTMLElement>) {
  return (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  );
}
