import { Link } from 'react-router-dom'
import ParticipantForm from './ParticipantForm'

function BecomeASinger() {
  return (
    <>
      <div className="media">
        <header className="header">
          <h1 className="title">BECOME A SINGER!</h1>
        </header>
        <div>
          <Link to={`/`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">HOME</span>
            </button>
          </Link>
          <Link to={`/WhaiPiano`}>
            <button className="button-82-pushable">
              <span className="button-82-shadow"></span>
              <span className="button-82-edge"></span>
              <span className="button-82-front text">BACK</span>
            </button>
          </Link>
        </div>
        <ParticipantForm />
      </div>
    </>
  )
}

export default BecomeASinger
