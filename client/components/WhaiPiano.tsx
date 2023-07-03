// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getParticipantByKey } from '../apis/apiClient'
import { ParticipantResponse } from '../../models/Participant'
import React from 'react'
import getRandomColour from '../apis/getRandomColour'

function WhaiPiano() {
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [volume, setVolume] = useState(0.5)
  const [backgroundColour, setBackgroundColour] = useState<string>('white')
  const [pressedKeys, setPressedKeys] = useState<string[]>([])
  const [imageVisible, setImageVisible] = useState(false)

  const volumeSlider = document.querySelector<HTMLInputElement>(
    '.volume-slider input'
  )

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

  const { data: participant, error } = useQuery<ParticipantResponse>(
    ['participant', selectedKey],
    () => getParticipantByKey(selectedKey as string)
  )

  const [audio] = useState(new Audio())

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value)
    setVolume(newVolume)
    audio.volume = newVolume
  }

  useEffect(() => {
    if (participant != undefined) {
      audio.src = participant.participant?.audioURL
      audio.play()
    }
  }, [participant, audio])

  if (volumeSlider) {
    volumeSlider.addEventListener(
      'input',
      handleVolume as unknown as EventListener
    )
  }

  return (
    <>
      <div className="media">
        <header className="header">
          {error && <div>There was an error: {(error as Error).message}</div>}
          <h1>Piano Pitch!!</h1>
          <div>
            <Link to={`/`}>
              <button className="searchSubmit">Home</button>
            </Link>
            <Link to={`/BecomeASinger`}>
              <button className="searchSubmit">Become A Singer</button>
            </Link>
            <Link to={`/Playground`}>
              <button className="searchSubmit">Playground</button>
            </Link>
          </div>
        </header>

        <div className="wrapper">
          <header>
            <h2>PIANO PITCHES!!</h2>
            <div>
              <span className="digitalName">
                {participant?.participant?.name}
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
              data-key="CW2"
              style={
                pressedKeys.includes('CW2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('CW2')}
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
              data-key="DW2"
              style={
                pressedKeys.includes('DW2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('DW2')}
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
              data-key="FW2"
              style={
                pressedKeys.includes('FW2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('FW2')}
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
              data-key="GW2"
              style={
                pressedKeys.includes('GW2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('GW2')}
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
              data-key="AW2"
              style={
                pressedKeys.includes('AW2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('AW2')}
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
              data-key="CW3"
              style={
                pressedKeys.includes('CW3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('CW3')}
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
              data-key="DW3"
              style={
                pressedKeys.includes('DW3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('DW3')}
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
              data-key="FW3"
              style={
                pressedKeys.includes('FW3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('FW3')}
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
              data-key="GW3"
              style={
                pressedKeys.includes('GW3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('GW3')}
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
              data-key="AW3"
              style={
                pressedKeys.includes('AW3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('AW3')}
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
              data-key="CW4"
              style={
                pressedKeys.includes('CW4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('CW4')}
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
              data-key="DW4"
              style={
                pressedKeys.includes('DW4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('DW4')}
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
              data-key="FW4"
              style={
                pressedKeys.includes('FW4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('FW4')}
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
