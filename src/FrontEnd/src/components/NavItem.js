import React from "react";
import { Link, withRouter } from "react-router-dom";

const NavItem = ({ to, children, icon, location }) => {
  const isActive = location.pathname.startsWith(to);
  return (
    <li className={isActive ? "nav-item active" : "nav-item"}>
      <Link className="nav-link" to={to}>
        <i className={"fa fa-" + icon} />
        <p>{children}</p>
      </Link>
    </li>
  );
};

export default withRouter(NavItem);
