import Score from "../Score/Score"

const Student = (props) => {
  const { name, bio, scores } = props.student
  
  return (  
    <>
    <div className="card" >
      <div className="card-header">
    {name}
      </div>
      <div className="card-body">
        <h5 className="card-title">Student Bio</h5>
        <p className="card-text">{bio}</p>
        <ul className="list-group list-group-flush">
          {
            scores.map((score, idx) =>
              <Score 
                key={idx}
                score={score}
              />
            )
          }
        </ul>
      </div>
    </div>
    </>
  )
}

export default Student
