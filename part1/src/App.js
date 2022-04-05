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
  const parts = [{
    name: 'Fundamentals of react',
    exercise: 10
  },
  {
    name: 'Using props to pass data',
    exercise: 7
  },
  {
    name: 'State of a component',
    exercise: 14
  }]

  return (
    <div>
      <Header course={course} />
      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />
      <Total exercise1={parts[0].exercise} exercise2={parts[1].exercise} exercise3={parts[2].exercise} />
    </div>
  )
}

export default App
