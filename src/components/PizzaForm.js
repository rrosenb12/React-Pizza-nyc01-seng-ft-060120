import React from "react"

let id;

class PizzaForm extends React.Component {

  state={
    topping: null,
    size: null,
    vegetarian: null
  }

  vegHandler = (e) => {
    if (e.target.value === "Vegetarian") {
      this.setState({
        vegetarian: true
      })
    } else if (e.target.value === "Not Vegetarian") {
      this.setState({
        vegetarian: false
      })
    }
  }

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    id = this.props.pizza.id
    e.preventDefault()
    this.props.submitHandler(this.state, id)
  }

  render () {
    return(
        <div className="form-row">
          <div className="col-5">
              <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                this.state.topping === null ? this.props.pizza.topping : this.state.topping
                } onChange={this.changeHandler}/>
          </div>
          <div className="col">
            <select value={this.state.size === null ?  this.props.pizza.size : this.state.size} name="size" onChange={this.changeHandler} className="form-control">
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <div className="col">
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Vegetarian" checked={this.state.vegetarian === null ? this.props.pizza.vegetarian : (this.state.vegetarian === true ? true : false)} onChange={this.vegHandler}/>
              <label className="form-check-label">
                Vegetarian
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="Not Vegetarian" checked={this.state.vegetarian === null ? this.props.pizza.vegetarian === false : (this.state.vegetarian === false ? true : false)} onChange={this.vegHandler}/>
              <label className="form-check-label">
                Not Vegetarian
              </label>
            </div>
          </div>
          <div className="col">
            <button type="submit" className="btn btn-success" onClick={this.submitHandler}>Submit</button>
          </div>
        </div>

    )
  }
}

export default PizzaForm
