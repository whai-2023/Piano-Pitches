// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getParticipantByKey } from '../apis/apiClient'
import { ParticipantResponse } from '../../models/Participant'
import React from 'react'
import getRandomColour from '../apis/getRandomColour'

function Page2() {
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

  const {
    data: participant,
    isLoading,
    error,
  } = useQuery<ParticipantResponse>(['participant', selectedKey], () =>
    getParticipantByKey(selectedKey as string)
  )

  const [audio] = useState(new Audio())

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value)
    setVolume(newVolume)
    audio.volume = newVolume
  }

  useEffect(() => {
    if (participant != undefined) {
      console.log('Participant:', participant.participant?.audioURL)
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

  if (error) {
    return <div>There was an error: {(error as Error).message}</div>
  }

  if (!participant || isLoading) {
    return <div>Loading...</div>
  }
  console.log(pressedKeys)
  console.log(pressedKeys.includes('C2'))
  console.log(pressedKeys.includes('D2'))

  return (
    <>
      <div className="media">
        <header className="header">
          <h1>Piano Pitch!!</h1>
          <div>
            <Link to={`/`}>
              <button className="searchSubmit">Home</button>
            </Link>
            <Link to={`/page3`}>
              <button className="searchSubmit">Become A Singer</button>
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
              <span>Volume</span>
              <input
                type="range"
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
              data-key="C#2"
              style={
                pressedKeys.includes('C#2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C#2')}
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
              data-key="D#2"
              style={
                pressedKeys.includes('D#2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D#2')}
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
              data-key="F#2"
              style={
                pressedKeys.includes('F#2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F#2')}
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
              data-key="G#2"
              style={
                pressedKeys.includes('G#2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G#2')}
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
              data-key="A#2"
              style={
                pressedKeys.includes('A#2')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('A#2')}
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
              data-key="C#3"
              style={
                pressedKeys.includes('C#3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C#3')}
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
              data-key="D#3"
              style={
                pressedKeys.includes('D#3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D#3')}
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
              data-key="F#3"
              style={
                pressedKeys.includes('F#3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F#3')}
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
              data-key="G#3"
              style={
                pressedKeys.includes('G#3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('G#3')}
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
              data-key="A#3"
              style={
                pressedKeys.includes('A#3')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('A#3')}
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
              data-key="C#4"
              style={
                pressedKeys.includes('C#4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('C#4')}
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
              data-key="D#4"
              style={
                pressedKeys.includes('D#4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('D#4')}
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
              data-key="F#4"
              style={
                pressedKeys.includes('F#4')
                  ? { background: backgroundColour }
                  : {}
              }
              onClick={() => handleKeyClick('F#4')}
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
              src={participant?.participant?.image}
              alt="participant logo depending on key"
            />
          )}
        </div>
        <div className="qAndA">
          <span className="question">{participant?.participant?.question}</span>
          <p className="answer">{participant?.participant?.answer}</p>
        </div>
      </div>
    </>
  )
}

export default Page2
