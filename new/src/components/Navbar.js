import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar dark bg-body-dark">
        <div className="container-fluid">
          
          <a className="navbar-brand" to="/">News Gorilla</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="business">Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="Sports">Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="Entertainment">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="General">General</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="Health">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="Science">Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" to="Technology">Technology</a>
              </li>
              
            </ul>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

