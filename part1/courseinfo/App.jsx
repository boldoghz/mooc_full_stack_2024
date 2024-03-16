const Header = (props) =>{ 
  return(
    <div>
      <h1>{props.course} </h1>
    </div>
  )
}

const Content = (props) =>{
  const content = props.parts.map((part)=>
    <div key={part}>
      <p>{part.name} {' '} {part.exercises}</p>
     </div>
  )
  return(
    <div>
      <p>{content}</p>
      
      </div>
  )
}

const Total = (props) => {
  const points = props.parts.map((point) => point.exercises)
  let sum = 0
  for (let i = 0; i < points.length; i++){
    sum += points[i]
  }
  return(
    <div>
      <p>Number of exercises {sum}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
    
  )
}

export default App