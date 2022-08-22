import React,{useState} from 'react';
import {useAppSelector,useAppDispatch} from '../redux/hooks';
import {incrementTextNum,addbool,selectTextGenerator,selectMatchTextNum,selectSituation, changeSituation,  typeText} from '../redux/typingSlice';


const TypingArea = () => {
  const dispatch = useAppDispatch();
  const textGenerator = useAppSelector(selectTextGenerator);
  const matchTextNum = useAppSelector(selectMatchTextNum);
  const situation = useAppSelector(selectSituation);
  const [typer,setTyper] = useState("")

  const matchTyper = (input:string) => {
    if(situation==='idle'){
      dispatch(changeSituation('started'));
    }
    if(input[input.length-1]===" "){
      dispatch(typeText(""));
      setTyper("");
      if(input.trim()===textGenerator[matchTextNum]){
        dispatch(addbool(true));
      }else{
        dispatch(addbool(false));
      }
      dispatch(incrementTextNum());
    }else{
      dispatch(typeText(input));
      setTyper(input);
    }
  }
  return (
    <input value={situation==='started'?typer:""} disabled={situation==='finished'} onChange={e => {matchTyper(e.target.value)}} autoFocus />
  )
}

export default TypingArea