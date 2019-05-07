import React from 'react'
import { connect } from 'react-redux'
import {addItem } from '../actions/action'

let Button = ({ add ,whatsUp}) => (
  <div>
      <h2>Component1: {whatsUp}</h2>
    <button onClick={add}> tem Add</button> 
  </div>
)
//To Receive date-mapStateToProps
const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})
//To update data - mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
 
  add: () => { dispatch(addItem())}
})
//redux store vs react application by using 'connect' to establish the connection

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;