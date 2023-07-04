export default async function readFile() {
  try {
    const response = await fetch('/data/quotes.json')
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.length)
    const quote = data[randomIndex].quote
    console.log(quote)
    return quote
  } catch (err) {
    console.error(err)
    throw err
  }
}
