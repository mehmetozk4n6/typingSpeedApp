import React,{useState} from 'react';
import {useAppSelector,useAppDispatch} from '../redux/hooks';
import {incrementTextNum,addbool,selectTextGenerator,selectMatchTextNum} from '../redux/typingSlice';


const TypingArea = () => {
  const dispatch = useAppDispatch();
  const textGenerator = useAppSelector(selectTextGenerator);
  const matchTextNum = useAppSelector(selectMatchTextNum);
  const [typer,setTyper] = useState("")
  const matchTyper = (input:string) => {
    if(input[input.length-1]===" "){
      setTyper("");
      if(input.trim()===textGenerator[matchTextNum]){
        console.log(input.trim())
        dispatch(addbool(true));
      }else{
        dispatch(addbool(false));
      }
      dispatch(incrementTextNum());
    }else{
      setTyper(input);
    }
  }
  return (
    <input value={typer} onChange={e => {matchTyper(e.target.value)}} />
  )
}

export default TypingArea