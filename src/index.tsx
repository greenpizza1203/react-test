import "style-loader!css-loader!sass-loader!../css/main.scss";
import {Client} from "monofake"
import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App";
import {setRoom} from "./state";

const node = document.createElement("div")
document.body.appendChild(node)
new Client("ws://localhost:2567").joinOrCreate().then((room) => {
    setRoom(room)
    room.onStateChange(state => ReactDOM.render(<App info={state}/>, node))
});



