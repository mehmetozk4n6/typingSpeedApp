import React, { useEffect } from 'react'
import {useAppSelector,useAppDispatch} from '../redux/hooks'
import {selectTextGenerator,getText,selectMatchTextNum,selectIsTrueText} from '../redux/typingSlice'
import { TextPlace } from './styled/TextPlace.styled';

const TextGenerator: React.FC = () => {
  const textGenerator = useAppSelector(selectTextGenerator);
  const matchTextNum = useAppSelector(selectMatchTextNum);
  const isTrueText = useAppSelector(selectIsTrueText);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(textGenerator.length<1){
      dispatch(getText())
    }
  }, [textGenerator,dispatch])
  console.log(textGenerator);
  return (
    <TextPlace >
        {
          textGenerator.map((text,index)=>(<span key={index} >
            <span className={index===matchTextNum?"onType":index>matchTextNum?"":isTrueText[index]?"trueType":"falseType"}>{text}</span>
            <span>{" "}</span>
            </span>))
        }
    </TextPlace>
  )
}

export default TextGenerator