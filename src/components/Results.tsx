import { ResultProps } from "../types/types";

const Results = ({attempts, right, wrong}: ResultProps) => {
  return (
    <div className='info'>
      <h2>RESULT</h2>
      <div>
        <h3>ATTEMPTS:</h3>
        <p>{attempts}</p>
      </div>
      <div>
        <h3>RIGHT:</h3>
        <p>{right}</p>
      </div>
      <div>
        <h3>WRONG:</h3>
        <p>{wrong}</p>
      </div>
    </div>
  )
}

export default Results;