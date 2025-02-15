/** @jsxImportSource react */

import { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
}

export function InnerCounter({ initialCount = 99 }: CounterProps) {
  console.log("InnerCounter component rendered");
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <button data-action="dec" className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button data-action="inc" className={styles.btn} onClick={increment}>
        +
      </button>
    </>
  );
}
