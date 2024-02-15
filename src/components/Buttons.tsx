import mouse_click from '../assets/sounds/mouse-click.mp3';

import { ResultProps } from "../types/types";

type ButtonsProps = {
  selectedWeight: string
  gameStart: boolean
  setGameStart: React.Dispatch<React.SetStateAction<boolean>>
  setConfirmSelectedWeight: React.Dispatch<React.SetStateAction<string>>
  confirmSelectedWeight: string
  setSelectedWeight: React.Dispatch<React.SetStateAction<string>>
  target: number
  setTarget: React.Dispatch<React.SetStateAction<number>>
  result: ResultProps
  setResult: React.Dispatch<React.SetStateAction<ResultProps>>
}

const Buttons = ({
                  selectedWeight, gameStart, setGameStart, setConfirmSelectedWeight, confirmSelectedWeight, setSelectedWeight, target, setTarget, result, setResult
                }: ButtonsProps) => {

  const mouseClick = new Audio(mouse_click);

  return (
    <>
      <button onClick={() => {
          if (selectedWeight === '0') {
            setGameStart(!gameStart);
          } else {
            setConfirmSelectedWeight(selectedWeight);
          }
          if (!gameStart && selectedWeight !== '0' && confirmSelectedWeight === '0') {
            const currentAttempts = result.attempts;
            const currentRight = result.right;
            const currentWrong = result.wrong;
            setResult({
              attempts: currentAttempts + 1,
              right: Number(selectedWeight) / 2.5 === target ? currentRight + 1 : currentRight,
              wrong: Number(selectedWeight) / 2.5 !== target ? currentWrong + 1 : currentWrong
            })
          }
          if (confirmSelectedWeight !== '0') {
            setGameStart(true);
            setSelectedWeight('0');
            setConfirmSelectedWeight('0');
            setTarget(Math.floor(Math.random() * (30 - 2 + 1)) + 2);
          }
          mouseClick.play();
        }} disabled={gameStart}>{
          !gameStart && selectedWeight === '0' ?
          'START'
          : !gameStart && selectedWeight !== '0' && confirmSelectedWeight === '0' ?
          'THROW'
          : !gameStart && selectedWeight !== '0' && confirmSelectedWeight !== '0' ?
          'NEXT' : 'WEIGHT ?'
        }
      </button>
      {
        !gameStart && selectedWeight === '0' && Object.values(result).some(elm => elm > 0) &&
        <button onClick={() => {
          setResult({attempts: 0, right: 0, wrong: 0});
          mouseClick.play();
        }}>RESET RESULTS</button>
      }
      {
        (gameStart || (!gameStart && selectedWeight !== '0')) &&
        <button onClick={() => {
            if (confirmSelectedWeight === '0') {
              setGameStart(!gameStart);
            }
            if (
              (gameStart && selectedWeight === '0' && confirmSelectedWeight === '0') ||
            (!gameStart && selectedWeight !== '0' && confirmSelectedWeight !== '0')
            ) {
              setResult({attempts: 0, right: 0, wrong: 0});
            }
            setSelectedWeight('0');
            setConfirmSelectedWeight('0');
            mouseClick.play();
          }}>{
            (gameStart || (!gameStart && confirmSelectedWeight !== '0')) ?
            'RESTART' : 'CHANGE'
          }
        </button>
      }
      {
        (gameStart || (!gameStart && selectedWeight !== '0')) &&
        <button onClick={() => {
          setGameStart(false);
          setSelectedWeight('0');
          setConfirmSelectedWeight('0');
          mouseClick.play();
        }}>END
        </button>
      }
    </>
  )
}

export default Buttons;