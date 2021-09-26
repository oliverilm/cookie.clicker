import React from "react";
import {useAppDispatch, useAppSelector} from "../hooks";
import {addBuff, BuffType} from "../redux/reducer";
import cookieImage from "../../images/Cookie.png"


const Buffs: React.FC = () => {
  const {buffList} = useAppSelector(state => state.score)
  return (
    <div style={{
      borderRight: "1px solid #ccc",
      height: "100vh",
      width: "250px"
    }}>
      {buffList.map(buff => <BuffElement buff={buff} />)}
    </div>
  )
}

interface BuffProps {
  buff: BuffType;
}

const BuffElement: React.FC<BuffProps> = ({buff}) => {
  const dispatch = useAppDispatch();
  const {activatedBuffs, score} = useAppSelector(state => state.score)
  const existing = activatedBuffs.filter(el => el.name === buff.name).length;
  const isAllowedToClick = score >= buff.price && activatedBuffs.filter(el => el.name === buff.name).length < buff.maxLevel
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      cursor: "pointer",
      backgroundColor: isAllowedToClick ? "" : "#e74c3c",
      color: isAllowedToClick ? "" : "white"
    }} onClick={() => {
      if (isAllowedToClick) {
        dispatch(addBuff(buff))
      }
    }}>
      {/* buff details */}
      <div style={{ padding: "1rem", display: "flex", justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
        <div><img style={{width: 20}} src={buff.image} alt=""/></div>
        <div>{buff.name}</div>
        <div>{buff.price}<img  style={{width: 10}} src={cookieImage} alt="as" /></div>
      </div>

      {/* level indicator */}
      <div style={{display: "flex", flexDirection: "row"}}>
        <div style={{height: "4px", width: ((existing / buff.maxLevel) * 100) + "%", backgroundColor: "#27ae60"}}/>
        <div style={{height: "4px", width: (buff.maxLevel - existing).toString() + "%", backgroundColor: "#ecf0f1"}}/>
      </div>
    </div>
  )
}


export default Buffs;