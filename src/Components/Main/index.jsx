import React, { useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { loadRates } from "../../redux/actions/rate";
import { Converter } from "./HomePage/Converter";
import { RatesInfo } from "./HomePage/RatesInfo";
import { Currencies } from "./Currencies";
import { Switch, Route } from "react-router-dom";

export function Main() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRates());
  }, [dispatch]);

  return (
    <div>
      <main>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <RatesInfo />
              <Converter />
            </Route>
            <Route path="/currencies">
              <Currencies />
            </Route>
          </Switch>
        </div>
      </main>
    </div>
  );
}
