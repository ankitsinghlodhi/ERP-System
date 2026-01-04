import React from "react";
import "../styles/dashboard.css";
import Card from "./Card";

function Dashboard({ clicked }) {
  return (
    <div>
      <div className="overlay" id="overlay"></div>

      <nav className="navbar">
        <button className="sidebar-toggle" id="sidebarToggle">☰</button>
        <div className="left-links">
          <a href="#">join college</a>
          <a href="#">leave college</a>
          <a href="#">Messages</a>
          <a href="#">Logout</a>
        </div>
        <div className="search-box">
          <input type="text" placeholder="search by ID" />
        </div>
      </nav>

      <div className="wrapper">
        <div className="container">
          <Card clicked={clicked} name="Application" image="application.jpg" />
          <Card clicked={clicked} name="ChatBox" image="application.jpg" />
          <Card clicked={clicked} name="Application" image="application.jpg" />
          <Card clicked={clicked} name="Application" image="application.jpg" />
          <Card clicked={clicked} name="Application" image="application.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
