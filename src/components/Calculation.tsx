type CalculationProps = {
    gameStart: boolean
    selectedWeight: string
    confirmSelectedWeight: string
    target: number
}

const Calculation = ({gameStart, selectedWeight, confirmSelectedWeight, target}: CalculationProps) => {
  return (
    <>
        {
            ((gameStart && selectedWeight === '0') || (!gameStart && selectedWeight !== '0')) &&
            <h3>
                {
                    selectedWeight === '0' && confirmSelectedWeight === '0' ?
                    <>
                        <span>Find the right weight to raise the indicator to <span className='number'>{target} cm</span>
                        </span>
                        <br />
                        <br />
                        <span>Remember: <span className='number'>1 cm</span> needs <span className='number'>2.5 kg</span>, then <span className='number'>{target} cm</span> needs ?
                        </span>
                    </>
                    : selectedWeight !== '0' && confirmSelectedWeight === '0' ?
                    <>
                        <span>You have calculated that <span className='number'>{selectedWeight} kg</span> is the right weight to raise the indicator to <span className='number'>{target} cm</span>
                        </span>
                        <br />
                        <br />
                        <span>If you are sure click on ( THROW )</span>
                    </>
                    : Number(confirmSelectedWeight) / 2.5 === target ?
                    <span>🎉BrillianT🎉 Good Job</span>
                    : <span><span className='number'>{selectedWeight}</span> is wrong
                        <br /><br /><br /><span>The right way</span>
                        <br /><br />If <span className='number'>1</span> needs <span className='number'>2.5</span>, then <span className='number'>{target}</span> needs <span className='number'>X</span>
                        <br /><br /><span className='number'>X</span> = <span className='number'>{target}</span> * <span className='number'>2.5</span> / <span className='number'>1</span>
                        <br /><br /><span className='number'>X</span> = <span className='number'>{target * 2.5 / 1}</span>
                        <br /><br /><br /><span>That equals:</span>
                        <br /><br />If <span className='number'>12</span> needs <span className='number'>30</span>, then <span className='number'>{target}</span> needs <span className='number'>X</span>
                        <br /><br /><span className='number'>X</span> is: Target ( <span className='number'>{target}</span> ) calculation ( x <span className='number'>30</span> / <span className='number'>12</span> ) = <span className='number'>{target * 30 / 12}</span>
                    </span>
                }
          </h3>
        }
    </>
  )
}

export default Calculation;