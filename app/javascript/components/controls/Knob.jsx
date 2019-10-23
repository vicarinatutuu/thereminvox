import _ from 'lodash'
import React from 'react'

export default class Knob extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseDown: false,
      value: props.value,
      deg: -90,
      screenY: 0
    }

    _.bindAll(
      this,
      'handleMouseDown',
      'handleMouseMove',
      'handleMouseUp',
      'moveKnob',
      'calculateDeg'
    )
  }

  componentDidMount() {
    const { value } = this.props
    const deg = this.calculateDeg(value)

    this.setState({
      mouseDown: false,
      value: value,
      deg: -90 + deg,
      screenY: 0
    })

    document.addEventListener('mouseup', this.handleMouseUp)
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseDown(e) {
    e.preventDefault()

    this.setState({
      mouseDown: true,
      screenY: e.screenY
    })
  }

  handleMouseMove(e) {
    const { mouseDown } = this.state

    if (mouseDown) {
      this.moveKnob(e.screenY)
    }
  }

  handleMouseUp() {
    const { name, handleMouseUp } = this.props

    if (this.state.mouseDown) {
      // handleMouseUp(name);

      this.setState({
        mouseDown: false
      })
    }
  }

  moveKnob(screenY) {
    const min = parseInt(this.props.min)
    const max = parseInt(this.props.max)
    const oldScreenY = this.state.screenY
    const { deg } = this.state
    const difference = screenY - oldScreenY
    let { value } = this.state

    value += difference

    if (value < min) {
      value = min
    } else if (value > max) {
      value = max
    }

    this.props.handleValueChange(value)

    this.setState({
      screenY: screenY,
      value: value,
      deg: -90 + this.calculateDeg(value)
    })
  }

  calculateDeg(value) {
    const { max } = this.props
    const coef = 120 / max
    const deg = value * coef

    return deg
  }

  render() {
    const { deg } = this.state

    const style = {
      transform: `rotate(${-deg}deg)`
    }

    return (
      <div
        className="Knob"
        style={style}
        onMouseDown={this.handleMouseDown}
        onMouseMove={this.handleMouseMove}
      />
    )
  }
}
