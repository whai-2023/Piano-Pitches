// eslint-disable-next-line react-hooks/exhaustive-deps
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className="media">
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
      </div>
    </>
  )
}

export default Home
