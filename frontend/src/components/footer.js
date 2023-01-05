import React, { Component } from 'react'
import logo from '../assets/logo.png'
let ft = new Date()
let ft_date = ft.getFullYear();
export default class Footer extends Component {
  render() {
    return (
    <footer className="d-flex flex-column justify-content-center bg-secondary">
        <div className='row mt-3'>
            <div className='col d-flex flex-row justify-content-between align-items-center'>
                <p className="px-5 text-light">
                    <img src= {logo} width = "60px" alt='logo'/>
                    <small>{ft_date} All Right Reserved</small>
                </p>
                <p className="px-5 text-light">
                    <small>
                        <a href="mailto:cassymyo@gmail.com"> <i class="bi bi-envelope"></i></a>
                        <a href="tel:+2367199935"> <i class="bi bi-phone px-3"></i></a>
                        <a href="tel:+2367199935"> <i class="bi bi-whatsapp" ></i></a>
                    </small>
                </p>
            </div>
        </div>
    </footer>
    )
  }
}
