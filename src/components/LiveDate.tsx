"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function getServerSnapshot() {
  return "Today's Edition";
}

// Renders today's date on the client so the "Sunday Edition" masthead always
// reads the visitor's actual date, even though the page itself is served
// from a static build. useSyncExternalStore (rather than an effect + state)
// keeps this a single, well-defined read of an external, non-reactive value.
export function LiveDate({ className }: { className?: string }) {
  const label = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return <span className={className}>{label}</span>;
}
