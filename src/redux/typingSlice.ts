import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export interface TypingState {
  status: 'idle' | 'loading' | 'failed' | 'succeed';
  textGenerator : Array<string>;
  error:string|undefined;
  matchTextNum:number;
  isTrueText:Array<boolean>;
  situation:'idle'|'started'|'finished';
  typedText:string;
}

const initialState: TypingState = {
  status: 'idle',
  textGenerator:[],
  error:"",
  matchTextNum:0,
  isTrueText:[],
  situation:'idle',
  typedText:'',
};


export const getText = createAsyncThunk(
  'typing/getText',
  async() => {
    const res = axios.get(`https://baconipsum.com/api/?type=all-meat`).then(response => response.data);
    return res;
  }
)

export const TypingSlice = createSlice({
  name: 'typing',
  initialState,
 
  reducers: {
    incrementTextNum:(state)=>{
      state.matchTextNum += 1;
    },
    addbool:(state,action)=>{
      state.isTrueText.push(action.payload);
    },
    reset : (state) => {
      state.situation = 'idle';
      state.matchTextNum = 0;
      state.isTrueText = [];
      state.typedText = "";
    },
    changeSituation:(state,action) => {
      state.situation = action.payload;
    },
    typeText:(state,action) => {
      state.typedText = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder
        .addCase(getText.pending,(state)=> {
          state.status = 'loading';
        })
        .addCase(getText.fulfilled,(state,action)=> {
          state.status = "succeed";
          state.textGenerator = action.payload[0].split(" ").filter((text:string)=>text!=="");
        })
        .addCase(getText.rejected,(state,action)=> {
          state.status = 'failed';
          state.error = action.error.message;
        })
  },
});

export const { incrementTextNum,addbool,reset,changeSituation,typeText} = TypingSlice.actions;


export const selectTextGenerator = (state: RootState) => state.typing.textGenerator;
export const selectMatchTextNum = (state:RootState) => state.typing.matchTextNum;
export const selectIsTrueText = (state: RootState) => state.typing.isTrueText;
export const selectSituation = (state:RootState) => state.typing.situation;
export const selectTypedText = (state:RootState) => state.typing.typedText;



export default TypingSlice.reducer;
