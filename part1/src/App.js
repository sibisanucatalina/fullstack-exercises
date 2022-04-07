import { useState } from "react"

const Greeting = () => {
  return (
    <h1>
      Give feedback
    </h1>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleGoodReviews = () => {
    // setAll(allClicks.concat('R'))
    setGood(good + 1)

  }
  const handleBadReviews = () => {
    // setAll(allClicks.concat('L'))
    setBad(bad + 1)
  }
  const handleNeutralReviews = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <Greeting />
      <button onClick={handleGoodReviews}>
        good
      </button>
      <button onClick={handleBadReviews}>
        bad
      </button>
      <button onClick={handleNeutralReviews}>
        neutral
      </button>

      <h1>
        statistics
      </h1>

      <p>good  {good}</p>
      <p>bad  {bad}</p>
      <p>neutral  {neutral}</p>
    </div>
  )
}

export default App
