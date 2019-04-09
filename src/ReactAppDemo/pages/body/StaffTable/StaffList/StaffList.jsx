/* eslint-disable require-jsdoc */
import React from 'react'
import PropTypes from 'prop-types'
const StaffList = (fatherProps)=>{
    const {originList, staffList} = fatherProps
    const Staff = (props)=>{
        function deleteStaff(_item) {
            const newOriginList = originList.filter((item)=>JSON.stringify(item)!==JSON.stringify(_item))
            const newStaffList = staffList.filter((item)=>JSON.stringify(item)!==JSON.stringify(_item))
            fatherProps.updata({originList: newOriginList, staffList: newStaffList})
        }
        function openDetail(_item) {
            fatherProps.updataCurrentStaff(_item)
            fatherProps.toggleDetail()
        }
        return (
            <tr>
                <td>{props.item.name}</td>
                <td>{props.item.age}</td>
                <td>{props.item.id}</td>
                <td>{props.item.sex}</td>
                <td style={ {color: 'rgb(30, 144, 255)'} }> <span onClick={ ()=>{
                    deleteStaff(props.item)
                } }>删除</span> <span onClick={()=>{
                    openDetail(props.item)
                }}>详情</span> </td>
            </tr>
        )
    }
    Staff.defaultProps = {
        item: {},
    }
    Staff.propTypes = {
        item: PropTypes.object,
    }
    return (
        <tbody>
            { staffList.map((item)=><Staff key={item.name} item={item}/>) }
        </tbody>
    )
}
function noop() {
    return false
}
StaffList.defaultProps={
    staffList: [],
    originList: [],
    updata: noop,
    toggleDetail: noop,
    updataCurrentStaff: noop,
}
StaffList.propTypes={
    staffList: PropTypes.array,
    originList: PropTypes.array,
    updata: PropTypes.func,
    toggleDetail: PropTypes.func,
    updataCurrentStaff: PropTypes.func,
}

export default StaffList
