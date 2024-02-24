import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  const [inputValue, setInputValue] = useState("");
  const prevInputValue = useRef("");

  useEffect(() => {
    prevInputValue.current = inputValue;
    console.log("Prev", prevInputValue.current);
  },[inputValue]);

  return (
    <div className="border border-black p-2 m-2 w-full h-full">
      <div>
        <button
          className="bg-green-400 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log("x = ", x);
          }}
        >
          Increase x
        </button>
        <span>Let x = {x}</span>
      </div>
      <div>
        <button
          className="bg-green-400 p-2 m-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase State
        </button>
        <span>Y = {y}</span>
      </div>
      <div>
        <button
          className="bg-green-400 p-2 m-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("Ref", ref.current);
          }}
        >
          Increase Ref
        </button>
        <span>Ref = {ref.current}</span>
      </div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <h2>Current Value: {inputValue}</h2>
        <h2>Previous Value: {prevInputValue.current}
        {console.log("IN DIV", prevInputValue.current)}</h2>
      </div>
    </div>
  );
};

export default Demo2;
