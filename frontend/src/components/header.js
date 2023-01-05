import React, { Component } from 'react'
import logo from '../assets/logo.png';

export default class header extends Component {
  render() {
    return (
    <header className ="d-flex flex-row justify-content-center align-items-center py-5 fixed-top">
        <div className="img text-center py-5">
            <img src={logo} alt="" width="180px" class="mt-4 mb-4"/>
        </div>
    </header>
    )
  }
}
