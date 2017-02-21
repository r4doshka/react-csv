import React from 'react'
import './DownloadPanel.scss'

export const DownloadPanel = () => (
  <div className="download-box download-box__active">
    <button className="btn btn-green">
      Download
    </button>
    <div className="dropdown-panel dropdown-panel__download">
      <div className="checkbox-list">
        <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="contacts"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="contacts"></label>
              <label htmlFor="contacts">Only selected items</label>
            </div>
        </div>
        <div className="checkbox-list__item">
            <div className="checkbox-group">
              <input type="checkbox" id="contacts"/>
              <label className="checkbox-group__pseudo-checkbox" htmlFor="contacts"></label>
              <label htmlFor="contacts">All items</label>
            </div>
        </div>
        <div className="flexbox justify-between">
          <button className="btn btn-blue btn-blue-fixed">
            Export
          </button>
          <button className="btn btn-green">
            Download
          </button>
        </div>
        
      </div>
    </div>
  </div>
 
)

export default DownloadPanel
