import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavItem = ({ to, children, icon }) => {
  return (
    <a href={to}>
      <li className="nav-item">
        <div className="nav-link">
          <i className={'fa fa-' + icon} />
          <p>{children}</p>
        </div>
      </li>
    </a>
  )
}

export default withRouter(NavItem)
