// eslint-disable-next-line react-hooks/exhaustive-deps
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import ReadFile from '../apis/getRandomQuote'

interface Quotes {
  quote: string
}

function Home() {
  // we liley only need `['quote']` for the key
  const { data, isLoading, error } = useQuery<Quotes>(['quote', null], ReadFile)
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error has occurred.</div>
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

        {/* we can use margin to achieve a similar effect to `<br />` */}
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
        {/* We should use something like <p>Quote: {quote.quote}</p> to achieve this formatting */}
        <p>{String(quote)}</p>
      </div>
    </>
  )
}

export default Home
