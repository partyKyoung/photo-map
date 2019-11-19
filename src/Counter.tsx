import React, { useState, useEffect } from 'react';

type CounterProps = {
  seconds: number;
};

function Counter({ seconds }: CounterProps) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return <div>{timeLeft}</div>;
}

export default Counter;
