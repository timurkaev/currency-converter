import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="headerContent">
        <div className="pages">
          <ul className="nav">
            <Link to="/">
              <li>Главная</li>
            </Link>
            <Link to="/currencies">
              <li>Валюты</li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}
