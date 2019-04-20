import React from 'react'
import PropTypes from 'prop-types'

// const state = {
//     onMoveStart(event) {

//     },
//     onMoveEnd(event) {

//     }
// }
// const noop = () => undefined

// const onMoveStart = (event) => {

// }

// const onMoveEnd = (event) => {

// }

const ControlTool = (props)=>(
    <div
        className={props.className}
        onClick={(event)=>{
            props.onClick()
        }}
    >
    </div>
)
ControlTool.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
}
export default ControlTool
