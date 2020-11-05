import React from "react";
import "../stylesheet/header.css";
import "../stylesheet/App.css";
import { DiReact } from "react-icons/di";

export default function Header() {
  return (
    <header className="header">
      <div className="icon-header">
        <DiReact />
      </div>
      <div className="logo-name">
        <h1>
          Digital <br /> Destiny
        </h1>
      </div>
    </header>
  );
}
