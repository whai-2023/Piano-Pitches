import { Link } from 'react-router-dom'
import { useEffect, useState, useRef } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getParticipants } from '../apis/apiClient'
import { Participant } from '../../models/Participant'
import PianoKey from './PianoKey'
import getRandomColour from '../lib/utils'
import { keys } from './Keys'

function WhaiPiano() {
  const [message, setMessage] = useState('')
  const [selectedKey, setSelectedKey] = useState<string | null>(null)
  const [selectedParticipants, setSelectedParticipants] = useState<
    Participant[] | null
  >(null)
  const [volume, setVolume] = useState(0.5)
  const [backgroundColour, setBackgroundColour] = useState('white')
  const [pressedKeys, setPressedKeys] = useState<string[]>([])
  const [imageVisible, setImageVisible] = useState(false)

  const volumeSlider = useRef<HTMLInputElement>(null)

  const { data: participants, error } = useQuery<Participant[]>(
    ['participants'],
    getParticipants
  )

  useEffect(() => {
    const slider = volumeSlider.current

    const eventListener = (event: Event) => {
      handleVolume(event as unknown as React.ChangeEvent<HTMLInputElement>)
    }

    if (slider) {
      slider.addEventListener('input', eventListener)
    }

    return () => {
      if (slider) {
        slider.removeEventListener('input', eventListener)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function onClickHelp() {
    const messages = [
      'La LA lala LALA! -',
      'Weow beautiful voices!! -',
      'My name is Piano Roboto! -',
      'Bit out of tune there... -',
      'I will teach you how to sing like me -',
      'Be creative with it ;) -',
      'MEOW -',
    ]

    const randomIndex = Math.floor(Math.random() * messages.length)
    const randomMessage = messages[randomIndex]

    setMessage(randomMessage)
  }

  function handleKeyClick(key: string) {
    setSelectedKey(key)

    setPressedKeys((prevPressedKeys) => {
      if (!prevPressedKeys.includes(key)) {
        const randomColour = getRandomColour()
        setBackgroundColour(randomColour)
        setImageVisible(true)
        return [key]
      }
      return prevPressedKeys
    })
  }
  const [audio] = useState(new Audio())
  const [audio2] = useState(new Audio())
  const blackKeys = [1, 3, 6, 8, 10]

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value)
    setVolume(newVolume)
    audio.volume = newVolume
    audio2.volume = newVolume
  }

  const participant1 = participants?.find((participant) => {
    return participant.key === selectedKey
  })

  useEffect(() => {
    if (selectedKey != undefined && participants != undefined) {
      if (selectedKey.length === 2 && participant1 != undefined) {
        audio.src = participant1?.audioURL
        audio.play()
        console.log('playing white key')

        setSelectedParticipants([participant1 as Participant])
      } else {
        const selectedKeyIndex = keys.indexOf(selectedKey)
        const selectedKey1 = keys[selectedKeyIndex - 1]
        const selectedKey2 = keys[selectedKeyIndex + 1]

        const participantLeft = participants?.find((participant) => {
          return participant.key === selectedKey1
        })
        const participantRight = participants?.find((participant) => {
          return participant.key === selectedKey2
        })
        audio.src = participantLeft?.audioURL as string
        audio.play()

        audio2.src = participantRight?.audioURL as string
        audio2.play()

        setSelectedParticipants([
          participantLeft as Participant,
          participantRight as Participant,
        ])
      }
    }
  }, [participants, audio, audio2, selectedKey, participant1])

  return (
    <>
      <div className="media">
        <header className="header">
          {error ? (
            <div>There was an error: {(error as Error).message}</div>
          ) : null}
          <h1 className="title">PLAY PIANO!!</h1>
          <div>
            <Link to={`/`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">HOME</span>
              </button>
            </Link>
            <Link to={`/BecomeASinger`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">BECOME A SINGER</span>
              </button>
            </Link>
            <Link to={`/Playground`}>
              <button className="button-82-pushable">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">PLAYGROUND</span>
              </button>
            </Link>
          </div>
        </header>

        <div className="wrapper">
          <header>
            <h2>Whai 2023</h2>
            <div>
              {selectedParticipants?.map((participant, index) => {
                if (index == selectedParticipants.length - 1) {
                  return (
                    <>
                      <span key={index} className="digitalName">
                        {participant.name}
                      </span>
                    </>
                  )
                } else {
                  return (
                    <>
                      <span key={index} className="digitalName">
                        {participant.name}
                      </span>{' '}
                    </>
                  )
                }
              })}
            </div>
            <div className="column volume-slider">
              <label htmlFor="volume-slider">Volume</label>
              <input
                ref={volumeSlider}
                type="range"
                id="volume-slider"
                min="0"
                max="1"
                value={volume}
                step="any"
                onChange={handleVolume}
              />
            </div>
          </header>
          <div className="piano-keys">
            {keys.map((keyName, index) => {
              return (
                <>
                  <PianoKey
                    key={index}
                    keyName={keyName}
                    handleKeyClick={handleKeyClick}
                    pressedKeys={pressedKeys}
                    backgroundColor={backgroundColour}
                    keyColor={
                      blackKeys.includes(index % 12) ? 'black' : 'white'
                    }
                  />
                </>
              )
            })}
          </div>
        </div>
      </div>
      <br></br>

      <div className="bottomHalf">
        {imageVisible && (
          <>
            {selectedParticipants?.length == 1 && (
              <div className="bottomHalf">
                <div className="image">
                  <div className="fp1">
                    {imageVisible && selectedParticipants?.length == 1 && (
                      <img
                        className="fp"
                        src={participant1?.image}
                        alt="participant logo depending on key"
                      />
                    )}
                  </div>
                </div>
                <div className="">
                  <div className="qAndA">
                    <span className="question">{participant1?.question}</span>
                  </div>
                  <br></br>
                  <div className="">
                    <p className="answer">{participant1?.answer}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <button className="robot" onClick={onClickHelp}>
        i am not empty
      </button>
      {message != '' && <p className="advicePiano">{message}</p>}
    </>
  )
}

export default WhaiPiano
