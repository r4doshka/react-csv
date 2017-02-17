import React from 'react'
import './Pagination.scss'

export const Pagination = () => (
<div className="flexbox">
  <div className="records-info">
    Records <span className="bold">1</span> to <span className="bold">100</span> of <span className="bold">5,000</span>
  </div>
  <ul className="paginations">
    <li>
      <a href="#">
        <span>&lsaquo;  </span>
      </a>
    </li>
    <li><a href="">1</a></li>
    <li className="paginations_current"><a href="">2</a></li>
    <li><a href="">3</a></li>
    <li className="paginations-context"><a href="">...</a></li>
    <li><a href="">784</a></li>
    <li>
      <a href="#">
        <span>&rsaquo; </span>
      </a>
    </li>
  </ul>
</div>
  
)

export default Pagination
