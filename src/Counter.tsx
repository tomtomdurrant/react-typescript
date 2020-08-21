import * as React from "react";
import { useState } from "react";

interface ICounterProps {
  children: (
    counter: number,
    setCounter: React.Dispatch<React.SetStateAction<number>>
  ) => JSX.Element | null;
}

const Counter: React.FC<ICounterProps> = ({ children }) => {
  const [counter, setCounter] = useState(0);
  return <div>{children(counter, setCounter)}</div>;
};

export default Counter;
