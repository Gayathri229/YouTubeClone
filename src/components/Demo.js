import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";
import Demo2 from "./Demo2";

const Demo = () => {
  const [inputNumber, setInputNumber] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);


  const prime = useMemo(() => findNthPrime(inputNumber), [inputNumber]);
  //   const primee = findNthPrime(inputNumber);

  return (
    <>
      <div
        className={
          "border border-black m-2 p-2 " +
          (darkTheme && "bg-gray-800 text-white")
        }
      >
        <div>
          <button
            className="p-1 bg-green-500 m-2"
            onClick={() => setDarkTheme(!darkTheme)}
          >
            Enable Dark Mode
          </button>
        </div>
        <input
          className={
            "border border-black p-2 m-2 " + (darkTheme && "text-black")
          }
          type="number"
          value={inputNumber}
          onChange={(event) => setInputNumber(event.target.value)}
        />
        <p className="font-bold">nth Prime: {prime}</p>
      </div>
      <div>
        <Demo2 />
      </div>
    </>
  );
};

export default Demo;
