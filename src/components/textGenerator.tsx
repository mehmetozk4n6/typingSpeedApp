import React, { useEffect } from 'react'
import {useAppSelector,useAppDispatch} from '../redux/hooks'
import {selectText,getText} from '../redux/typingSlice'

const TextGenerator: React.FC = () => {
  const text = useAppSelector(selectText);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(text===""){
      dispatch(getText())
    }
  }, [text])
  
  return (
    <div>{text}</div>
  )
}

export default TextGenerator