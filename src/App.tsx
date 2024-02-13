import { useState, useEffect } from 'react';

import { ResultProps } from './types/types';

import Info from './components/Info';
import HeightIndicator from './components/HeightIndicator';
import WeightIndicator from './components/WeightIndicator';
import Buttons from './components/Buttons';
import Results from './components/Results';

import scale1 from './assets/images/scale1.png';
import scale2 from './assets/images/scale2.gif';

import './App.css';
import Calculation from './components/Calculation';

const App = () => {

  const [gameStart, setGameStart] = useState<boolean>(false);
  const [selectedWeight, setSelectedWeight] = useState<string>('0');
  const [confirmSelectedWeight, setConfirmSelectedWeight] = useState<string>('0');
  const [target, setTarget] = useState<number>(0);
  const [result, setResult] = useState<ResultProps>({attempts: 0, right: 0, wrong: 0});

  useEffect(() => {
    if (!gameStart && selectedWeight === '0') {
      setTarget(Math.floor(Math.random() * (30 - 2 + 1)) + 2);
    }
  }, [gameStart, selectedWeight]);

  return (
    <>
      <div className='container'>
        <Info />
        <HeightIndicator
          gameStart={gameStart}
          selectedWeight={selectedWeight}
          confirmSelectedWeight={confirmSelectedWeight}
          target={target}
        />
        <div className='control'>
          <h2>FIND THE RIGHT WEIGHT</h2>
          <Calculation
            gameStart={gameStart}
            selectedWeight={selectedWeight}
            confirmSelectedWeight={confirmSelectedWeight}
            target={target}
          />
          {
            (confirmSelectedWeight === '0' || (confirmSelectedWeight !== '0' && Number(confirmSelectedWeight) / 2.5 === target)) &&
            <img src={
              selectedWeight === '0' ? scale1 : (confirmSelectedWeight !== '0' ? scale1 : scale2)
            } alt="scale" />
          }
          <Buttons
            selectedWeight={selectedWeight}
            gameStart={gameStart}
            setGameStart={setGameStart}
            setConfirmSelectedWeight={setConfirmSelectedWeight}
            confirmSelectedWeight={confirmSelectedWeight}
            setSelectedWeight={setSelectedWeight}
            target={target}
            setTarget={setTarget}
            result={result}
            setResult={setResult}
          />
        </div>
        <WeightIndicator
          gameStart={gameStart}
          selectedWeight={selectedWeight}
          confirmSelectedWeight={confirmSelectedWeight}
          target={target}
          setSelectedWeight={setSelectedWeight}
          setGameStart={setGameStart}
        />
        <Results
          attempts={result.attempts}
          right={result.right}
          wrong={result.wrong}
        />
      </div>
      <div className='alternative'>
        <h1>THE SCREEN IS TOO NARROW, PLEASE OPEN THE GAME ON A SCREEN WIDER THAN 700 PIXELS</h1>
      </div>
    </>
  )
}

export default App;