import { useState } from "react";
import cat_rose from './assets/cat_rose.jpg'
import cat_gun from './assets/cat_gun.gif'
import cat_love from './assets/cat_love.gif'

export const Eh = () => {
  const [state, setState] = useState(1)
  const [value, setValue] = useState("");
  const [pic, setPic] = useState(cat_rose)
  
  function handleSubmit() {
    let str = value
    if(str.toUpperCase() === "I LOVE YOU")
      setState(2)
   }

  function handleYes() {
    setState(3)
  }
  
  function handleNo() {
    setPic(cat_gun)
  }

  return (
    state===1 ? <div className="inner">
      <div className="elem"><b>Decode this code: 01101001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101</b></div>
      <div className="elem"><label>Answer: <input type="text" onChange={(e) => setValue(e.target.value)} /></label></div>
      <div className="elem"><input type="submit" onClick={handleSubmit} /></div>
    </div> : state===2 ?
    <div className="inner">
      <div className="elem"><p><b>Hehe! I too love you mera baby</b></p></div>
      <div className="elem ans"><img src={pic} alt={pic} /></div>
      <div className="elem"><p><b>Shivani, will you be my valentine?😊</b></p></div>
      <div className="elem ans">
        <button style={{backgroundColor: "green"}} onClick={handleYes}>Yes</button>
        <button style={{backgroundColor: "red"}} onClick={handleNo}>No</button>
      </div>
    </div> : 
    <div>
      <div className="elem" style={{fontSize: '40px'}}><b>YAYYYYYYY! Ehehehehehehehehehe</b></div>
      <div className="elem ans"><img src={cat_love} alt='cat-love' /></div>
    </div>
  );
}