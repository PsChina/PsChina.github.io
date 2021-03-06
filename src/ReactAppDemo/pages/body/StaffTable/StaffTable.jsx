/* eslint-disable require-jsdoc */
import React from 'react'
import StaffTableHeader from './StaffTableHeader/StaffTableHeader.jsx'
import StaffList from './StaffList/StaffList.jsx'
import PropTypes from 'prop-types'

const StaffTable = (props)=>(
    <table>
        <StaffTableHeader titles={props.titles}/>
        <StaffList
            staffList={props.staffList}
            originList={props.originList}
            updata={props.updata}
            toggleDetail={props.toggleDetail}
            updataCurrentStaff={props.updataCurrentStaff}
        />
    </table>
)

function noop() {
    return false
}

StaffTable.defaultProps = {
    titles: [],
    originList: [],
    staffList: [],
    updata: noop,
    toggleDetail: noop,
    updataCurrentStaff: noop,
}

StaffTable.propTypes = {
    titles: PropTypes.array,
    staffList: PropTypes.array,
    originList: PropTypes.array,
    updata: PropTypes.func,
    toggleDetail: PropTypes.func,
    updataCurrentStaff: PropTypes.func,
}

export default StaffTable
