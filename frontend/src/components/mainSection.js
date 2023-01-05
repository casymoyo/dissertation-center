import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';

import Client from './client'
import Dissertation from './dissertation'

export default class mainSection extends Component {
  render() {
    return (
    <Router>
            <div className="container mt-5 py-2">
            <section className="main d-flex flex-column justify-content-center align-items-center mt-3">
                <h4 className="text-center mt-5">Dissertation Center</h4>
                <div className="row mt-5">
                    <div className="col mb-2" data-aos="fade-zoom-in">
                        <Link to="/client">
                            <div className="card bg-dark text-light">
                                <div className="card-body">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="bi bi-app text-secondary"></i>
                                        </div>
                                        <p className="card-text">Dissertation Application development only</p>
                                        <div className="cost float-end">
                                            <small>Costs</small>
                                            <span className="amount">
                                                <i className="bi bi-currency-dollar"></i>
                                                50.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col mb-2" data-aos="fade-zoom-out">
                        <a href="cas">
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="bi bi-app text-primary"></i>
                                        </div>
                                        <p className="card-text">Dissertation Application development with only Artificial Inteligence or Machine Learning or IoT</p>
                                        <div className="cost">
                                            <small>Costs</small>
                                            <span className="amount">
                                                <i className="bi bi-currency-dollar "></i>
                                                80.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col mb-2" data-aos="fade-right">
                        <a href="cas">
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="bi bi-app text-success"></i>
                                        </div>
                                        <p className="card-text">Whole Dissertation including Application development with no Artificial Inteligence or Machine Learning or IoT</p>
                                        <div className="cost float-end">
                                            <small>Costs</small>
                                            <span className="amount">
                                                <i className="bi bi-currency-dollar"></i>
                                                100.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col mb-2" data-aos="fade-right">
                        <a href="cas">
                            <div className="card bg-dark">
                                <div className="card-body">
                                    <div className="content">
                                        <div className="icon">
                                            <i className="bi bi-app text-danger"></i>
                                        </div>
                                        <p className="card-text">Whole Dissertation including Application development with Artificial Inteligence or Machine Learning or IoT</p>
                                        <div className="cost">
                                            <small>Costs</small>
                                            <span className="amount">
                                                <i className="bi bi-currency-dollar"></i>
                                                130.00
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <Routes>
                <Route exact path='/client' element={< Client />}></Route>
                <Route exact path='/dissertation' element={< Dissertation />}></Route>
            </Routes>
        </div>
    </Router>    
    )
  }
}
