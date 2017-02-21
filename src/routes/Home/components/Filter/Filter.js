import React from 'react'
import './Filter.scss'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { toggleIndustry } from '../../modules/home'
import RangeSlider from '../RangeSlider/RangeSlider'


export const Filter = (props) => {

let show = false;

let toggleButtonClasses = classNames('show-selected', {
  'show-selected__opened' : props.industry_shown
})

return (
  <div className="filter">
    <div className="filter-item">
      <div className="filter-header-box">
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
      </div>
   <div className="filter-item filter-item__active">
    <div className="filter-item__name">
      Location
        <button className="btn btn-done">done</button>
    </div>
    <div className="option-box">
      <div className="option-box__header">
        states
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter or select state(s)
        </div>
        <div className="flexbox justify-between option-box__context-name">
          State(s)
          <button className="btn btn-remove brt-remove__black">
              clear all
          </button>
        </div>
        <div className="search-group">
          <div className="input-group option-box__search">
              <input className="search-field search-field__options-search"/>
              <span className="flexbox align-center justify-center search-btn-wrap search-btn-wrap__white">
                <button className="btn-flat search-btn"></button>
              </span>
          </div>
          <div className={toggleButtonClasses} >
            <div onClick={props.toggleIndustry} className="eye-icon eye-icon__black">
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
      </div>
    </div>
    <div className="option-box">
      <div className="option-box__header">
        cities
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter and select cities
        </div>
        <div className="flexbox justify-between option-box__context-name">
          cities
          <button className="btn btn-remove brt-remove__black">
              clear all
          </button>
        </div>
        <div className="search-group">
          <div className="input-group option-box__search">
              <input className="search-field search-field__options-search"/>
              <span className="flexbox align-center justify-center search-btn-wrap search-btn-wrap__white">
                <button className="btn-flat search-btn"></button>
              </span>
          </div>
          <div className={toggleButtonClasses} >
            <div onClick={props.toggleIndustry} className="eye-icon eye-icon__black">
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
      </div>
    </div>
    <div className="option-box">
      <div className="option-box__header">
        zip codes
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter zip code(s) below
        </div>
        <div className="input-list flexbox flexflow-wrap justify-between">
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
        </div>
        <button className="btn btn-add">
          + add more
        </button>
      </div>
    </div>
    <div className="option-box">
      <div className="option-box__header">
        radius
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter zip code and mile radius
        </div>
        <div className="input-list flexbox justify-between">
          <div className="input-list__item">
            <div className="input-list__item-title">
              zip code
            </div>
            <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item input-list__item-short">
            <div className="input-list__item-title">
              radius 1 to 450
            </div>
            <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__note">miles</div>
        </div>
        <button className="btn btn__block btn-green">
          done
        </button>
        <div className="option-box__context-note">
          upload a list
        </div>
        <div className="option-box__context-note">
          select from <a href="javascript:;">my lists</a>
        </div>
      </div>
    </div>
   </div>
   <div className="filter-item filter-item__selected">
    <div className="filter-item__name">
      Industry
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
    <div className="option-box">
      <div className="option-box__header">
        industry type
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter industry type
        </div>
        <div className="flexbox justify-between option-box__context-name">
          Industry Type
          <button className="btn btn-remove brt-remove__black">
              clear all
          </button>
        </div>
        <div className="search-group">
          <div className="input-group option-box__search">
              <input className="search-field search-field__options-search"/>
              <span className="flexbox align-center justify-center search-btn-wrap search-btn-wrap__white">
                <button className="btn-flat search-btn"></button>
              </span>
          </div>
          <div className={toggleButtonClasses} >
            <div onClick={props.toggleIndustry} className="eye-icon eye-icon__black">
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
      </div>
    </div>
    <div className="option-box">
      <div className="option-box__header">
        sic code
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter 2, 4 or 6 digit sic codes below
            <div className="option-box__title-note">
              (example: 80, 8011 or 801111)
            </div>
        </div>
        <div className="input-list flexbox flexflow-wrap justify-between">
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
        </div>
        <button className="btn btn-add">
          + add more
        </button>
      </div>
    </div>
    <div className="option-box">
      <div className="option-box__header">
        naics code
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter 2, 4 or 6 digit naics codes below
            <div className="option-box__title-note">
             (example: 62, 6212 or 621210)
            </div>
        </div>
        <div className="input-list flexbox flexflow-wrap justify-between">
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
          <div className="input-list__item" >
              <input className="input-list__field" type="text"/>
          </div>
        </div>
        <button className="btn btn-add">
          + add more
        </button>
        <button className="btn btn__indent btn__block btn-green">done</button>
        <div className="option-box__context-note">upload a list</div>
        <div className="option-box__context-note">
            select from <a href="javascript:;">my list</a>
          </div>
      </div>
    </div>
   </div>
   <div className="filter-item">
      <div className="filter-item__name">
        Title
      </div>
      <div className="option-box">
        <div className="option-box__header">
          JOB TITLE 
        </div>
        <div className="option-box__body">
          <div className="option-box__title">
              Choose a job title
          </div>
          <div className="flexbox justify-between option-box__context-name">
            job title
            <button className="btn btn-remove brt-remove__black">
                clear all
            </button>
          </div>
          <div className="search-group">
            <div className="input-group option-box__search">
                <input className="search-field search-field__options-search"/>
                <span className="flexbox align-center justify-center search-btn-wrap search-btn-wrap__white">
                  <button className="btn-flat search-btn"></button>
                </span>
            </div>
            <div className={toggleButtonClasses} >
              <div onClick={props.toggleIndustry} className="eye-icon eye-icon__black">
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
        </div>
      </div>
      <div className="option-box">
        <div className="option-box__header">
          JOB function
        </div>
        <div className="option-box__body">
          <div className="checkbox-list checkbox-list__simple">
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="development"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="development"></label>
                <label htmlFor="development"> Business Development</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Community" checked/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Community"></label>
                <label htmlFor="Community"> Community and Social Services</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Consulting"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Consulting"></label>
                <label htmlFor="Consulting"> Consulting</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Education" checked/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Education"></label>
                <label htmlFor="Education">Education</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Engineering"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Engineering"></label>
                <label htmlFor="Engineering">Engineering and Technical</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Finance"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Finance"></label>
                <label htmlFor="Finance">Finance</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Healthcare"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Healthcare"></label>
                <label htmlFor="Healthcare">Healthcare and Medical</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Human"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Human"></label>
                <label htmlFor="Human">Human Resources</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Information"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Information"></label>
                <label htmlFor="Information">Information Technology</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Legal"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Legal"></label>
                <label htmlFor="Legal">Legal</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Marketing"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Marketing"></label>
                <label htmlFor="Marketing">Marketing</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Media"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Media"></label>
                <label htmlFor="Media">Media, Communications and PR</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Operations"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Operations"></label>
                <label htmlFor="Operations">Operations</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Program"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Program"></label>
                <label htmlFor="Program">Program and Product Management</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Purchasing"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Purchasing"></label>
                <label htmlFor="Purchasing">Purchasing and Buyers</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Real"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Real"></label>
                <label htmlFor="Real">Real Estate</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Research"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Research"></label>
                <label htmlFor="Research">Research</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Sales"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Sales"></label>
                <label htmlFor="Sales">Sales</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="option-box">
        <div className="option-box__header">
          level
        </div>
        <div className="option-box__body">
          <div className="checkbox-list checkbox-list__simple">
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Level"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Level"></label>
                <label htmlFor="Level">C Level</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="VP"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="VP"></label>
                <label htmlFor="VP">VP Level</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Director"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Director"></label>
                <label htmlFor="Director">Director</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Manager"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Manager"></label>
                <label htmlFor="Manager">Manager</label>
              </div>
            </div>
          </div>
           <button className="btn btn__indent btn__block btn-green">done</button>
           <div className="option-box__context-note">upload a list</div>
           <div className="option-box__context-note">select from <a href="javascript:;">my list</a></div> 
        </div>
      </div>   
   </div>
   <div className="filter-item">
      <div className="filter-item__name">
        Revenue
      </div>
      <div className="option-box">
        <div className="option-box__header">
          SALES REVENUE
        </div>
        <div className="option-box__body">
          <div className="option-box__title">
            Revenue: $0 - <span className="bold">No Limit</span>
          </div>
          <div className="distance-slider">
            <RangeSlider/>
          </div>
           <button className="btn btn__indent btn__block btn-green">done</button>
        </div>
      </div>  
   </div>
   <div className="filter-item">
    <div className="filter-item__name">
      Employees
    </div>
    <div className="option-box">
      <div className="option-box__header">
        # OF EMPLOYEES
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
          Number of Employees: <span className="bold">$0 - No Limit</span>
        </div>
        <div className="distance-slider">
          <RangeSlider/>
        </div>
        <button className="btn btn__indent btn__block btn-green">done</button>
      </div>
    </div>  
   </div>
   <div className="filter-item">
    <div className="filter-item__name">
      Type
    </div>
    <div className="option-box">
        <div className="option-box__header">
          Type
        </div>
        <div className="option-box__body">
          <div className="checkbox-list checkbox-list__simple">
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Public"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Public"></label>
                <label htmlFor="Public">Public </label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Private"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Private"></label>
                <label htmlFor="Private">Private </label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Education1"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Education1"></label>
                <label htmlFor="Education1">Education</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Government"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Government"></label>
                <label htmlFor="Government">Government</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Profit"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Profit"></label>
                <label htmlFor="Profit">Non Profit</label>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className="option-box">
        <div className="option-box__header">
          RANKING
        </div>
        <div className="option-box__body">
          <div className="checkbox-list checkbox-list__simple">
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Fortune"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Fortune"></label>
                <label htmlFor="Fortune">Fortune 100</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Fortune1"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Fortune1"></label>
                <label htmlFor="Fortune1">Fortune 500</label>
              </div>
            </div>
            <div className="checkbox-list__item">
              <div className="checkbox-group checkbox-group__white">
                <input type="checkbox" id="Fortune5"/>
                <label className="checkbox-group__pseudo-checkbox" htmlFor="Fortune5"></label>
                <label htmlFor="Fortune5">Fortune 1000</label>
              </div>
            </div>
          </div>
           <button className="btn btn__indent btn__block btn-green">done</button>
        </div>
    </div>     
   </div>
   <div className="filter-item">
    <div className="filter-item__name">
      Technologies
    </div>
    <div className="option-box">
      <div className="option-box__header">
        TECHNOLOGIES
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            Enter and select technologies
        </div>
        <div className="flexbox justify-between option-box__context-name">
          TECHNOLOGIES
          <button className="btn btn-remove brt-remove__black">
              clear all
          </button>
        </div>
        <div className="search-group">
          <div className="input-group option-box__search">
              <input className="search-field search-field__options-search"/>
              <span className="flexbox align-center justify-center search-btn-wrap search-btn-wrap__white">
                <button className="btn-flat search-btn"></button>
              </span>
          </div>
          <div className={toggleButtonClasses} >
            <div onClick={props.toggleIndustry} className="eye-icon eye-icon__black">
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
        <button className="btn btn__indent btn__block btn-green">done</button>
      </div>
    </div>
   </div>
   <div className="filter-item">
    <div className="filter-item__name">
      Company by name
    </div>
    <div className="option-box">
      <div className="option-box__header">
        BY NAME
      </div>
      <div className="option-box__body">
        <div className="option-box__title">
            To target by specific companies,
            please enter or upload a list of domain
            names ONLY i.e. amazon.com
        </div>
        <div className="flexbox justify-between option-box__context-name">
          company name
          <button className="btn btn-remove brt-remove__black">
              clear all
          </button>
        </div>
        <div className="search-group">
          <div className="input-group option-box__search">
              <input className="search-field search-field__options-search"/>
              <span className="flexbox align-center justify-center search-btn-wrap search-btn-wrap__white">
                <button className="btn-flat search-btn"></button>
              </span>
          </div>
          <div className={toggleButtonClasses} >
            <div onClick={props.toggleIndustry} className="eye-icon eye-icon__black">
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
        <button className="btn btn__indent btn__block btn-green">done</button>
        <div className="option-box__context-note">upload a list</div>
        <div className="option-box__context-note">select from <a href="javascript:;">my list</a></div>
      </div>
    </div>
   </div>
   <div className="filter-item">
    <div className="filter-item__name">
      Exclusions
    </div>
    <div className="option-box">
      <div className="option-box__body">
       <div className="option-box__body-row">
         <span>Upload a list</span>
       </div> 
       <div className="option-box__body-row">
          <span>Select from <a href="">my list</a></span>
       </div>
        <button className="btn btn__indent btn__block btn-green">done</button>
      </div>
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



