const Score = (props) => {
  const {date, score} = props.score
  
  return (  
    <div className="score">
      <h4>Test Score</h4>
      <p>Date: {date}</p>
      <p>Score: {score}</p>
    </div>
  )
}

export default Score;