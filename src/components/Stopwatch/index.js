// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isRunningtime: false,
    isTimeinSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeIntervel)
  }

  updateTime = () => {
    this.setState(prevState => ({
      isTimeinSeconds: prevState.isTimeinSeconds + 1,
    }))
  }

  startTimer = () => {
    this.timeIntervel = setInterval(this.updateTime, 1000)
    this.setState({isRunningtime: true})
  }

  stopTimer = () => {
    clearInterval(this.timeIntervel)
    this.setState({isRunningtime: false})
  }

  resetTimer = () => {
    clearInterval(this.timeIntervel)
    this.setState({isRunningtime: false, isTimeinSeconds: 0})
  }

  renderSeconds = () => {
    const {isTimeinSeconds} = this.state
    const seconds = Math.floor(isTimeinSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {isTimeinSeconds} = this.state
    const minutes = Math.floor(isTimeinSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimeinSeconds} = this.state
    const timer = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="main-container">
        <div className="top-head-container">
          <h1 className="head">Stopwatch</h1>
          <div className="mid-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="image"
              />
              <p className="para">Timer</p>
            </div>
            <h1 className="heads">{timer}</h1>
            <div className="buttons-container">
              <button
                onClick={this.startTimer}
                className="btn-start"
                type="button"
              >
                Start
              </button>
              <button
                onClick={this.stopTimer}
                className="btn-stop"
                type="button"
              >
                Stop
              </button>
              <button
                onClick={this.resetTimer}
                className="btn-reset"
                type="button"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
