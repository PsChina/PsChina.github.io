import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => (
    <select name={props.name} value={props.value} onChange={props.onChange}>
        { props.options.map((item)=><option value={item} key={item}>{item}</option>) }
    </select>
)

// eslint-disable-next-line require-jsdoc
function noop() {
    return false
}

Select.defaultProps = {
    options: [],
    value: '',
    name: '',
    onChange: noop,
}

Select.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    onChange: PropTypes.func,
}

export default Select
