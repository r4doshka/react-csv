import React from 'react'
import './Filter.scss'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { toggleIndustry } from '../../modules/home'

export const Filter = (props) => {

let show = false;

let toggleButtonClasses = classNames('show-selected', {
  'show-selected__opened' : props.industry_shown
})

return (
  <div className="filter">
    <div className="filter-item">
        <div className="filter-header">
          search criteria
        </div>
        <div className="flexbox justify-between">
          <button className="btn btn-green">
            Contacts
          </button>
          <button className="btn btn-green">
            Companies
          </button>
        </div>
      </div>
      <div className="filter-item filter-item__active">
        <div className="filter-item__name">
          Location
        </div>
        <button className="btn btn-done">done</button>
      </div>
      <div className="filter-item filter-item__selected">
        <div className="filter-item__name">
          Industry
        </div>
        <div className={toggleButtonClasses}>
          <div onClick={props.toggleIndustry} className="eye-icon">
          </div>
          <div className="selected-list">
            <div className="selected-list-box">
              <div className="selected-list__item">
                Alabama (Al)
                <button className="btn-remove">
                </button>
              </div>
              <div className="selected-list__item">
                Alabama (Al)
                <button className="btn-remove">
                </button>
              </div>
              <div className="selected-list__item">
                Alabama (Al)
                <button className="btn-remove">
                </button>
              </div>
            </div>

          <div className="selected-list-box">
            <div className="selected-list__item">
            florida (fl)
            <button className="btn-remove">
            </button>
          </div>
          <div className="selected-list__item">
            Lost Angeles(LA)
            <button className="btn-remove">
            </button>
          </div>
          <div className="selected-list__item">
            New york(NY)
            <button className="btn-remove">
            </button>
          </div>
          <div className="selected-list__item">
            Colorado(CL)
            <button className="btn-remove">
            </button>
          </div>
          </div>
        </div>
        </div>
      </div>
   <div className="filter-item">
        <div className="filter-item__name">
          Title
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-item__name">
          Revenue
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-item__name">
          Employees
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-item__name">
          Type
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-item__name">
          Technologies
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-item__name">
          Company by name
        </div>
      </div>
      <div className="filter-item">
        <div className="filter-item__name">
          Exclusions
        </div>
      </div>
  </div>
)
}

const mapDispatchToProps = {
  toggleIndustry
}

const mapStateToProps = (state) => ({
  industry_shown : state.industry_shown
})

Filter.propTypes = {
  toggleIndustry     : React.PropTypes.func.isRequired,
  industry_shown     : React.PropTypes.bool.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)



