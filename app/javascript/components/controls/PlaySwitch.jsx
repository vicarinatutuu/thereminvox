import classnames from 'classnames'
import React from 'react'

export default class PlaySwitch extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, value, handleToggleClick } = this.props

    const classes = classnames({
      PlaySwitch: true,
      [`${name}`]: true,
      switchOn: !value,
      switchOff: value
    })

    return (
      <div className={classes} onClick={handleToggleClick}>
        <div id="outer-circle-m">
          <div id="outer-circle">
            <div id="inner-circle2"></div>
          </div>
        </div>
      </div>
    )
  }
}
