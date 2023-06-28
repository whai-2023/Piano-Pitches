import { Link } from 'react-router-dom'

function Home() {
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
    </>
  )
}

export default Home
