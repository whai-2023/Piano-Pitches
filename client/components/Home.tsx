// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <header className="header">
        <h1 className="title">Piano Pitch!!</h1>
        <h2 className="subtitle">
          Welcome to our Whai 2023 choir. Play our piano to hear our beautiful
          voices.
        </h2>
      </header>
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
      </div>
      <div className="homepage">
        <img src="/public/audio/images/pitches.gif" alt="background"></img>
      </div>
    </>
  )
}

export default Home
