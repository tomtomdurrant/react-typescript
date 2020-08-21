import * as React from "react";
import { useState, useRef } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

export interface ITextFieldProps {
  text: string;
  ok?: boolean;
  i?: number;
  fn?: (bob: string) => string;
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<ITextFieldProps> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: "hello" });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
