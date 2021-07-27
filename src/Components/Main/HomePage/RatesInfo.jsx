import React from "react";
import { useSelector } from "react-redux";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/all";
import moment from "moment";

export function RatesInfo() {
  const rates = useSelector((state) => state.rate.items);

  const mainRates = [rates.Valute?.USD, rates.Valute?.EUR, rates.Valute?.GBP];

  return (
    <>
      <h1>
        Курсы валют на {moment(rates.Date).subtract(10, "days").calendar()}
      </h1>
      <div className="ratesInfoBlock">
        {mainRates.map((rate, index) => {
          return (
            <div key={index} className="rate">
              <div className="charCode">{rate?.CharCode}</div>
              <div className="name">{rate?.Name.substr(0, 15)}</div>
              <div className="value">
                {rate?.Value.toFixed(2)}
                {rate?.Value > rate?.Previous ? (
                  <MdArrowDropUp color="green" />
                ) : (
                  <MdArrowDropDown color="red" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
