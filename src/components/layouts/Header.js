import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return(
    <header style={headerStyle}>
      <h1 style={ titleStyle }>Tasks <span style={ subtitleStyle }>List</span></h1>
      <Link
        to="/"
        style={ LinkStyle }>Home</Link> <span style={ spanStyleLink }>|</span>
      <Link
        to="/about"
        style={ LinkStyle }> About</Link>
        <div className='separator'/>
    </header>
  )
}

const headerStyle = {
  color: '#fff',
  textAlign: 'left',
  padding: '10px',
  marginTop: '2.5rem',
  marginBottom: '2.5rem'
}

const subtitleStyle = {
  fontWeight: '300',
}

const titleStyle = {
  fontWeight: '800',
  color: '#444444',
  marginBottom: '.75rem'
}

const spanStyleLink = {
  color: '#329eff'
}

const LinkStyle = {
  color: '#329eff',
  textDecoration: 'none',
  fontFamily: 'Roboto, sans-serif'
}
export default Header;
