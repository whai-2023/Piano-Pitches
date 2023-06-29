// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useCallback, useState } from 'react'
import React from 'react'
import getRandomColour from '../styles/getRandomColour'

function Page2() {
  const [backgroundColour, setBackgroundColour] = useState<string | null>(null)

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

  const audio = useMemo(() => new Audio(`/audio/C2.mp3`), [])

  const playTune = useCallback(
    (key: string) => {
      audio.src = `/audio/${key}.mp3`
      audio.play()
      const clickedKey = document.querySelector<HTMLElement>(
        `[data-key="${key}"]`
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
    playTune(key)
    const randomColour = getRandomColour()
    setBackgroundColour(randomColour)
  }

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(event.target.value)
  }

  const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle('hide'))
  }

  const pressedKey = useCallback(
    (event: KeyboardEvent) => {
      if (allKeys.includes(event.key)) {
        playTune(event.key)
      }
    },
    [allKeys, playTune]
  )

  useEffect(() => {
    document.addEventListener('keydown', pressedKey)
    return () => {
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
              data-key="C2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('C2')}
            >
              <span>C2</span>
            </button>
            <button
              className="key black"
              data-key="C#2"
              onClick={() => HandleKeyClick('C#2')}
            >
              <span>C#2</span>
            </button>
            <button
              className="key white"
              data-key="D2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('D2')}
            >
              <span>D2</span>
            </button>
            <button
              className="key black"
              data-key="D#2"
              onClick={() => HandleKeyClick('D#2')}
            >
              <span>D#2</span>
            </button>
            <button
              className="key white"
              data-key="E2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('E2')}
            >
              <span>E2</span>
            </button>
            <button
              className="key white"
              data-key="F2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('F2')}
            >
              <span>F2</span>
            </button>
            <button
              className="key black"
              data-key="F#2"
              onClick={() => HandleKeyClick('F#2')}
            >
              <span>F#2</span>
            </button>
            <button
              className="key white"
              data-key="G2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('G2')}
            >
              <span>G2</span>
            </button>
            <button
              className="key black"
              data-key="G#2"
              onClick={() => HandleKeyClick('G#2')}
            >
              <span>G#2</span>
            </button>
            <button
              className="key white"
              data-key="A2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('A2')}
            >
              <span>A2</span>
            </button>
            <button
              className="key black"
              data-key="A#2"
              onClick={() => HandleKeyClick('A#2')}
            >
              <span>A#2</span>
            </button>
            <button
              className="key white"
              data-key="B2"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('B2')}
            >
              <span>B2</span>
            </button>
            <button
              className="key white"
              data-key="C3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('C3')}
            >
              <span>C3</span>
            </button>
            <button
              className="key black"
              data-key="C#3"
              onClick={() => HandleKeyClick('C#3')}
            >
              <span>C#3</span>
            </button>
            <button
              className="key white"
              data-key="D3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('D3')}
            >
              <span>D3</span>
            </button>
            <button
              className="key black"
              data-key="D#3"
              onClick={() => HandleKeyClick('D#3')}
            >
              <span>D#3</span>
            </button>
            <button
              className="key white"
              data-key="E3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('E3')}
            >
              <span>E3</span>
            </button>
            <button
              className="key white"
              data-key="F3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('F3')}
            >
              <span>F3</span>
            </button>
            <button
              className="key black"
              data-key="F#3"
              onClick={() => HandleKeyClick('F#3')}
            >
              <span>F#3</span>
            </button>
            <button
              className="key white"
              data-key="G3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('G3')}
            >
              <span>G3</span>
            </button>
            <button
              className="key black"
              data-key="G#3"
              onClick={() => HandleKeyClick('G#3')}
            >
              <span>G#3</span>
            </button>
            <button
              className="key white"
              data-key="A3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('A3')}
            >
              <span>A3</span>
            </button>
            <button
              className="key black"
              data-key="A#3"
              onClick={() => HandleKeyClick('A#3')}
            >
              <span>A#3</span>
            </button>
            <button
              className="key white"
              data-key="B3"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('B3')}
            >
              <span>B3</span>
            </button>
            <button
              className="key white"
              data-key="C4"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('C4')}
            >
              <span>C4</span>
            </button>
            <button
              className="key black"
              data-key="C#4"
              onClick={() => HandleKeyClick('C#4')}
            >
              <span>C#4</span>
            </button>
            <button
              className="key white"
              data-key="D4"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('D4')}
            >
              <span>D4</span>
            </button>
            <button
              className="key black"
              data-key="D#4"
              onClick={() => HandleKeyClick('D#4')}
            >
              <span>D#4</span>
            </button>
            <button
              className="key white"
              data-key="E4"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('E4')}
            >
              <span>E4</span>
            </button>
            <button
              className="key white"
              data-key="F4"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('F4')}
            >
              <span>F4</span>
            </button>
            <button
              className="key black"
              data-key="F#4"
              onClick={() => HandleKeyClick('F#4')}
            >
              <span>F#4</span>
            </button>
            <button
              className="key white"
              data-key="G4"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('G4')}
            >
              <span>G4</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page2
