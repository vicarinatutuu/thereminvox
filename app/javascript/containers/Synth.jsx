import React from 'react'
import Tone from 'tone'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    // EFFECT + STATE + BIND

    let autoWah = new Tone.AutoWah({
      baseFrequency: 100,
      octaves: 5,
      sensitivity: 2,
      Q: 2,
      gain: 4,
      follower: {
        attack: 2,
        release: 3
      }
    })

    let distortion = new Tone.Distortion({
      distortion: 5,
      oversample: 'none'
    })

    this.state = {
      autoWah: autoWah,
      autoWahIsOn: false,
      distortion: distortion,
      distortionIsOn: false
    }

    this.startSynth = this.startSynth.bind(this)
    this.toggleAutoWah = this.toggleAutoWah.bind(this)
    this.toggleDistortion = this.toggleDistortion.bind(this)
  }

  // CHAIN

  startSynth() {
    let synth = new Tone.Synth().chain(
      this.state.autoWah,
      this.state.distortion,
      Tone.Master
    )

    this.setState({
      synth: synth
    })

    //let loop = new Tone.Loop(function(time) {
    //  synth.triggerAttackRelease('C2', '8n', time)
    //}, '4n')

    //loop.start('0m').stop('16m')

    let part = new Tone.Part(
      function(time, note) {
        synth.triggerAttackRelease(
          note.noteName,
          note.duration,
          time,
          note.velocity
        )
      },
      [
        {
          time: '0:0:0',
          noteName: 'A4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '0.2:0:0',
          noteName: 'B4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '0.8:0:0',
          noteName: 'E4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '1:0:0',
          noteName: 'C5',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '1.6:0:0',
          noteName: 'E4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '1.8:0:0',
          noteName: 'D#5',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '2.1:0:0',
          noteName: 'D5',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '2.4:0:0',
          noteName: 'C5',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '2.8:0:0',
          noteName: 'A4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '3:0:0',
          noteName: 'E4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '3.1:0:0',
          noteName: 'G4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '3.6:0:0',
          noteName: 'D5',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '3.8:0:0',
          noteName: 'C5',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '4.2:0:0',
          noteName: 'G4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '4.4:0:0',
          noteName: 'G4',
          velocity: 1,
          duration: '5n'
        },
        {
          time: '4.5:0:0',
          noteName: 'A4',
          velocity: 1,
          duration: '5n'
        }
      ]
    ).start(0)

    part.loop = true
    part.loopEnd = '6m'

    Tone.Transport.bpm.value = 160
    Tone.Transport.start()
  }

  // TOGGLE BUTTON

  toggleAutoWah() {
    if (this.state.autoWahIsOn == true) {
      this.state.autoWah.wet.value = 0

      this.setState({
        autoWahIsOn: false
      })
    } else {
      this.state.autoWah.wet.value = 1

      this.setState({
        autoWahIsOn: true
      })
    }
  }

  toggleDistortion() {
    if (this.state.distortionIsOn == true) {
      this.state.distortion.wet.value = 0

      this.setState({
        distortionIsOn: false
      })
    } else {
      this.state.distortion.wet.value = 1

      this.setState({
        distortionIsOn: true
      })
    }
  }

  // RENDER BUTTON

  render() {
    return (
      <div>
        <div onClick={this.startSynth}>Start</div>
        <div onClick={this.toggleAutoWah}>
          Toogle AutoWah {this.state.autoWahIsOn}
        </div>
        <div onClick={this.toggleDistortion}>
          Toogle Distortion {this.state.distortionIsOn}
        </div>
      </div>
    )
  }
}
