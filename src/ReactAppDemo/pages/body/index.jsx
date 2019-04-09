/* eslint-disable require-jsdoc */
import React from 'react'
import './index.scss'
import Search from './Search/Search.jsx'
import StaffTable from './StaffTable/StaffTable.jsx'
import PropTypes from 'prop-types'
const Body = (props) => (
    <div className="app-body">
        <Search
            searchVal={props.searchVal}
            currentType={props.currentType}
            currentSortWay={props.currentSortWay}
            changeSortType={props.changeSortType}
            changeSortWay={props.changeSortWay}
            onSearch={props.onSearch}
        />
        <StaffTable
            titles={props.titles}
            staffList={props.staffList}
            originList={props.originList}
            updata={props.updata}
            toggleDetail={props.toggleDetail}
            updataCurrentStaff={props.updataCurrentStaff}
        />
    </div>
)

function noop() {
    return false
}

Body.defaultProps = {
    titles: [],
    staffList: [],
    originList: [],
    placeholder: 'Search...',
    searchVal: '',
    currentType: '全部',
    currentSortWay: '身份',
    updata: noop,
    toggleDetail: noop,
    updataStaffList: noop,
    changeSortType: noop,
    changeSortWay: noop,
    onSearch: noop,
    updataCurrentStaff: noop,
}
Body.propTypes = {
    titles: PropTypes.array,
    staffList: PropTypes.array,
    originList: PropTypes.array,
    placeholder: PropTypes.string,
    searchVal: PropTypes.string,
    currentType: PropTypes.string,
    currentSortWay: PropTypes.string,
    updata: PropTypes.func,
    toggleDetail: PropTypes.func,
    updataStaffList: PropTypes.func,
    changeSortType: PropTypes.func,
    changeSortWay: PropTypes.func,
    onSearch: PropTypes.func,
    updataCurrentStaff: PropTypes.func,
}
export default Body
