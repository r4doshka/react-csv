import React from 'react'
import './ColumnOptions.scss'

export const ColumnOptions = () => (
  <div className="column-edit column-edit__active">
    Edit Columns
    <div className="dropdown-panel dropdown-panel__column-edit">
    <div className="checkbox-list">
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="contacts"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="contacts"></label>
              <label htmlFor="contacts">Contacts</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Company"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Company"></label>
              <label htmlFor="Company">Company</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Title"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Title"></label>
              <label htmlFor="Title">Title</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Phone"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Phone"></label>
              <label htmlFor="Phone">Phone</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Email"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Email"></label>
              <label htmlFor="Email">Email</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Location"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Location"></label>
              <label htmlFor="Location">Location</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Industry"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Industry"></label>
              <label htmlFor="Industry">Industry</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Job"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Job"></label>
              <label htmlFor="Job">Job function</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Level"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Level"></label>
              <label htmlFor="Level">Level</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Gender"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Gender"></label>
              <label htmlFor="Gender">Gender</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Ethnicity"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Ethnicity"></label>
              <label htmlFor="Ethnicity">Ethnicity</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="Sales"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="Sales"></label>
              <label htmlFor="Sales">Sales</label>
            </div>
          </div>
          <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="employees"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="employees"></label>
              <label htmlFor="employees"># of employees</label>
            </div>
          </div>
           <button className="btn btn-blue btn-blue__block">Done </button>
      </div>
    </div>
      
     
  </div>
)

export default ColumnOptions
