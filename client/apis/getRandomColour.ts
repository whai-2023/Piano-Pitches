// this seems more like a utility function than an api function (it's not making any api calls or async requests)
export default function getRandomColour() {
  const letters = '0123456789ABCDEF'
  let colour = '#'
  for (let i = 0; i < 6; i++) {
    colour += letters[Math.floor(Math.random() * 16)]
  }
  return colour
}
