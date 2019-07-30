import React, {useState} from 'react'
import ReactDom from 'react-dom'

const Button = ({handleClick,text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = (props) => (
  <p>{props.text} {props.value}</p>
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
      <h1>Statistic</h1>
      <Display text='Good' value ={good} />
      <Display text='Neutral' value ={neutral} />
      <Display text='Bad' value ={bad} />
      <Display text='all' value ={good+neutral+bad} />
      <p>average {(good-bad)/(good+bad+neutral)}</p>
      <p>positive {good/(good+bad+neutral)} %</p>
    </div>
  )
}

ReactDom.render(<App />,
  document.getElementById('root')
)
