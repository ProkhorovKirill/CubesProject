import { useEffect, useState } from "react";
import './CubicStyles.css'
import 'animate.css'

interface CubicProps {
    d: number,
    imgSrc: string,
    isAnimated: boolean
}


const Cubic = ({d, imgSrc, isAnimated}: CubicProps) => {
    
    const [count, setCount] = useState<number>();
    const [isDisable, setIsDisable] = useState<boolean>();
    const [bgColor, setBgColor] = useState<string>('');

    useEffect(() => {

        if (isAnimated){
            setIsDisable(true);

            if (count) document.querySelector(`#wrap${d}`)?.classList.add('animate__rollIn');

            setTimeout(() => {
                
                document.querySelector(`#wrap${d}`)?.classList.remove('animate__rollIn');
                setIsDisable(false);

            }, 1000)
        }

    }, [count, isAnimated, d])

    function getCubicNumber(){

        setCount(() => {
            return Math.round(Math.random()*(d-1)) + 1;
        });

    }

    

    function handleChangeColor(e: React.ChangeEvent<HTMLInputElement>){
        setBgColor(e.target.value)
    }

return (
    <>
        

        <div className="cubic_element" style={{backgroundColor: bgColor}}>
            
            <h2>Кубик d{d}</h2>

            <div className="wrapper animate__animated" id={`wrap${d}`} style={{backgroundImage: `url('src/images/${imgSrc}.png')`}}>
                <span className={count === d || count === 1 ? 'redCount' : 'count'}>{count}</span>
            </div>

            {!isDisable ? <button onClick={getCubicNumber} className="btn-getNum" disabled={isDisable}>Бросить кубик</button> : <div style={{height: '40px'}}></div>}

            <form action="#" className="get_animation">
                <label htmlFor="bgColor" className="inputColor"><input type="color" name="bgColor" id="bgColor" onChange={handleChangeColor}/>Цвет фона</label>
            </form>

        </div> 
    </>
    )
}

export default Cubic