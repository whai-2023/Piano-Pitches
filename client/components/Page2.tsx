// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useCallback, useState } from 'react'
import React from 'react'
import getRandomColour from '../styles/getRandomColour'

function Page2() {
  const pianoKeys = useMemo(
    () => document.querySelectorAll<HTMLElement>('.piano-keys .key'),
    []
  )
  const volumeSlider = document.querySelector<HTMLInputElement>(
    '.volume-slider input'
  )
  const keysCheckbox = document.querySelector<HTMLInputElement>(
    '.keys-checkbox input'
  )
  const allKeys = useMemo(() => {
    return Array.from(pianoKeys).map((key) => key.dataset.key || '')
  }, [pianoKeys])

  const audio = useMemo(() => new Audio(`/audio/Dallin.mp3`), [])

  const playTune = useCallback(
    (name: string) => {
      audio.src = `/audio/${name}.mp3`
      audio.play()
      const clickedKey = document.querySelector<HTMLElement>(
        `[data-key="${name}"]`
      )

      if (clickedKey) {
        clickedKey.classList.add('active')
        setTimeout(() => {
          clickedKey.classList.remove('active')
        }, 150)
      }
    },
    [audio]
  )

  const HandleKeyClick = (key: string) => {
    const [backgroundColour, setBackgroundColour] = useState<string | null>(
      null
    )
    playTune(key)
    const randomColour = getRandomColour()
    setBackgroundColour(randomColour)
  }

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value)
  }

  const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle('hide'))
  }

  const pressedKey = useCallback(
    (e: KeyboardEvent) => {
      console.log('Inside pressedKey function')
      if (allKeys.includes(e.key)) {
        playTune(e.key)

        console.log('Pressed Key:', e.key)
      }
    },
    [allKeys, playTune]
  )

  useEffect(() => {
    console.log('Inside useEffect')
    document.addEventListener('keydown', pressedKey)
    return () => {
      console.log('Inside cleanup')
      document.removeEventListener('keydown', pressedKey)
    }
  }, [pressedKey])

  if (keysCheckbox) {
    keysCheckbox.addEventListener('click', showHideKeys)
  }

  if (volumeSlider) {
    volumeSlider.addEventListener(
      'input',
      handleVolume as unknown as EventListener
    )
  }

  document.addEventListener('keydown', pressedKey)

  return (
    <>
      <div className="media">
        <header className="header">
          <h1>Piano Pitch!!</h1>
        </header>
        <div>
          <Link to={`/`}>
            <button className="searchSubmit">Home</button>
          </Link>
          <Link to={`/page3`}>
            <button className="searchSubmit">Become A Singer</button>
          </Link>
        </div>

        <div className="wrapper">
          <header>
            <h2>PIANO PITCHES!!</h2>
            <div className="column volume-slider">
              <span>Volume</span>
              <input
                type="range"
                min="0"
                max="1"
                defaultValue="0.5"
                step="any"
              />
            </div>
            <div className="column keys-checkbox">
              <span>Show Keys</span>
              <input type="checkbox" defaultChecked />
            </div>
          </header>
          <div className="piano-keys">
            <button
              className="key white"
              data-key="Dallin"
              //style={{ backgroundColour }}
              onClick={() => HandleKeyClick('Dallin')}
            >
              <span>C2</span>
            </button>
            <button
              className="key black"
              data-key="Dallin-Dillon"
              onClick={() => HandleKeyClick('Dillon')}
            >
              <span>C#2</span>
            </button>
            <button className="key white" data-key="D2">
              <span>D2</span>
            </button>
            <button className="key black" data-key="D#">
              <span>D#</span>
            </button>
            <button className="key white" data-key="E2">
              <span>E2</span>
            </button>
            <button className="key white" data-key="F2">
              <span>F2</span>
            </button>
            <button className="key black" data-key="F#">
              <span>F#</span>
            </button>
            <button className="key white" data-key="G2">
              <span>G2</span>
            </button>
            <button className="key black" data-key="G#">
              <span>G#</span>
            </button>
            <button className="key white" data-key="A2">
              <span>A2</span>
            </button>
            <button className="key black" data-key="A#">
              <span>A#</span>
            </button>
            <button className="key white" data-key="B2">
              <span>B2</span>
            </button>
            <button className="key white" data-key="C3">
              <span>C3</span>
            </button>
            <button className="key black" data-key="C#">
              <span>C#</span>
            </button>
            <button className="key white" data-key="D3">
              <span>D3</span>
            </button>
            <button className="key black" data-key="D#">
              <span>D#</span>
            </button>
            <button className="key white" data-key="E3">
              <span>E3</span>
            </button>
            <button className="key white" data-key="F3">
              <span>F3</span>
            </button>
            <button className="key black" data-key="F#">
              <span>F#</span>
            </button>
            <button className="key white" data-key="G3">
              <span>G3</span>
            </button>
            <button className="key white" data-key="G#">
              <span>G#</span>
            </button>
            <button className="key black" data-key="A3">
              <span>A3</span>
            </button>
            <button className="key white" data-key="B3">
              <span>B3</span>
            </button>
            <button className="key white" data-key="C4">
              <span>C4</span>
            </button>
            <button className="key black" data-key="c#">
              <span>C#</span>
            </button>
            <button className="key white" data-key="D4">
              <span>D4</span>
            </button>
            <button className="key black" data-key="Teri-BenH">
              <span>D#</span>
            </button>
            <button className="key white" data-key="BenH">
              <span>E4</span>
            </button>
            <button className="key black" data-key="BenH-David">
              <span>F4</span>
            </button>
            <button className="key white" data-key="David">
              <span>F#</span>
            </button>
            <button className="key white" data-key="Krissy">
              <span>F4</span>
            </button>
            <button className="key black" data-key="Krissy-Jatin">
              <span>F#</span>
            </button>
            <button className="key white" data-key="Jatin">
              <span>G4</span>
            </button>
            <button className="key black" data-key="Jatin-Martin">
              <span>G#</span>
            </button>
            <button className="key white" data-key="Martin">
              <span>A4</span>
            </button>
            <button className="key white" data-key="Renee">
              <span>B4</span>
            </button>
            <button className="key black" data-key="Renee-Rohan">
              <span>C5</span>
            </button>
            <button className="key white" data-key="Rohan">
              <span>C#</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page2
