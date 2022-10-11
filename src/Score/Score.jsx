const Score = (props) => {
  const {date, score} = props.score
  
  return (  
    <li className="list-group-item">
      {date} : Score: {score}
    </li>
  )
}

export default Score;