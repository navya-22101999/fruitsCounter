/* eslint-disable react/button-has-type */
// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {countM: 0, countB: 0}

  onMangoes = () => {
    this.setState(prevState => ({countM: prevState.countM + 1}))
  }

  onBananas = () => {
    this.setState(prevState => ({countB: prevState.countB + 1}))
  }

  render() {
    const {countM, countB} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate {countM} mangoes {countB} bananas
          </h1>
          <div className="navya">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button className="button" onClick={this.onMangoes}>
                Eat Mango
              </button>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button className="button" onClick={this.onBananas}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
