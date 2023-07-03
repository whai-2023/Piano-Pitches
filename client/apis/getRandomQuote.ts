// regular functions should follow the camelCase naming convention
export default async function ReadFile() {
  try {
    // if quotes.json exists in client/apis folder
    // we can probably just import it instead of making a fetch request
    // if we want to keep it as a fetch request, we can move the file to the public folder and fetch from there instead (e.g. fetch('/data/quotes.json'))

    const response = await fetch('client/apis/quotes.json')
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.length)
    const quote = data[randomIndex].quote
    console.log(quote)
    return quote
  } catch (err) {
    // if the above code fails, we are catcing here and not rethrowing the error
    // this may cause unwanted behaviour in the code that calls this function (it will just return undefined when an error occurs)
    console.error(err)
  }
}
