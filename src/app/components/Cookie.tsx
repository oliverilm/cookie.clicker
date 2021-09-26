import React from "react";
import {useAppDispatch} from "../hooks";
import CookieImage from "../../images/Cookie.png"
import {increment} from "../redux/reducer";
const Cookie: React.FC = () => {
  const dispatch = useAppDispatch()

  return <img
    style={{
      padding: "0",
      width: "50%",
    }}
    className={"logo"}
    src={CookieImage}
    alt="Cookie"
    onClick={() => dispatch(increment(undefined))}
  />
}

export default Cookie;