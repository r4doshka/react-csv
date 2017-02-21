import React from 'react'
import './InfoBox.scss'

export const InfoBox = () => (
  <div className="about-info">
    <h4 className="about-info__header">
      General Electric Company
    </h4>
    <div className="row">
      <div className="col-md-3">
        <div className="info-box info-box__address">
          <p>805 Broadway Street</p>
          <p>Vancouver, WA 98654 US</p>
          <p>Phone: (888) 555-5555</p>
          <p>Fax: (888) 555-5555</p>
          <a href="">www.generalEL.com</a>
        </div>
       
      </div>
      <div className="col-md-2">
        <div className="info-box-wrap">
          <div className="info-box">
            <div className="info-box__header">
              Industry
            </div>
            <div className="info-box__description">
              auto
            </div>
          </div>
          <div className="info-box">
            <div className="info-box__header">
              Sic code
            </div>
            <div className="info-box__description">
              222216
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="info-box-wrap">
          <div className="info-box">
            <div className="info-box__header">
              employees
            </div>
            <div className="info-box__description">
              100.000
            </div>
          </div>
          <div className="info-box">
            <div className="info-box__header">
              revenue
            </div>
            <div className="info-box__description">
              $20 billion
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-3">

      </div>
      <div className="col-md-1">

      </div>
      <div className="col-md-1">

      </div>
    </div>
  </div>
)

export default InfoBox
