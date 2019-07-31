import React, {useState} from 'react'
import ReactDom from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = ({good,neutral,bad}) => {
  let total = good + neutral +bad
  if(total===0){
    return(
      <>
        <p>No feedback given</p>
      </>
    )
  }
  else {
    return (
        <table>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={total} />
        <Statistic text="Average" value={(good-bad)/total} />
        <Statistic text="Positive" value={good/total*100} per="%" />
        </table>
    )
  }
}

const Statistic = ({text,value,per}) =>(
  <tr>
    <td>{text}</td>
    <td>{value}{per}</td>
  </tr>
)



const App = () => {
  const[good,setGood] = useState(0)
  const[neutral,setNeutral] = useState(0)
  const[bad,setBad] = useState(0)

  const handleGood = () => setGood(good+1)
  const handleNeutral = () => setNeutral(neutral+1)
  const handleBad = () => setBad(bad+1)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handleGood()} text='Good' />
      <Button handleClick={() => handleNeutral()} text='Neutral' />
      <Button handleClick={() => handleBad()} text='Bad' />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDom.render(<App />,
  document.getElementById('root')
)
