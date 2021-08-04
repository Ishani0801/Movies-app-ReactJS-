import React from "react";
import "./Header.css";
import logo from './logo.svg';

export default class Header extends React.Component {
    render() {
        return (
        <div className="header">
           <img src={logo} className="App-logo" alt="logo" />
        </div>
        );
    }
}