import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { getText,reset } from '../redux/typingSlice';

const NewText = () => {
    const dispatch= useAppDispatch();
    const handleClick = () => {
      dispatch(reset());
      dispatch(getText());
    }
  return (
    <button onClick={()=>handleClick()}>
      <b>New</b>
      </button>
  )
}

export default NewText