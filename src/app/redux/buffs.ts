import snailImage from "../../images/snail.png";
import autoClicker from "../../images/autoClicker.svg.png";
import {BuffType} from "./reducer";

const buffList: BuffType[] = [
  {
    name: "Tigu",
    image: snailImage,
    price: 10,
    bonusTickValue: 0.0005,
    bonusClickValue: 1,
    maxLevel: 100,
    level: 0
  },

  {
    name: "Laiskloom",
    image: autoClicker,
    price: 100,
    bonusTickValue: 0.001,
    bonusClickValue: 0,
    maxLevel: 100,
    level: 0
  },

  {
    name: "Muumi",
    image: autoClicker,
    price: 500,
    bonusTickValue: 0.002,
    bonusClickValue: 0,
    maxLevel: 100,
    level: 0
  },
  {
    name: "Kits",
    image: autoClicker,
    price: 1000,
    bonusTickValue: 0.0035,
    bonusClickValue: 0,
    maxLevel: 100,
    level: 0
  },
  {
    name: "Gepard",
    image: autoClicker,
    price: 5000,
    bonusTickValue: 0.005,
    bonusClickValue: 0,
    maxLevel: 100,
    level: 0
  }
]
export default buffList;