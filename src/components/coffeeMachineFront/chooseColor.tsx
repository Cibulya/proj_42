import React, { useState} from "react";
import 'styles/chooseColor.scss';
import 'styles/LearningPage.scss';
import startPreparation from "./startPreparation";

function ChooseColor() {
  const [color, setColor] = useState("#89726a");

    return (
        <div className = "choose__message">
          <p>Difficult choice? Simply choose any color of your drink:</p>
          <input type="color" className="choose__color" value={color} onChange={e => setColor(e.target.value)}></input>
          <button className="color__btn" onClick={() => startPreparation()} value="Custom coffee" data-size="M" name={color}>OK</button>
        </div>
    )
}
export default ChooseColor;