"use client";

import { useEffect, useRef, useState } from "react";

const FOCUS = 25 * 60;
const REST = 5 * 60;

export default function Pomodoro() {
  const [phase, setPhase] = useState<"focus" | "rest">("focus");
  const [secondsLeft, setSecondsLeft] = useState(FOCUS);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!running) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          setPhase((p) => (p === "focus" ? "rest" : "focus"));
          return phase === "focus" ? REST : FOCUS;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running, phase]);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, "0");
  const seconds = String(secondsLeft % 60).padStart(2, "0");

  return (
    <div className="bg-paperDark/70 border border-line p-4 flex items-center justify-between gap-4">
      <div>
        <p className="docket text-[11px] uppercase tracking-wide text-stamp">
          {phase === "focus" ? "Focus" : "Break"}
        </p>
        <p className="mt-1 text-3xl font-semibold text-ink tabular-nums">
          {minutes}:{seconds}
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => setRunning((r) => !r)}
          className="docket text-[11px] uppercase tracking-wide bg-ink text-paper px-3 py-1.5 hover:bg-ink/90"
        >
          {running ? "Pause" : "Start"}
        </button>
        <button
          onClick={() => {
            setRunning(false);
            setPhase("focus");
            setSecondsLeft(FOCUS);
          }}
          className="docket text-[11px] uppercase tracking-wide border border-line px-3 py-1.5 hover:border-stamp"
        >
          Reset
        </button>
      </div>
    </div>
  );
}