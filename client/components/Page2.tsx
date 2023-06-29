// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useCallback, useState } from 'react'
import React from 'react'
import getRandomColour from '../apis/getRandomColour'

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
              data-key="Dallin"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Dallin')}
            >
              <span>C2</span>
            </button>
            <button
              className="key black"
              data-key="Dallin-Dillon"
              onClick={() => HandleKeyClick('Dallin-Dillon')}
            >
              <span>C#2</span>
            </button>
            <button
              className="key white"
              data-key="Dillon"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Dillon')}
            >
              <span>D2</span>
            </button>
            <button
              className="key black"
              data-key="Dillon-Dylan"
              onClick={() => HandleKeyClick('Dillon-Dylan')}
            >
              <span>D#2</span>
            </button>
            <button
              className="key white"
              data-key="Dylan"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Dylan')}
            >
              <span>E2</span>
            </button>
            <button
              className="key white"
              data-key="Siza"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Siza')}
            >
              <span>F2</span>
            </button>
            <button
              className="key black"
              data-key="Siza-Jen"
              onClick={() => HandleKeyClick('Siza-Jen')}
            >
              <span>F#2</span>
            </button>
            <button
              className="key white"
              data-key="Jen"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Jen')}
            >
              <span>G2</span>
            </button>
            <button
              className="key black"
              data-key="Jen-Jiho"
              onClick={() => HandleKeyClick('Jen-Jiho')}
            >
              <span>G#2</span>
            </button>
            <button
              className="key white"
              data-key="Jiho"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Jiho')}
            >
              <span>A2</span>
            </button>
            <button
              className="key black"
              data-key="Jiho-Scott"
              onClick={() => HandleKeyClick('Jiho-Scott')}
            >
              <span>A#2</span>
            </button>
            <button
              className="key white"
              data-key="Scott"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Scott')}
            >
              <span>B2</span>
            </button>
            <button
              className="key white"
              data-key="Denyce"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Denyce')}
            >
              <span>C3</span>
            </button>
            <button
              className="key black"
              data-key="Denyce-Michael"
              onClick={() => HandleKeyClick('Denyce-Michael')}
            >
              <span>C#3</span>
            </button>
            <button
              className="key white"
              data-key="Michael"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Michael')}
            >
              <span>D3</span>
            </button>
            <button
              className="key black"
              data-key="Michael-BenW"
              onClick={() => HandleKeyClick('Michael-BenW')}
            >
              <span>D#3</span>
            </button>
            <button
              className="key white"
              data-key="BenW"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('BenW')}
            >
              <span>E3</span>
            </button>
            <button
              className="key white"
              data-key="Min"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Min')}
            >
              <span>F3</span>
            </button>
            <button
              className="key black"
              data-key="Min-Teri"
              onClick={() => HandleKeyClick('Min-Teri')}
            >
              <span>F#3</span>
            </button>
            <button
              className="key white"
              data-key="Teri"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Teri')}
            >
              <span>G3</span>
            </button>
            <button
              className="key black"
              data-key="Teri-BenH"
              onClick={() => HandleKeyClick('Teri-BenH')}
            >
              <span>G#3</span>
            </button>
            <button
              className="key white"
              data-key="BenH"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('BenH')}
            >
              <span>A3</span>
            </button>
            <button
              className="key black"
              data-key="BenH-David"
              onClick={() => HandleKeyClick('BenH-David')}
            >
              <span>A#3</span>
            </button>
            <button
              className="key white"
              data-key="David"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('David')}
            >
              <span>B3</span>
            </button>
            <button
              className="key white"
              data-key="Krissy"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Krissy')}
            >
              <span>C4</span>
            </button>
            <button
              className="key black"
              data-key="Krissy-Jatin"
              onClick={() => HandleKeyClick('Krissy-Jatin')}
            >
              <span>C#4</span>
            </button>
            <button
              className="key white"
              data-key="Jatin"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Jatin')}
            >
              <span>D4</span>
            </button>
            <button
              className="key black"
              data-key="Jatin-Martin"
              onClick={() => HandleKeyClick('Jatin-Martin')}
            >
              <span>D#4</span>
            </button>
            <button
              className="key white"
              data-key="Martin"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Martin')}
            >
              <span>E4</span>
            </button>
            <button
              className="key white"
              data-key="Renee"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Renee')}
            >
              <span>F4</span>
            </button>
            <button
              className="key black"
              data-key="Renee-Rohan"
              onClick={() => HandleKeyClick('Renee-Rohan')}
            >
              <span>F#4</span>
            </button>
            <button
              className="key white"
              data-key="Rohan"
              style={{ background: backgroundColour ?? 'white' }}
              onClick={() => HandleKeyClick('Rohan')}
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
