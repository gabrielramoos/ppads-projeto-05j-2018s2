import React from 'react'
import NavItem from 'components/NavItem'

const Sidebar = ({ menu, title }) => {
  return (
    <div className="sidebar" data-color="black" data-background-color="black">
      <div className="logo">
        <span className="simple-text logo-normal">Painel Anatel</span>
      </div>
      <div className="sidebar-wrapper">
        {menu.map(m => {
          return (
            <React.Fragment key={m.id}>
              <ul className="nav" key={m.id}>
                {m.menu.map(i => (
                  <NavItem key={i.text} to={i.href} icon={i.icon}>
                    {i.text}
                  </NavItem>
                ))}
              </ul>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
