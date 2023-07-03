// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getNewParticipantByKey } from '../apis/apiClient'
import { NewParticipantResponse } from '../../models/Participant'
import getRandomColour from '../lib/utils'

function Playground() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [volume, setVolume] = useState(0.5)
  const [backgroundColour, setBackgroundColour] = useState<string>('white')
  const [pressedKeys, setPressedKeys] = useState<string[]>([])
  const [imageVisible, setImageVisible] = useState(false)

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
    if (newParticipant != undefined) {
      audio.current.src = newParticipant.newParticipant?.audioUrl
      audio.current.play()
    }
  }, [newParticipant, audio])

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
          <h1>Play your key!</h1>
          <div>
            <Link to={`/`}>
              <button className="searchSubmit">Home</button>
            </Link>
            <Link to={`/WhaiPiano`}>
              <button className="searchSubmit">Whai Piano</button>
            </Link>
            <Link to={`/BecomeASinger`}>
              <button className="searchSubmit">BecomeASinger</button>
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
            <button
              className="key white"
              data-key="C2"
              style={
                pressedKeys.includes('C2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C2')}
            >
              <span>C2</span>
            </button>
            <button
              className="key black"
              data-key="C sharp 2"
              style={
                pressedKeys.includes('C sharp 2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C sharp 2')}
            >
              <span>C#2</span>
            </button>
            <button
              className="key white"
              data-key="D2"
              style={
                pressedKeys.includes('D2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D2')}
            >
              <span>D2</span>
            </button>
            <button
              className="key black"
              data-key="D sharp 2"
              style={
                pressedKeys.includes('D sharp 2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D sharp 2')}
            >
              <span>D#2</span>
            </button>
            <button
              className="key white"
              data-key="E2"
              style={
                pressedKeys.includes('E2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('E2')}
            >
              <span>E2</span>
            </button>
            <button
              className="key white"
              data-key="F2"
              style={
                pressedKeys.includes('F2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F2')}
            >
              <span>F2</span>
            </button>
            <button
              className="key black"
              data-key="F sharp 2"
              style={
                pressedKeys.includes('F sharp 2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F sharp 2')}
            >
              <span>F#2</span>
            </button>
            <button
              className="key white"
              data-key="G2"
              style={
                pressedKeys.includes('G2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G2')}
            >
              <span>G2</span>
            </button>
            <button
              className="key black"
              data-key="G sharp 2"
              style={
                pressedKeys.includes('G sharp 2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G sharp 2')}
            >
              <span>G#2</span>
            </button>
            <button
              className="key white"
              data-key="A2"
              style={
                pressedKeys.includes('A2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('A2')}
            >
              <span>A2</span>
            </button>
            <button
              className="key black"
              data-key="A sharp 2"
              style={
                pressedKeys.includes('A sharp 2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('A sharp 2')}
            >
              <span>A#2</span>
            </button>
            <button
              className="key white"
              data-key="B2"
              style={
                pressedKeys.includes('B2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('B2')}
            >
              <span>B2</span>
            </button>
            <button
              className="key white"
              data-key="C3"
              style={
                pressedKeys.includes('C3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C3')}
            >
              <span>C3</span>
            </button>
            <button
              className="key black"
              data-key="C sharp 3"
              style={
                pressedKeys.includes('C sharp 3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C sharp 3')}
            >
              <span>C#3</span>
            </button>
            <button
              className="key white"
              data-key="D3"
              style={
                pressedKeys.includes('D3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D3')}
            >
              <span>D3</span>
            </button>
            <button
              className="key black"
              data-key="D sharp 3"
              style={
                pressedKeys.includes('D sharp 3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D sharp 3')}
            >
              <span>D#3</span>
            </button>
            <button
              className="key white"
              data-key="E3"
              style={
                pressedKeys.includes('E3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('E3')}
            >
              <span>E3</span>
            </button>
            <button
              className="key white"
              data-key="F3"
              style={
                pressedKeys.includes('F3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F3')}
            >
              <span>F3</span>
            </button>
            <button
              className="key black"
              data-key="F sharp 3"
              style={
                pressedKeys.includes('F sharp 3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F sharp 3')}
            >
              <span>F#3</span>
            </button>
            <button
              className="key white"
              data-key="G3"
              style={
                pressedKeys.includes('G3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G3')}
            >
              <span>G3</span>
            </button>
            <button
              className="key black"
              data-key="G sharp 3"
              style={
                pressedKeys.includes('G sharp 3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G sharp 3')}
            >
              <span>G#3</span>
            </button>
            <button
              className="key white"
              data-key="A3"
              style={
                pressedKeys.includes('A3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('A3')}
            >
              <span>A3</span>
            </button>
            <button
              className="key black"
              data-key="A sharp 3"
              style={
                pressedKeys.includes('A sharp 3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('A sharp 3')}
            >
              <span>A#3</span>
            </button>
            <button
              className="key white"
              data-key="B3"
              style={
                pressedKeys.includes('B3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('B3')}
            >
              <span>B3</span>
            </button>
            <button
              className="key white"
              data-key="C4"
              style={
                pressedKeys.includes('C4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C4')}
            >
              <span>C4</span>
            </button>
            <button
              className="key black"
              data-key="C sharp 4"
              style={
                pressedKeys.includes('C sharp 4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C sharp 4')}
            >
              <span>C#4</span>
            </button>
            <button
              className="key white"
              data-key="D4"
              style={
                pressedKeys.includes('D4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D4')}
            >
              <span>D4</span>
            </button>
            <button
              className="key black"
              data-key="D sharp 4"
              style={
                pressedKeys.includes('D sharp 4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D sharp 4')}
            >
              <span>D#4</span>
            </button>
            <button
              className="key white"
              data-key="E4"
              style={
                pressedKeys.includes('E4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('E4')}
            >
              <span>E4</span>
            </button>
            <button
              className="key white"
              data-key="F4"
              style={
                pressedKeys.includes('F4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F4')}
            >
              <span>F4</span>
            </button>
            <button
              className="key black"
              data-key="F sharp 4"
              style={
                pressedKeys.includes('F sharp 4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F sharp 4')}
            >
              <span>F#4</span>
            </button>
            <button
              className="key white"
              data-key="G4"
              style={
                pressedKeys.includes('G4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G4')}
            >
              <span>G4</span>
            </button>
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
