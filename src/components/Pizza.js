import React from "react"

const Pizza = (props) => {
  return(
    <tr>
      <td>{props.pizza.topping}</td>
      <td>{props.pizza.size}</td>
      {props.pizza.vegetarian ? <td>Yes</td> : <td>No</td>}
      <td><button type="button" className="btn btn-primary" onClick={event => {event.preventDefault(), props.editHandler(props.pizza)}}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
