import { shuffleArray } from "../helper";

import mouse_click from '../assets/sounds/mouse-click.mp3';

type WeightIndicatorProps = {
    gameStart: boolean
    selectedWeight: string
    confirmSelectedWeight: string
    target: number
    setSelectedWeight: React.Dispatch<React.SetStateAction<string>>
    setGameStart: React.Dispatch<React.SetStateAction<boolean>>
}

const WeightIndicator = ({
                            gameStart, selectedWeight, confirmSelectedWeight, target, setSelectedWeight, setGameStart
                        }: WeightIndicatorProps) => {

    const mouseClick = new Audio(mouse_click);

    const weightIndicator = (num1: number, num2: number): {
      indicators: JSX.Element[];
      indicator: JSX.Element[];
    } => {
      const indicators: number[] = [];
      for (let i = num1; i <= num2; i += 2.5) {
        indicators.push(i);
      }
      return {
        indicators: shuffleArray(indicators, gameStart, selectedWeight, confirmSelectedWeight).map(
          (elm, i) => <p key={i} style={{
              color: `${
                  gameStart && selectedWeight !== String(elm) ?
                  'rgb(100, 100, 200)'
                  : selectedWeight === String(elm) && confirmSelectedWeight === '0' ?
                  'rgb(255, 215, 0)'
                  : selectedWeight === String(elm) && confirmSelectedWeight !== '0' ?
                  elm / 2.5 === target ?
                  'rgb(0, 240, 0)' : 'rgb(255, 75, 75)'
                  : !gameStart && selectedWeight !== '0' ?
                  elm / 2.5 === target ?
                  (
                      confirmSelectedWeight !== '0' ?
                      'rgb(0, 240, 0)' : 'rgb(100, 100, 200)'
                  ) : 'rgb(100, 100, 200)'
                  : 'rgb(250, 250, 250)'
              }`}}><span>--</span> <span>{elm < 10 && !String(elm).includes('.') ? `0${elm}` : elm}</span> <span>kg</span>
          </p>
          ),
        indicator: indicators.map(
          (elm, i) => <p key={i} style={{
              backgroundColor: `${
                  !gameStart && selectedWeight === '0' && elm === 2.5 ?
                  'rgb(100, 100, 200)'
                  : selectedWeight !== String(elm) ?
                  'transparent'
                  : confirmSelectedWeight !== '0' ?
                  (
                      Number(selectedWeight) / 2.5 !== target ?
                      'rgb(255, 75, 75)' : 'rgb(0, 240, 0)'
                  ) : 'rgb(255, 215, 0)'
              }`}}>{elm}
          </p>
          )
      }
    }

    const weightSelector = (): JSX.Element[] => {
      const weights: number[] = [];
      for (let i = 2.5; i < 76; i += 2.5) {
        weights.push(i);
      }
      return shuffleArray(weights, gameStart, selectedWeight, confirmSelectedWeight).map(
          (elm, i) => <option key={i} value={elm}>{elm}</option>
      );
    }

  return (
    <div className='stand'>
        <div className='indicator'>
            {weightIndicator(2.5, 75).indicator}
        </div>
        <div className={!gameStart ? 'frame' : 'weight__selector'}>
          {
            !gameStart ?
              weightIndicator(2.5, 75).indicators
            :
            <>
              <select onChange={(e) => {
                  setSelectedWeight(e.target.value);
                  mouseClick.play();
                  setGameStart(!gameStart);
                }} defaultValue='0'>
                  <option disabled>0</option>
                  {weightSelector()}
              </select>
              <p>FIND THE RIGHT WEIGHT</p>
            </>
          }
        </div>
    </div>
  )
}

export default WeightIndicator;