import { Link } from 'react-router-dom'

function Page3() {
  return (
    <>
      <header className="header">
        <h1>Piano Pitch Page 3</h1>
      </header>
      <div>
        <Link to={`/`}>
          <button className="searchSubmit">Home</button>
        </Link>
        <Link to={`/page2`}>
          <button className="searchSubmit">Back</button>
        </Link>
      </div>
    </>
  )
}

export default Page3
