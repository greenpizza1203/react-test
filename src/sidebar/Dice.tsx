import React from "react";
import {DiceBox} from "monodice";

export class Dice extends React.Component {
    componentDidMount() {
        const diceBox = new DiceBox(document.getElementById("threeHolder") as HTMLDivElement)
        diceBox.start_throw([2, 4])
        window.onkeydown = (e) => {
            if (e.key === 'r') diceBox.start_throw([1, 6])
        }
    }

    render() {
        return <div className="dice" id={"threeHolder"}/>

    }


}
