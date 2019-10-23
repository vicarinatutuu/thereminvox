import React from 'react'

import PlaySwitch from '../controls/PlaySwitch'
import ToggleSwitch from '../controls/ToggleSwitch'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'

export default class Tremolo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let name = 'tremolo'
    const {
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeTremoloValue,
      changeFrequencyAutoFilter
    } = this.props

    return (
      <div className="Effect">
        <h1>TR-1 トレモロ</h1>

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
              <h2>Trem</h2>
              <h2 className="hoho">10</h2>
            </div>
            <Slider
              name={name}
              min="0"
              max="180"
              on={on}
              value={effect.spread}
              handleValueChange={changeTremoloValue}
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
            value="Tremolo"
            current={on}
            handleClick={toggleEffect}
          />
        </div>
      </div>
    )
  }
}
