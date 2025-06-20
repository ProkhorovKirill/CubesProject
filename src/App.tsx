import './App.css';
import Cubic from './components/Cubic';
import { useState } from 'react';

function App() {

  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  
  
  function handleClickAnimation(e: React.ChangeEvent<HTMLInputElement>) {
    setIsAnimated(e.target.checked);
  }

  return (
    <>

      <form action="#" className='form-anim'>
        <label htmlFor="isAnimated" className="labelForAnim">
            <input
            type="checkbox"
            name="isAnimated"
            id="isAnimated"
            checked={isAnimated}
            onChange={handleClickAnimation}
            />
            Анимация
        </label>
      </form>

      <div className="wrapper2">
        <div>
          <Cubic d={20} imgSrc='d20-Photoroom' isAnimated={isAnimated}/>
        </div>
        <div>
          <Cubic d={4} imgSrc='d4' isAnimated={isAnimated}/>
        </div>
        <div>
          <Cubic d={6} imgSrc='d6' isAnimated={isAnimated}/>
        </div>
        <div>
          <Cubic d={8} imgSrc='d8' isAnimated={isAnimated}/>
        </div>
        <div>
          <Cubic d={10} imgSrc='d8' isAnimated={isAnimated}/>
        </div>
        <div>
          <Cubic d={12} imgSrc='d12' isAnimated={isAnimated}/>
        </div>
      </div>

      

    </>
  )
}

export default App