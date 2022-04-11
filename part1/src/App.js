import { useState } from "react"

const Greeting = () => {
  return (
    <h1>
      Give feedback
    </h1>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
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
      <StatisticLine text='good' value={good} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='all' value={allReviews} />
      <StatisticLine text='average' value={avg} />
      <StatisticLine text='positive' value={pos} />
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)
  const [allReviews, setAll] = useState(0)
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
  function calculateAVG(good, bad, allReviews) {
    setAvg((good * 1 + bad * -1) / allReviews)
  }

  function calculatePositive(good, allReviews) {
    setPos((good / allReviews) * 100)
  }

  return (
    <div>
      <Greeting />
      <Button onClick={handleGoodReviews} text='good' />
      <Button onClick={handleBadReviews} text='bad' />
      <Button onClick={handleNeutralReviews} text='neutral' />
      <h1>
        statistics
      </h1>
      <Statistics avg={avg} allReviews={allReviews} pos={pos} good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App
