const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.name} {props.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part name={props.part1.name} exercise={props.part1.exercise} />
      <Part name={props.part2.name} exercise={props.part2.exercise} />
      <Part name={props.part3.name} exercise={props.part3.exercise} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3} </p>
    </div>
  )
}


const App = () => {
  const course = 'Half stack application development'
  const part1 = {
    name: 'Fundamentals of react',
    exercise: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercise: 7
  }
  const part3 = {
    name: 'State of a component',
    exercise: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise1={part1.exercise} exercise2={part2.exercise} exercise3={part3.exercise} />
    </div>
  )
}

export default App
