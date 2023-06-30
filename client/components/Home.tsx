// eslint-disable-next-line react-hooks/exhaustive-deps
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import ReadFile from '../apis/getRandomQuote'
interface Quotes {
  quote: string
}

function Home() {
  const { data, isLoading, error } = useQuery<Quotes>(['quote', ReadFile])
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>An error has occurred.</div>
  }

  return (
    <>
      <header className="header">
        <h1 className="title">Piano Pitch!!</h1>
        <h2 className="subtitle">
          Welcome to our Whai 2023 choir. Play our piano to hear our beautiful
          voices.
        </h2>
      </header>
      <div className="homepage">
        <div>
          <Link to={`/page2`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Play Piano</span>
            </button>

            {/* <button className="searchSubmit">Press Piano Key</button> */}
          </Link>
          <Link to={`/page3`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">Become A Singer</span>
            </button>
            {/* <button className="searchSubmit">Become A Singer</button> */}
          </Link>
          <br></br>
        </div>
        <br></br>
        <h2>Quotes about music:</h2>
        <h1>{data}</h1>
      </div>
    </>
  )
}

export default Home
