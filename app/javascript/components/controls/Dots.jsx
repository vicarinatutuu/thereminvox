import classnames from 'classnames'
import React from 'react'

export default class Dot extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classes = classnames({
      Dot: true
    })

    return (
      <div className={classes}>
        <div id="Dot"></div>
      </div>
    )
  }
}
