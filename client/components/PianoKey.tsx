interface Props {
  keyName: string
  handleKeyClick: (arg0: string) => void
  pressedKeys: string[]
  backgroundColor: string
  keyColor: string
}

function PianoKey(props: Props) {
  return (
    <>
      <button
        className={`key ${props.keyColor}`}
        data-key={props.keyName}
        style={
          props.pressedKeys.includes(props.keyName)
            ? { background: props.backgroundColor }
            : {}
        }
        onClick={() => {
          props.handleKeyClick(props.keyName)
        }}
      >
        <span>{props.keyName.replace('W', '#').replace(' sharp ', '#')}</span>
      </button>
    </>
  )
}

export default PianoKey
