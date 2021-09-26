import {createSlice} from "@reduxjs/toolkit";
import buffList from "./buffs";

export interface BuffType {
  name: string;
  level: number;
  price: number;
  image: string;
  bonusTickValue: number;
  bonusClickValue: number
  maxLevel: number;
}

interface CookieInitial  {
  score: number;
  buffList: BuffType[]
  multiplier: number;
  addValue: number;
  tickAddValue: number;
  activatedBuffs: BuffType[]
}

const initialState: CookieInitial = {
  buffList: buffList,
  score: 0,
  addValue: 1,
  multiplier: 1,
  tickAddValue: 0,
  activatedBuffs: []
}

const cookieReducer = createSlice({
  name: "score",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.score += (action.payload  ?? state.addValue) * state.multiplier
    },
    incrementAddValue : (state, action) => {
      state.addValue += action.payload
    },
    decrementAddValue : (state, action) => {
      state.addValue -= action.payload
    },
    addBuff: (state, action) => {
      // state.score -= action.payload
      const buff: BuffType = action.payload
      state.activatedBuffs.push(buff);
      state.score -= buff.price;
      state.addValue += buff.bonusClickValue
      state.tickAddValue += buff.bonusTickValue;

      // @ts-ignore
      state.buffList.find(b => b.name === buff.name).price = Math.ceil(1.5*buff.price)
    },
    incrementMultiplier: (state, action) => {
      state.multiplier += action.payload
    },
    setMultiplier: (state, action) => {
      state.multiplier = action.payload
    },
    decrement: (state, action) => {
      state.score -= action.payload
    },
    loopHandler: (state) => {
      state.score += state.tickAddValue;
    }
  }
})

export const { increment, decrement, addBuff,loopHandler, decrementAddValue, incrementAddValue, incrementMultiplier, setMultiplier } = cookieReducer.actions
export default  cookieReducer