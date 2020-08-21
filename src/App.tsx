import * as React from "react";
import { TextField } from "./TextField";
import Counter from "./Counter";

export const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "Steve", lastName: "Jones" }}
        handleChange={(e) => {
          const thing = e.currentTarget;
        }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  );
};
