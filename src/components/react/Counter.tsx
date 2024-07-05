/** @jsxImportSource react */

import styles from "./styles.module.css";

interface CounterProps {
  initialCount?: number;
}

function Counter({ initialCount = 99 }: CounterProps) {
  console.log("Counter component rendered");
  const count = initialCount;
  // const [count, setCount] = useState(initialCount);

  // const increment = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  return (
    <div className={styles.counter}>
      <button className={styles.btn}>-</button>
      <span className={styles.count}>{count}</span>
      <button className={styles.btn}>+</button>
    </div>
  );
}

export default Counter;
