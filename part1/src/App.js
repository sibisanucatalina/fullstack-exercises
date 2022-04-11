import { useState } from "react"

const Greeting = () => {
  return (
    <h1>
      Give feedback
    </h1>
  )
}

const Statistics = ({ good, bad, neutral, allReviews, avg, pos }) => {
  if (allReviews === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <p>good  {good}</p>
      <p>bad  {bad}</p>
      <p>neutral  {neutral}</p>
      <div>all  {allReviews}</div>
      <div>avg  {avg}</div>
      <div>pos  {pos} %</div>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodReviews = () => {
    setAll(allReviews + 1)
    setGood(good + 1)
    calculateAVG(good + 1, bad, allReviews + 1)
    calculatePositive(good + 1, allReviews + 1)
  }
  const handleNeutralReviews = () => {
    setAll(allReviews + 1)
    setNeutral(neutral + 1)
    calculateAVG(good, bad, allReviews + 1)
    calculatePositive(good, allReviews + 1)
  }
  const handleBadReviews = () => {
    setAll(allReviews + 1)
    setBad(bad + 1)
    calculateAVG(good, bad + 1, allReviews + 1)
    calculatePositive(good, allReviews + 1)

  }
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)
  const [allReviews, setAll] = useState(0)

  function calculateAVG(good, bad, allReviews) {
    setAvg((good * 1 + bad * -1) / allReviews)
  }

  function calculatePositive(good, allReviews) {
    console.log(good)
    setPos((good / allReviews) * 100)
    console.log(allReviews)
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
      <Statistics avg={avg} allReviews={allReviews} pos={pos} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
