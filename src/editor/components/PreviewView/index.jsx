import React from 'react'
import PropTypes from 'prop-types'

const PreviewView = (props)=>(
    <div className={props.className}>right</div>
)

PreviewView.propTypes = {
    className: PropTypes.string,
    flexVal: PropTypes.number,
}

export default PreviewView
