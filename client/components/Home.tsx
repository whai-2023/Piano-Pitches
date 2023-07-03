// eslint-disable-next-line react-hooks/exhaustive-deps
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import readFile from '../apis/getRandomQuote'
import { useState } from 'react'

interface Quotes {
  quote: string
}

function Home() {
  const [message, setMessage] = useState('')
  const { data, isLoading, error } = useQuery<Quotes>(['quote'], readFile)
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error has occurred.</div>
  }

  async function onClickHelp() {
    const messages = [
      'Join the playground to customize the community piano! -',
      'Remember to only upload mp3 sound files! -',
      'Play Piano will take you to our example piano -',
      'You can add you own image when uploading new audio -',
      'HAVE FUN -',
      'Be creative with it ;) -',
    ]

    const randomIndex = Math.floor(Math.random() * messages.length)
    const randomMessage = messages[randomIndex]

    setMessage(randomMessage)
  }

  const quote = data || ''

  return (
    <>
      <div className="homepage">
        <div className="border">
          <header className="header">
            <h1 className="title">Piano Pitch!!</h1>
            <h2 className="subtitle">
              Welcome to our Whai 2023 choir. Play our piano to hear our
              beautiful voices.
            </h2>
          </header>
        </div>
        <div>
          <Link to={`/WhaiPiano`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Play Piano</span>
            </button>

            {/* <button className="searchSubmit">Press Piano Key</button> */}
          </Link>
          <Link to={`/BecomeASinger`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Become A Singer</span>
            </button>
            {/* <button className="searchSubmit">Become A Singer</button> */}
          </Link>
          <Link to={`/Playground`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Playground</span>
            </button>
            {/* <button className="searchSubmit">Playground</button> */}
          </Link>
          <br></br>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="quotes">Quotes about music:</h1>
        <p>{String(quote)}</p>
        <p className="help"> Click robot for help</p>
      </div>

      <div></div>
      <button className="robot" onClick={onClickHelp}></button>
      <p className="advice">{message}</p>
    </>
  )
}

export default Home
