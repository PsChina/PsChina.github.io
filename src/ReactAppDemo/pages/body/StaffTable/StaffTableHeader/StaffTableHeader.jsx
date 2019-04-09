import React from 'react'
import PropTypes from 'prop-types'

const StaffTableHeader = (props)=>(
    <thead>
        <tr>
            { props.titles.map((item)=><th key={item}>{item}</th>) }
        </tr>
    </thead>
)

StaffTableHeader.defaultProps={
    titles: [],
}

StaffTableHeader.propTypes={
    titles: PropTypes.array,
}

export default StaffTableHeader
