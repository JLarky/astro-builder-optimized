/** @jsxImportSource react */

import { useState } from "react";
import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
}

export function InnerCounter({ initialCount = 99 }: CounterProps) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter}>
      <button className={styles.btn} onClick={decrement}>
        -
      </button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn} onClick={increment}>
        +
      </button>
    </div>
  );
}

console.log("InnerCounter component rendered");
