import React from 'react'
import headerStyles from './Header.scss'
import helperIcon from '../../assets/helper-icon.png'
import logoIcon from '../../assets/logo.png'
import arrowDown from '../../assets/arrow-down.png'

export const Header = () => (
  <header className="header">
    <div className="row flexbox align-center">
      <div className="col-md-4">
        <div className="logo">
          <img src={logoIcon} alt="logo" className="img-responsive"/>
        </div>
      </div>
      <div className="col-md-4">
        <div className="credits">
          credits: 1000 used  |  5000 total
        </div>
      </div>
      <div className="col-md-4 user-panel">
        <div className="helper">
          <div className="helper-icon">
             <img src={helperIcon} alt="helper" className="img-responsive"/>
          </div>
          <div className="heper-text">Help</div>
        </div>
        <div className="user-panel-wrap">
          <div className="user-login">
            John Doe
          </div>
          <button className="btn-toggle arrow">
            <img src={arrowDown} alt="helper" className="img-responsive"/>
          </button>
        </div>
      </div>
    </div>
    
  </header>
)

export default Header
