import { Link } from 'react-router-dom'
import ParticipantForm from './ParticipantForm'

function BecomeASinger() {
  return (
    <>
      <header className="header">
        <h1 className="title">Become a Singer!</h1>
      </header>
      <div>
        <Link to={`/`}>
          <button className="button-82-pushable">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Home</span>
          </button>
        </Link>
        <Link to={`/WhaiPiano`}>
          <button className="button-82-pushable">
            <span className="button-82-shadow"></span>
            <span className="button-82-edge"></span>
            <span className="button-82-front text">Back</span>
          </button>
        </Link>
      </div>
      <ParticipantForm />

      {/* C2 */}
      {/* C#2 */}
    </>
  )
}

export default BecomeASinger
