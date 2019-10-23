import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class AutoWah extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'autoWah'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeAutoWahValue,
      changeFrequencyAutoFilter
    } = this.props

    return (
      <div className="Effect">
        <h1>AW-3 オートワウ</h1>

        <div className="controlsContainer">
          <div className="controlsRow">
            <div className="HOHO">
              <h2>Gain</h2>
              <h2 className="hoho">10</h2>
            </div>
            <Slider
              name={name}
              min="0"
              max="1"
              value={wet}
              handleValueChange={changeEffectWetValue}
            />
          </div>
          <div className="controlsRow">
            <div className="HOHO">
              <h2>Freq</h2>
              <h2 className="hoho">10</h2>
            </div>
            <Slider
              name={name}
              min="0"
              max="10"
              on={on}
              value={effect.baseFrequency}
              handleValueChange={changeAutoWahValue}
            />
          </div>
          <div className="Row">
            <div className="Row1">
              <Knob
                min="-50"
                max="50"
                value={effect.octaves}
                handleValueChange={changeFrequencyAutoFilter}
              />
            </div>
            <div className="Row2">
              <Knob
                min="-50"
                max="50"
                value={effect.octaves}
                handleValueChange={changeFrequencyAutoFilter}
              />
            </div>
          </div>
          <ToggleSwitch
            value="AutoWah"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}
