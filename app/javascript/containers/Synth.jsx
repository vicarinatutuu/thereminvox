import _ from 'lodash'
import React from 'react'
import Tone from 'tone'

import PlaySwitch from '../components/controls/PlaySwitch'
import Dot from '../components/controls/Dots'
import Keyboard from '../components/Keyboard'
import BpmSlider from '../components/controls/BpmSlider'

import AutoFilter from '../components/effects/AutoFilter'
import AutoPanner from '../components/effects/AutoPanner'
import AutoWah from '../components/effects/AutoWah'
import BitCrusher from '../components/effects/BitCrusher'
import Chebyshev from '../components/effects/Chebyshev'
import Chorus from '../components/effects/Chorus'
import Distortion from '../components/effects/Distortion'
import FeedbackDelay from '../components/effects/FeedbackDelay'
import FeedbackEffect from '../components/effects/FeedbackEffect'
import Freeverb from '../components/effects/Freeverb'
import JcReverb from '../components/effects/JcReverb'
import Phaser from '../components/effects/Phaser'
import PingPongDelay from '../components/effects/PingPongDelay'
import PitchShift from '../components/effects/PitchShift'
import Reverb from '../components/effects/Reverb'
import StereoWidener from '../components/effects/StereoWidener'
import Tremolo from '../components/effects/Tremolo'
import Vibrato from '../components/effects/Vibrato'

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    // Effects Pedalboard
    // const defaultWetValue = 0.8

    let autoFilter = new Tone.AutoFilter({
      frequency: 1,
      type: 'sine',
      depth: 1,
      baseFrequency: 0,
      octaves: 2.6,
      filter: {
        type: 'lowpass',
        rolloff: -12,
        Q: 1
      }
    })
    let autoPanner = new Tone.AutoPanner({
      frequency: 1,
      type: 'sine',
      depth: 0
    })
    let autoWah = new Tone.AutoWah({
      baseFrequency: 0,
      octaves: 6,
      sensitivity: 4,
      Q: 2,
      gain: 2,
      follower: {
        attack: 0.3,
        release: 0.5
      }
    })
    let bitCrusher = new Tone.BitCrusher({
      bits: 4
    })
    let chebyshev = new Tone.Chebyshev({
      order: 50,
      oversample: 'none'
    })
    let chorus = new Tone.Chorus({
      frequency: 1.5,
      delayTime: 3.5,
      depth: 0.7,
      type: 'sine',
      spread: 180
    })
    let convolver = new Tone.Convolver({
      onload: Tone.noOp,
      normalize: true
    })
    let distortion = new Tone.Distortion({
      distortion: 0,
      oversample: 'none'
    })
    let feedbackDelay = new Tone.FeedbackDelay({
      delayTime: '4n',
      maxDelay: 0.8
    })
    let feedbackEffect = new Tone.FeedbackEffect({
      feedback: 0.125
    })
    let freeverb = new Tone.Freeverb({
      roomSize: 0,
      dampening: 3000
    })
    let jcReverb = new Tone.JCReverb({
      roomSize: 0.5
    })
    let phaser = new Tone.Phaser({
      frequency: 0.5,
      octaves: 3,
      stages: 10,
      Q: 10,
      baseFrequency: 350
    })
    let pingPongDelay = new Tone.PingPongDelay({
      delayTime: 0.25,
      maxDelayTime: 1
    })
    let pitchShift = new Tone.PitchShift({
      pitch: 0,
      windowSize: 0.1,
      delayTime: 0,
      feedback: 0
    })
    let reverb = new Tone.Reverb({
      decay: 1.5,
      preDelay: 0.01
    })
    let stereoWidener = new Tone.StereoWidener({
      width: 0.5
    })
    let tremolo = new Tone.Tremolo({
      frequency: 30,
      type: 'sine',
      depth: 0.5,
      spread: 0
    })
    let vibrato = new Tone.Vibrato({
      maxDelay: 0.005,
      frequency: 5,
      depth: 0.1,
      type: 'sine'
    })

    autoFilter.wet.value = 0
    autoPanner.wet.value = 0
    autoWah.wet.value = 0
    bitCrusher.wet.value = 0
    chebyshev.wet.value = 0
    chorus.wet.value = 0
    convolver.wet.value = 0
    distortion.wet.value = 0
    feedbackDelay.wet.value = 0
    feedbackEffect.wet.value = 0
    freeverb.wet.value = 0
    jcReverb.wet.value = 0
    phaser.wet.value = 0
    pingPongDelay.wet.value = 0
    pitchShift.wet.value = 0
    reverb.wet.value = 0
    stereoWidener.wet.value = 0
    tremolo.wet.value = 0
    vibrato.wet.value = 0

    let synth = new Tone.PolySynth()
    let synth2 = new Tone.PolySynth()
    let kickDrum = new Tone.PolySynth()

    synth.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    synth2.chain(
      autoFilter,
      autoPanner,
      autoWah,
      bitCrusher,
      chebyshev,
      chorus,
      convolver,
      distortion,
      feedbackDelay,
      feedbackEffect,
      freeverb,
      jcReverb,
      phaser,
      pingPongDelay,
      pitchShift,
      reverb,
      stereoWidener,
      tremolo,
      vibrato,
      Tone.Master
    )

    function kick1(kickDrum) {
      return new Tone.Loop(
        function(time, note) {
          kickDrum.triggerAttackRelease(note, '16n', time)
        },
        [
          'G0',
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          'G0',
          null,
          null,
          null,
          null,
          'G0',
          null,
          null,
          'G0',
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          'G0',
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          'G0',
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          'G0',
          null,
          null,
          null,
          null,
          null,
          null,
          'G0'
        ],
        '16n'
      )
    }

    let loop1 = new Tone.Loop(function(time) {
      synth2.triggerAttackRelease('C0', '8n', time)
    }, '2n')

    let loop2 = new Tone.Loop(function(time) {
      synth.triggerAttackRelease('C0', '2n', time)
    }, '1n')

    function part1(synth) {
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
            time: '1:0:0',
            noteName: 'A4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '1.2:0:0',
            noteName: 'B4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '1.8:0:0',
            noteName: 'E4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '2:0:0',
            noteName: 'C5',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '2.6:0:0',
            noteName: 'E4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '2.8:0:0',
            noteName: 'D#5',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '3.1:0:0',
            noteName: 'D5',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '3.4:0:0',
            noteName: 'C5',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '3.8:0:0',
            noteName: 'A4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '4:0:0',
            noteName: 'E4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '4.1:0:0',
            noteName: 'G4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '4.6:0:0',
            noteName: 'D5',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '4.8:0:0',
            noteName: 'C5',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '5.2:0:0',
            noteName: 'G4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '5.4:0:0',
            noteName: 'G4',
            velocity: 1,
            duration: '5n'
          },
          {
            time: '5.5:0:0',
            noteName: 'A4',
            velocity: 1,
            duration: '5n'
          }
        ]
      )

      return part
    }

    this.state = {
      lastChange: Date.now(),
      timeout: 100,
      autoWah: { effect: autoWah, wet: 0, on: false },
      distortion: { effect: distortion, wet: 0, on: false },
      autoFilter: { effect: autoFilter, wet: 0, on: false },
      autoPanner: { effect: autoPanner, wet: 0, on: false },
      bitCrusher: { effect: bitCrusher, wet: 0, on: false },
      chebyshev: { effect: chebyshev, wet: 0, on: false },
      chorus: { effect: chorus, wet: 0, on: false },
      convolver: { effect: convolver, wet: 0, on: false },
      feedbackDelay: { effect: feedbackDelay, wet: 0, on: false },
      feedbackEffect: { effect: feedbackEffect, wet: 0, on: false },
      freeverb: { effect: freeverb, wet: 0, on: false },
      jcReverb: { effect: jcReverb, wet: 0, on: false },
      phaser: { effect: phaser, wet: 0, on: false },
      pingPongDelay: { effect: pingPongDelay, wet: 0, on: false },
      pitchShift: { effect: pitchShift, wet: 0, on: false },
      reverb: { effect: reverb, wet: 0, on: false },
      stereoWidener: { effect: stereoWidener, wet: 0, on: false },
      tremolo: { effect: tremolo, wet: 0, on: false },
      vibrato: { effect: vibrato, wet: 0, on: false },
      synth: { instrument: synth, on: false },
      synth2: { instrument: synth, on: false },
      loop1: {
        loop: loop1,
        on: false
      },
      loop2: {
        loop: loop2,
        on: false
      },
      part1: {
        part: part1(synth),
        on: false
      },
      kick1: {
        loop: kick1(kickDrum),
        on: false
      }
    }

    _.bindAll(
      this,
      //'getRandomArbitary',
      //'generateRandom',
      'handleMouseDown',
      'handleMouseUp',
      'toggleLoop',
      'togglePart',
      'toggleDrum',
      'toggleEffect',
      'changeEffectWetValue',
      'changeDistortionValue',
      'changeFreeverbValue',
      'changeTremoloValue',
      'changeAutoWahValue',
      'changeAutoFilterValue',
      'changeAutoFilter1Value',
      'bpmChange',
      'changeVolumeValue',
      'changeFrequencyAutoFilter'
    )

    Tone.Transport.bpm.value = 115
    Tone.Transport.start()
  }

  // componentDidMount() {
  //   this.generateRandom()
  // }

  // getRandomArbitary(min, max) {
  //   return Math.floor(Math.random() * (max - min)) + min
  // }

  // generateRandom() {
  //   const { lastChange, timeout } = this.state

  //   if (Date.now() - lastChange >= timeout) {
  //     const random = this.getRandomArbitary(100, 3000)

  //     this.setState({
  //       lastChange: Date.now(),
  //       timeout: random
  //     })

  //     this.changeDistortionValue('distortion', random / 30)
  //   }

  //   setTimeout(() => this.generateRandom(), timeout)
  // }

  toggleLoop(loopName) {
    let { loop, on } = this.state[loopName]

    on == true ? loop.stop() : loop.start('0m')

    this.setState({
      [`${loopName}`]: {
        loop: loop,
        on: !on
      }
    })
  }

  togglePart(partName) {
    let { part, on } = this.state[partName]

    on == true ? part.stop() : part.at('1m')
    part.start(0)
    part.loop = true
    part.loopEnd = '6m'

    this.setState({
      [`${partName}`]: {
        part: part,
        on: !on
      }
    })
  }

  toggleDrum(drumLoop) {
    let drumLoopSnare = this.state[drumLoop + 'Snare']
    let drumLoopKick = this.state[drumLoop + 'Kick']
    let { drumLoopPlaying } = this.state
    let drumLoopSnarePlaying = this.state[drumLoopPlaying + 'Snare']
    let drumLoopKickPlaying = this.state[drumLoopPlaying + 'Kick']

    if (drumLoopPlaying != 'none') {
      drumLoopSnarePlaying.loop.mute = true
      drumLoopKickPlaying.loop.mute = true
    }

    if (drumLoopSnare.on != true) {
      drumLoopSnare.loop.mute = false
      // drumLoopSnare.loop.start()
    }

    if (drumLoopKick.on != true) {
      drumLoopKick.loop.mute = false
      // drumLoopKick.loop.start()
    }

    if (drumLoopPlaying != 'none') {
      this.setState({
        [`${drumLoopPlaying + 'Snare'}`]: {
          loop: drumLoopSnarePlaying.loop,
          on: !drumLoopSnarePlaying.on
        },
        [`${drumLoopPlaying + 'Kick'}`]: {
          loop: drumLoopKickPlaying.loop,
          on: !drumLoopKickPlaying.on
        },
        [`${drumLoop + 'Snare'}`]: {
          loop: drumLoopSnare.loop,
          on: !drumLoopSnare.on
        },
        [`${drumLoop + 'Kick'}`]: {
          loop: drumLoopKick.loop,
          on: !drumLoopKick.on
        },
        drumLoopPlaying: drumLoop
      })
    } else {
      this.setState({
        [`${drumLoop + 'Snare'}`]: {
          loop: drumLoopSnare.loop,
          on: !drumLoopSnare.on
        },
        [`${drumLoop + 'Kick'}`]: {
          loop: drumLoopKick.loop,
          on: !drumLoopKick.on
        },
        drumLoopPlaying: drumLoop
      })
    }
  }

  changeVolumeValue(synthName, effectName, value) {
    Tone.Master.volume.value = Math.round(value)

    this.setState({
      volume: Math.round(value)
    })
  }

  // Buttons for Effects

  toggleEffect(effectName) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? 0 : wet
    on = !on

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeFrequencyAutoFilter(value) {
    let { effect, frTemp, on } = this.state.autoFilter
    // effect.frequency.value = on ? value : 0;
    effect.octaves = value
    // frTemp = value;

    this.setState({
      autoFilter: { effect, on }
    })
  }

  changeEffectWetValue(effectName, value) {
    let { effect, wet, on } = this.state[effectName]

    effect.wet.value = on == true ? value : 0
    wet = value

    this.setState({
      [`${effectName}`]: {
        effect,
        wet,
        on
      }
    })
  }

  changeDistortionValue(effectName, value) {
    let { effect, wet, on } = this.state.distortion

    effect.distortion = value

    this.setState({
      distortion: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoWahValue(effectName, value) {
    let { effect, wet, on } = this.state.autoWah

    effect.baseFrequency = value

    this.setState({
      autoWah: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoFilterValue(effectName, value) {
    let { effect, wet, on } = this.state.autoFilter

    effect.baseFrequency = value

    this.setState({
      autoFilter: {
        effect,
        wet,
        on
      }
    })
  }

  changeAutoFilter1Value(effectName, value) {
    let { effect, wet, on } = this.state.autoFilter

    effect.type = value

    this.setState({
      autoFilter: {
        effect,
        wet,
        on
      }
    })
  }

  changeFreeverbValue(effectName, value) {
    let { effect, wet, on } = this.state.freeverb

    effect.roomSize.value = value

    this.setState({
      freeverb: {
        effect,
        wet,
        on
      }
    })
  }

  changeTremoloValue(effectName, value) {
    let { effect, wet, on } = this.state.tremolo

    effect.spread = value

    this.setState({
      tremolo: {
        effect,
        wet,
        on
      }
    })
  }

  handleMouseDown(note, octave) {
    let { synthKeys, triggerAttack } = this.state

    synthKeys.triggerAttack(`${note}${octave}`)

    console.log('Down')

    this.setState({
      synthKeys
    })
  }

  handleMouseUp() {
    let { synthKeys, triggerRelease } = this.state
    synthKeys.triggerRelease()

    console.log('Up')

    this.setState({
      synthKeys
    })
  }

  bpmChange(value) {
    let { tempo } = this.state
    tempo = Math.round(value)
    Tone.Transport.bpm.value = tempo
    //console.log('new bpm', Tone.Transport.bpm.value)

    this.setState({
      tempo
    })
  }

  // Render

  render() {
    let {
      volume,
      tempo,
      distortion,
      synth,
      synth2,
      loop1,
      loop2,
      part1,
      kick1
    } = this.state
    let { toggleEffect, toggleLoop, togglePart } = this

    return (
      <div>
        <div className="plays">
          <div className="play">
            <div className="One">シンセサイザー</div>
            <div className="One1">
              <PlaySwitch
                name="play"
                value={loop1.on}
                handleToggleClick={() => this.toggleLoop('loop1')}
              />
            </div>
            <div className="One2">
              <PlaySwitch
                name="play"
                value={loop2.on}
                handleToggleClick={() => this.toggleLoop('loop2')}
              />
            </div>
            <div className="One3">
              <PlaySwitch
                name="play"
                value={part1.on}
                handleToggleClick={() => this.togglePart('part1')}
              />
            </div>
          </div>
        </div>
        <div className="effectsBoard">
          <Distortion
            {...this.state.distortion}
            toggleEffect={() => toggleEffect('distortion')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeDistortionValue={this.changeDistortionValue}
          />
          <Freeverb
            {...this.state.freeverb}
            toggleEffect={() => toggleEffect('freeverb')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeFreeverbValue={this.changeFreeverbValue}
          />
          <Tremolo
            {...this.state.tremolo}
            toggleEffect={() => toggleEffect('tremolo')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeTremoloValue={this.changeTremoloValue}
          />
          <AutoWah
            {...this.state.autoWah}
            toggleEffect={() => toggleEffect('autoWah')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeAutoWahValue={this.changeAutoWahValue}
          />
          <AutoFilter
            {...this.state.autoFilter}
            toggleEffect={() => toggleEffect('autoFilter')}
            changeEffectWetValue={this.changeEffectWetValue}
            changeAutoFilterValue={this.changeAutoFilterValue}
          />
        </div>
      </div>
    )
  }
}
