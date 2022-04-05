const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course.name}</h1>
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
      <Part name={props.course.parts[0].name} exercise={props.course.parts[0].exercise} />
      <Part name={props.course.parts[1].name} exercise={props.course.parts[1].exercise} />
      <Part name={props.course.parts[2].name} exercise={props.course.parts[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise} </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half stack application development',
    parts: [{
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App
