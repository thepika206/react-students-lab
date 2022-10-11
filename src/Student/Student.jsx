import Score from "../Score/Score"

const Student = (props) => {
  const { name, bio, scores } = props.student
  
  return (  
    <>  
    <h2>Student Name: {name}</h2>
    <p>Student Bio: {bio}</p>
    <div>
      {
        scores.map((score, idx) =>
          <Score 
            key={idx}
            score={score}
          />

        )
      }
    </div>
    </>
  )
}

export default Student
