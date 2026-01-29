import { useEffect, useState } from "react";

export function useCounter({
  beginCounting,
  startingNumber,
  finalNumber,
  onFinished,
}: {
  beginCounting: boolean;
  startingNumber: number;
  finalNumber: number;
  onFinished: () => void;
}) {
  const [counter, setCounter] = useState<number>(startingNumber);

  useEffect(() => {
    if (!beginCounting) {
      setCounter(startingNumber);
      return;
    }

    const interval = setInterval(() => {
      setCounter((oldCount) => {
        if (oldCount < finalNumber) {
          return oldCount + 1;
        } else {
          clearInterval(interval);
          setTimeout(onFinished, 2000);
          return oldCount;
        }
      });
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [beginCounting, startingNumber, finalNumber, onFinished]);

  return counter;
}