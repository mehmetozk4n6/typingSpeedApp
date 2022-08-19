import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTimer } from '../redux/typingSlice'

const Timer = () => {
    const time = useAppSelector(selectTimer);
  return (
    <div>{time} sec.</div>
  )
}

export default Timer