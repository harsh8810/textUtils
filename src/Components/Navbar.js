import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-center mb-1 mt-1`}
    >
      <a className="navbar-brand py-1 px-1" href="/">
        <h3>{props.title}</h3>
      </a>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string

}