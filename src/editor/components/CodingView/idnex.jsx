import React from 'react'

import PropTypes from 'prop-types'

const CodingView = (props)=>(
    <div className={props.className}>left</div>
)

CodingView.propTypes = {
    className: PropTypes.string,
    flexVal: PropTypes.number,
}

export default CodingView
