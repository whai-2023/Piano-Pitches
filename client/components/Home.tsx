import { Link } from 'react-router-dom'

function Home() {
  const pianoKeys = document.querySelectorAll<HTMLElement>('.piano-keys .key')
  const volumeSlider = document.querySelector<HTMLInputElement>(
    '.volume-slider input'
  )
  const keysCheckbox = document.querySelector<HTMLInputElement>(
    '.keys-checkbox input'
  )
  const allKeys: string[] = []
  const audio = new Audio(`tunes/a.wav`) // by default, audio src is "a" tune

  const playTune = (key: string) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key pressed
    audio.play() // playing audio
    const clickedKey = document.querySelector<HTMLElement>(
      `[data-key="${key}"]`
    ) // getting clicked key element
    if (clickedKey) {
      clickedKey.classList.add('active') // adding active class to the clicked key element
      setTimeout(() => {
        // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove('active')
      }, 150)
    }
  }

  pianoKeys.forEach((key) => {
    allKeys.push(key.dataset.key || '') // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener('click', () => playTune(key.dataset.key || ''))
  })

  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.volume = Number(e.target.value) // passing the range slider value as an audio volume
  }

  const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach((key) => key.classList.toggle('hide'))
  }

  const pressedKey = (e: KeyboardEvent) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    if (allKeys.includes(e.key)) playTune(e.key)
  }

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
          <li className="key black" data-key="w">
            <span>w</span>
          </li>
          <li className="key white" data-key="s">
            <span>s</span>
          </li>
          <li className="key black" data-key="e">
            <span>e</span>
          </li>
          <li className="key white" data-key="d">
            <span>d</span>
          </li>
          <li className="key white" data-key="f">
            <span>f</span>
          </li>
          <li className="key black" data-key="t">
            <span>t</span>
          </li>
          <li className="key white" data-key="g">
            <span>g</span>
          </li>
          <li className="key black" data-key="y">
            <span>y</span>
          </li>
          <li className="key white" data-key="h">
            <span>h</span>
          </li>
          <li className="key black" data-key="u">
            <span>u</span>
          </li>
          <li className="key white" data-key="j">
            <span>j</span>
          </li>
          <li className="key white" data-key="k">
            <span>k</span>
          </li>
          <li className="key black" data-key="o">
            <span>o</span>
          </li>
          <li className="key white" data-key="l">
            <span>l</span>
          </li>
          <li className="key black" data-key="p">
            <span>p</span>
          </li>
          <li className="key white" data-key=";">
            <span>;</span>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home
