/** @jsxImportSource solid-js */

import { createSignal } from "solid-js";
import styles from "../react/styles.module.css";

interface CounterProps {
  initialCount?: number;
}

export function InnerCounter({ initialCount = 99 }: CounterProps) {
  console.log("InnerCounter component rendered");
  const [count, setCount] = createSignal(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button data-action="dec" class={styles.btn} onClick={decrement}>
        -
      </button>
      <span class={styles.count}>{count()}</span>
      <button data-action="inc" class={styles.btn} onClick={increment}>
        +
      </button>
    </>
  );
}
