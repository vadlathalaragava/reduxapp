import React from 'react'
import { connect } from 'react-redux'
 
let View = ({ whatsUp}) => (
  <div>
      <h2>Component2: {whatsUp}</h2> 
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

 

View = connect(
  mapStateToProps,
 
)(View)

export default View;