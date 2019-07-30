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
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  else {
    return (
        <>
        <h1>Statistics</h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {total}</p>
        <p>average {(good-bad)/total}</p>
        <p>positive {good/total}</p>
        </>
    )
  }

}



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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDom.render(<App />,
  document.getElementById('root')
)
