import React from 'react'
import './Search.scss'

export const Search = () => (
  <div className="input-group search">
    <input placeholder="Quick Search: (Search by Contact or Company)" className="search-field"/>
    <span className="flexbox align-center justify-center search-btn-wrap">
      <button className="btn-flat search-btn"></button>
    </span>
  </div>
)

export default Search
