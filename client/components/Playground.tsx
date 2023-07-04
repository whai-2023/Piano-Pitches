// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getNewParticipantByKey } from '../apis/apiClient'
import { NewParticipantResponse } from '../../models/Participant'
import PianoKey from './PianoKey'
import getRandomColour from '../lib/utils'

function Playground() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [volume, setVolume] = useState(0.5)
  const [backgroundColour, setBackgroundColour] = useState<string>('white')
  const [pressedKeys, setPressedKeys] = useState<string[]>([])
  const [imageVisible, setImageVisible] = useState(false)

  const keyNames = [
    'C2',
    'C sharp 2',
    'D2',
    'D sharp 2',
    'E2',
    'F2',
    'F sharp 2',
    'G2',
    'G sharp 2',
    'A2',
    'A sharp 2',
    'B2',
    'C3',
    'C sharp 3',
    'D3',
    'D sharp 3',
    'E3',
    'F3',
    'F sharp 3',
    'G3',
    'G sharp 3',
    'A3',
    'A sharp 3',
    'B3',
    'C4',
    'C sharp 4',
    'D4',
    'D sharp 4',
    'E4',
    'F4',
    'F sharp 4',
    'G4',
  ]

  const blackKeys = [1, 3, 6, 8, 10]

  const volumeSlider = useRef<HTMLInputElement>(null)
  const audio = useRef(new Audio())

  const { data: newParticipant, error } = useQuery<NewParticipantResponse>(
    ['newParticipant', selectedKey],
    () => getNewParticipantByKey(selectedKey as string)
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
    if (newParticipant != undefined) {
      audio.current.src = newParticipant.newParticipant?.audioUrl
      audio.current.play()
    }
  }, [newParticipant, audio])

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
          <h1 className="title">Playground!!</h1>
          <div>
            <Link to={`/`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Home</span>
              </button>
            </Link>
            <Link to={`/WhaiPiano`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Whai Piano</span>
              </button>
            </Link>
            <Link to={`/BecomeASinger`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">Become a Singer</span>
              </button>
            </Link>
          </div>
        </header>

        <div className="wrapper">
          <header>
            <h2>PLAYGROUND</h2>
            <div>
              <span className="digitalName">
                {newParticipant?.newParticipant?.name}
              </span>
            </div>
            <div className="column volume-slider">
              <label htmlFor="volume-slider">Volume</label>
              <input
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
      <div className="bottomHalf">
        <div className="image">
          {imageVisible && (
            <img
              src={newParticipant?.newParticipant?.imageUrl}
              alt="newParticipant logo depending on key"
            />
          )}
        </div>
        <div className="qAndA">
          <span className="question">
            {newParticipant?.newParticipant?.question}
          </span>
          <p className="answer">{newParticipant?.newParticipant?.answer}</p>
        </div>
      </div>
    </>
  )
}

export default Playground
