import React, { useEffect } from 'react'
import {useAppSelector,useAppDispatch} from '../redux/hooks'
import {selectTextGenerator,getText,selectMatchTextNum,selectIsTrueText, selectTypedText} from '../redux/typingSlice'
import { TextPlace } from './styled/TextPlace.styled';

const TextGenerator: React.FC = () => {
  const textGenerator = useAppSelector(selectTextGenerator);
  const matchTextNum = useAppSelector(selectMatchTextNum);
  const isTrueText = useAppSelector(selectIsTrueText);
  const typedText = useAppSelector(selectTypedText);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if(textGenerator.length<1){
      dispatch(getText())
    }
  }, [textGenerator,dispatch])
  return (
    <TextPlace >
        {
          textGenerator.map((text,index)=>(<span key={index} >
            <span style={{borderRadius:"5px",padding:"5px"}} className={index===matchTextNum && textGenerator[index].startsWith(typedText) ?"onType": index===matchTextNum && !textGenerator[index].startsWith(typedText) ? "badtyped" : index>matchTextNum?"":isTrueText[index]?"trueType":"falseType"}>{text}</span>
            <span>{"   "}</span>
            </span>))
        }
    </TextPlace>
  )
}

export default TextGenerator