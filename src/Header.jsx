import { useState } from "react";
import logo from "./logo.svg";
import sun from "./sun.svg";
import "./Header.css";

function Header() {
  const [count, setCount] = useState(1)

  const changeCount = () => {
    setCount(count + 1)
  }

  return (
    <header className="header">
      <img src={logo} className="logo" onClick={changeCount}></img>
      <div style={{ color: "white" }}>{count}</div>
      <img src={sun} className="sun"></img>
    </header>
  );
}

export default Header;
