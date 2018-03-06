//-----------------------------------------------------------------------------
// src/components/FlyingObject.jsx
//-----------------------------------------------------------------------------
import React                    from 'react'
import PropTypes                from 'prop-types'
import FlyingObjectBase         from './FlyingObjectBase'
import FlyingObjectTop          from './FlyingObjectTop'

const FlyingObject = props => (
  <g>
    <FlyingObjectBase position = {props.position} />
    <FlyingObjectTop  position = {props.position} />
  </g>
)

FlyingObject.PropTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObject