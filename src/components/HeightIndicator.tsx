type HeightIndicatorProps = {
    gameStart: boolean
    selectedWeight: string
    confirmSelectedWeight: string
    target: number
}

const HeightIndicator = ({gameStart, selectedWeight, confirmSelectedWeight, target}: HeightIndicatorProps) => {

    const heightIndicator = (num1: number, num2: number) => {
        const indicators: number[] = [];
        for (let i = num1; i > num2; i--) {
          indicators.push(i);
        }
        return {
          indicators: indicators.map(
            (elm, i) => <p key={i} style={{
                color: `${
                    gameStart && selectedWeight === '0' && elm !== target ?
                    'rgb(100, 100, 200)'
                    : (gameStart && selectedWeight === '0' && confirmSelectedWeight === '0' && elm === target) ||
                    (!gameStart && selectedWeight !== '0' && confirmSelectedWeight === '0' && elm === target) ?
                    'rgb(255, 215, 0)'
                    : !gameStart && selectedWeight !== '0' && elm === target ?
                    elm === Number(selectedWeight) / 2.5 ?
                    'rgb(0, 240, 0)' : 'rgb(255, 215, 0)'
                    : !gameStart && elm === Number(selectedWeight) / 2.5 && confirmSelectedWeight !== '0' ?
                    'rgb(255, 75, 75)' : 'rgb(250, 250, 250)'
                }`}}><span>{elm < 10 ? `0${elm}` : elm}</span> <span>cm</span> <span>--</span>
            </p>
          ),
          indicator: indicators.map(
            (elm, i) => <p key={i} style={{
                backgroundColor: `${
                    !gameStart && selectedWeight === '0' && elm === 1 ?
                    'rgb(100, 100, 200)'
                    : ((gameStart && selectedWeight === '0') ||
                    (!gameStart && selectedWeight !== '0')) && elm === target && confirmSelectedWeight === '0' ?
                    'rgb(255, 215, 0)'
                    : Number(confirmSelectedWeight) / 2.5 !== elm ?
                    'transparent'
                    : !gameStart && elm !== target ?
                    'rgb(255, 75, 75)' : 'rgb(0, 240, 0)'
                }`}}>{elm}
            </p>
          )
        }
      }

  return (
    <div className='stand'>
        <div className='frame'>
            {heightIndicator(30, 0).indicators}
        </div>
        <div className='indicator'>
            {heightIndicator(30, 0).indicator}
        </div>
    </div>
  )
}

export default HeightIndicator;