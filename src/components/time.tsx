
import { useEffect, useState } from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {useAppSelector,useAppDispatch} from '../redux/hooks';
import { selectSituation,changeSituation} from '../redux/typingSlice';

interface rendertimex {
    remainingTime:number
}

const RenderTime = ({ remainingTime }:rendertimex) => {
    const dispatch = useAppDispatch();
    if (remainingTime === 0) {
        dispatch(changeSituation('finished'));
      return <div className="timer">..</div>;
    }

    return (
      <div className="timer">
        <div className="value">{remainingTime}</div>
      </div>
    );
  };

const Time = () => {
    const situation = useAppSelector(selectSituation);
    const [key,setKey] = useState(0)

    useEffect(()=>{
        if(situation==='finished' || situation==='idle') setKey(prev=>prev+1)
    },[situation])
    
   
  return (
    <CountdownCircleTimer
          key={key}
          isPlaying={situation==='started'}
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: false })}
          size={50}
        >
          {RenderTime}
    </CountdownCircleTimer>
  )
}

export default Time