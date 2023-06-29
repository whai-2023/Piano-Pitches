// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useCallback } from 'react'

function Home() {
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

  const audio = useMemo(() => new Audio(`/audio/a.mp3`), [])

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

  pianoKeys.forEach((key) => {
    allKeys.push(key.dataset.key || '')
    key.addEventListener('click', () => playTune(key.dataset.key || ''))
  })

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
      <header className="header">
        <h1>Piano Pitch!!</h1>
      </header>
      <div>
        <Link to={`/page2`}>
          <button className="searchSubmit">Press Piano Key</button>
        </Link>
        <Link to={`/page3`}>
          <button className="searchSubmit">Become A Singer</button>
        </Link>
      </div>

      <div className="wrapper">
        <header>
          <h2>Playable PIANO</h2>
          <div className="column volume-slider">
            <span>Volume</span>
            <input type="range" min="0" max="1" defaultValue="0.5" step="any" />
          </div>
          <div className="column keys-checkbox">
            <span>Show Keys</span>
            <input type="checkbox" defaultChecked />
          </div>
        </header>
        <ul className="piano-keys">
          <li className="key white" data-key="a">
            <span>a</span>
          </li>
          <li className="key black" data-key="C#">
            <span>C#</span>
          </li>
          <li className="key white" data-key="D2">
            <span>D2</span>
          </li>
          <li className="key black" data-key="D#">
            <span>D#</span>
          </li>
          <li className="key white" data-key="E2">
            <span>E2</span>
          </li>
          <li className="key white" data-key="F2">
            <span>F2</span>
          </li>
          <li className="key black" data-key="F#">
            <span>F#</span>
          </li>
          <li className="key white" data-key="G2">
            <span>G2</span>
          </li>
          <li className="key black" data-key="G#">
            <span>G#</span>
          </li>
          <li className="key white" data-key="A2">
            <span>A2</span>
          </li>
          <li className="key black" data-key="A#">
            <span>A#</span>
          </li>
          <li className="key white" data-key="B2">
            <span>B2</span>
          </li>
          <li className="key white" data-key="C3">
            <span>C3</span>
          </li>
          <li className="key black" data-key="C#">
            <span>C#</span>
          </li>
          <li className="key white" data-key="D3">
            <span>D3</span>
          </li>
          <li className="key black" data-key="D#">
            <span>D#</span>
          </li>
          <li className="key white" data-key="E3">
            <span>E3</span>
          </li>
          <li className="key white" data-key="F3">
            <span>F3</span>
          </li>
          <li className="key black" data-key="F#">
            <span>F#</span>
          </li>
          <li className="key white" data-key="G3">
            <span>G3</span>
          </li>
          <li className="key white" data-key="G#">
            <span>G#</span>
          </li>
          <li className="key black" data-key="A3">
            <span>A3</span>
          </li>
          <li className="key white" data-key="G3">
            <span>G3</span>
          </li>
          <li className="key white" data-key="G3">
            <span>G3</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
