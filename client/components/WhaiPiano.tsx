import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getParticipantByKey } from '../apis/apiClient'
import { ParticipantResponse } from '../../models/Participant'
import PianoKey from './PianoKey'
import getRandomColour from '../lib/utils'

function WhaiPiano() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [volume, setVolume] = useState(0.5)
  const [backgroundColour, setBackgroundColour] = useState('white')
  const [pressedKeys, setPressedKeys] = useState<string[]>([])
  const [imageVisible, setImageVisible] = useState(false)

  const volumeSlider = useRef<HTMLInputElement>(null)
  const audio = useRef(new Audio())

  const keyNames = [
    'C2',
    'CW2',
    'D2',
    'DW2',
    'E2',
    'F2',
    'FW2',
    'G2',
    'GW2',
    'A2',
    'AW2',
    'B2',
    'C3',
    'CW3',
    'D3',
    'DW3',
    'E3',
    'F3',
    'FW3',
    'G3',
    'GW3',
    'A3',
    'AW3',
    'B3',
    'C4',
    'CW4',
    'D4',
  ]

  const blackKeys = [1, 3, 6, 8, 10]

  const { data: participant, error } = useQuery<ParticipantResponse>(
    ['participant', selectedKey],
    () => getParticipantByKey(selectedKey as string)
  )

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value)
    setVolume(newVolume)
    audio.current.volume = newVolume
  }

  useEffect(() => {
    const slider = volumeSlider.current

    const eventListener = (event: Event) => {
      handleVolume(event as unknown as React.ChangeEvent<HTMLInputElement>)
    }

    if (slider) {
      slider.addEventListener('input', eventListener)
    }

    return () => {
      if (slider) {
        slider.removeEventListener('input', eventListener)
      }
    }
  }, [])

  useEffect(() => {
    if (participant != undefined) {
      audio.current.src = participant.participant?.audioURL
      audio.current.play()
    }
  }, [participant, audio])

  function handleKeyClick(key: string) {
    setSelectedKey(key)

    setPressedKeys((prevPressedKeys) => {
      if (!prevPressedKeys.includes(key)) {
        const randomColour = getRandomColour()
        setBackgroundColour(randomColour)
        setImageVisible(true)
        return [key]
      }
      return prevPressedKeys
    })
  }

  return (
    <>
      <div className="media">
        <header className="header">
          {error ? (
            <div>There was an error: {(error as Error).message}</div>
          ) : null}
          <h1 className="title">PLAY PIANO!!</h1>
          <div>
            <Link to={`/`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">HOME</span>
              </button>
            </Link>
            <Link to={`/BecomeASinger`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">BECOME A SINGER</span>
              </button>
            </Link>
            <Link to={`/Playground`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">PLAYGROUND</span>
              </button>
            </Link>
          </div>
        </header>

        <div className="wrapper">
          <header>
            <h2>Whai 2023</h2>
            <div>
              <span className="digitalName">
                {participant?.participant?.name}
              </span>
            </div>
            <div className="column volume-slider">
              <label htmlFor="volume-slider">Volume</label>
              <input
                ref={volumeSlider}
                type="range"
                id="volume-slider"
                min="0"
                max="1"
                value={volume}
                step="any"
                onChange={handleVolume}
              />
            </div>
          </header>
          <div className="piano-keys">
            {keyNames.map((keyName, index) => {
              return (
                <>
                  <PianoKey
                    key={index}
                    keyName={keyName}
                    handleKeyClick={handleKeyClick}
                    pressedKeys={pressedKeys}
                    backgroundColor={backgroundColour}
                    keyColor={
                      blackKeys.includes(index % 12) ? 'black' : 'white'
                    }
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
      <br></br>
      <div className="bottomHalf">
        <div className="quote">
          <div className="qAndA">
            <span className="question">
              {participant?.participant?.question}
            </span>
          </div>
          <br></br>
          <div className="quote2">
            <p className="answer">{participant?.participant?.answer}</p>
          </div>
        </div>
      </div>

      <img className="robot" src="/image/robot.gif" alt="robot"></img>
      <div className="image">
        <div className="fp1">
          {imageVisible && (
            <img
              className="fp"
              src={participant?.participant?.image}
              alt="participant logo depending on key"
            />
          )}
        </div>
      </div>
    </>
  )
}

export default WhaiPiano
