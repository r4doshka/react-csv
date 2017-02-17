import React from 'react'
import headerStyles from './TopMenu.scss'

export const TopMenu = () => (
<ul className="top-menu top-menu__active">
  <li className="top-menu__item top-menu__item__active">
    <a href="/" className="top-menu__item-link">Search</a> 
    <ul className="top-menu__dropdown">
      <li className="top-menu__item">
        <a href="/" className="top-menu__item-link">save search</a> 
      </li>
      <li className="top-menu__item">
        <a href="/" className="top-menu__item-link">my saved searches</a>
      </li>
      <li className="top-menu__item">
        <a href="/" className="top-menu__item-link">clear all criteria</a>
      </li>
    </ul>
  </li>
  <li className="top-menu__item">
    <a href="/" className="top-menu__item-link">My lists</a>
  </li>
  {/*<li className="top-menu__item">
    <a href="/" className="top-menu__item-link">My alerts</a>
  </li>*/}
</ul>  
)

export default TopMenu
