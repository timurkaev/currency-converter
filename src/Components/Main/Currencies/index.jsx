import React from "react";
import { useSelector } from "react-redux";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/all";

export function Currencies() {
  const rates = useSelector((state) => state.rate.items.Valute);
  const newArr = [];

  for (let value in rates) {
    newArr.push(rates[value]);
  }

  console.log(newArr);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Цифр.код</th>
          <th>Букв.код</th>
          <th>Валюта</th>
          <th>Курс</th>
        </tr>
      </thead>
      <tbody>
        {newArr.map((item) => {
          return (
            <tr className={item.Value > item.Previous ? 'green': 'tr'}>
              <td>{item.NumCode}</td>
              <td>{item.CharCode}</td>
              <td>{item.Name}</td>
              <td>
                {item.Value.toFixed(2)}
                {item?.Value > item.Previous ? (
                  <MdArrowDropUp color="green" />
                ) : (
                  <MdArrowDropDown color="red" />
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
