import React from 'react'
import PropTypes from 'prop-types'

const Ingredient = ({name}) => {
    return <div>{name}</div>
}

Ingredient.propTypes = {
    name: PropTypes.string
}

export default Ingredient