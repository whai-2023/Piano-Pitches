export default async function ReadFile() {
  try {
    const response = await fetch('./quotes.json')
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.length)
    const quote = data[randomIndex].quote
    console.log(quote)
    return quote
  } catch (err) {
    console.error(err)
  }
}
