import { Link } from 'react-router-dom'

function Page2() {
  return (
    <>
      <header className="header">
        <h1>Piano Pitch Page 2</h1>
      </header>
      <div>
        <Link to={`/`}>
          <button className="searchSubmit">Home</button>
        </Link>
        <Link to={`/page3`}>
          <button className="searchSubmit">Become A Singer</button>
        </Link>
      </div>
    </>
  )
}

export default Page2
