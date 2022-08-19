import React from 'react'
import { useAppDispatch } from '../redux/hooks'
import { getText } from '../redux/typingSlice';

const NewText = () => {
    const dispatch= useAppDispatch();
  return (
    <button onClick={()=>dispatch(getText())}>New Text</button>
  )
}

export default NewText