import React, { useState } from "react";
import { useSelector } from "react-redux";

export function Converter() {
  const rates = useSelector((state) => state.rate.items.Valute);
  const newArr = [];

  for (let value in rates) {
    newArr.push(rates[value]);
  }

  const [result, setResult] = useState();
  const [amount, setAmount] = useState();
  const [value, setValue] = useState();

  console.log(value);
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
    setResult(e.target.value / value);
  };

  const handleFromResult = (e) => {
    setResult(e.target.value);
    setAmount(e.target.value * value);
  };

  return (
    <div className="inputBlock">
      <div className="firstInput">
        <input value={parseFloat(amount)} onChange={handleAmount} type="number" />
        <select>
          <option>RUB Российский рубль</option>
        </select>
      </div>
      <div className="secondInput">
        <input  value={parseFloat(result)} onChange={handleFromResult} type="number" />
        <select value={value} onChange={handleValue}>
          {newArr?.map((item) => {
            return (
              <option key={item.Name} value={parseFloat(item.Value)}>
                {item.Name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
