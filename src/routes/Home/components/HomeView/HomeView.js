import React from 'react'
import './HomeView.scss'
import Header from '../Header/Header'
import TopMenu from '../TopMenu/TopMenu'
import Search from '../Search/Search'
import Filter from '../Filter/Filter'
import ColumnOptions from '../ColumnOptions/ColumnOptions'
import Pagination from '../Pagination/Pagination'
import DownloadPanel from '../DownloadPanel/DownloadPanel'
import TableData from '../TableData/TableData'
import InfoBox from '../InfoBox/InfoBox'

export const HomeView = (props) => (
 <div>
    <Header/>
    <div className="group-wrap">
      <TopMenu/>
      <Search/>
    </div>
    <InfoBox/>
    <div className="row">
      <div className="col-md-3">
          <Filter/>
      </div>
      <div className="col-md-9">
        <div className="content">
          <div className="flexbox justify-between align-start">
            <ColumnOptions/>
            <div className="flexbox align-center">
                <Pagination/> 
              <DownloadPanel/>
            </div>
          </div>
          <div className="">
              <TableData/>
          </div>
        </div>
      </div>
    </div>
</div>    
)

export default HomeView
