import React from "./node_modules/react";
import "./style.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads
const styles = {
  navbar:{ background: "green"},

  welcome: {float: "left"}
}

function Navbar() {
  return (
    <nav style = {styles.navbar} className="navbar">
      <a style = {styles.welcome} href="/">ClickyGame</a>
    </nav>
  );
}

export default Navbar;
