import React from 'react';
import './App.css';
import Cookie from "./app/components/Cookie";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import Buffs from "./app/components/Buffs";
import {loopHandler} from "./app/redux/reducer";

function App() {
  const dispatch = useAppDispatch()
  const {score} = useAppSelector(state => state.score)

  setInterval(() => dispatch(loopHandler()), 10)

  return (
      <div className="App" style={{
        display: "flex",
        overflowY: "hidden",
        flexDirection: "row",
      } }>
        <Buffs />
        <div style={{position: "relative"}}>
          <div style={{width: "100%", textAlign: "center"}}>
            {Number(score.toFixed(0)).toLocaleString()} Cookies collected
          </div>
          <Cookie />
        </div>
    </div>
  );
}

export default App;
