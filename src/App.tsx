import {IPlayer, IState, ITile} from "monocommon";
import React from "react";
import {Board} from "./Board";
import {Details} from "./sidebar/Details";
import {Leaderboard} from "./sidebar/Leaderboard";
import {Dice} from "./sidebar/Dice";


export class App extends React.Component<{ info: IState }, { target: IPlayer | ITile }> {
    state = {target: null}

    render() {
        return (
            <>
                <div className="left-sidebar">
                    <Leaderboard info={this.props.info} onMouseOver={this.onMouseOver}/>
                    <Details target={this.state.target}/>
                </div>
                <Board info={this.props.info} mouseOver={this.onMouseOver}/>
                <div className="right-sidebar">
                    {/*<Leaderboard info={this.props.info} onMouseOver={this.onMouseOver}/>*/}
                    {/*<Details target={this.state.target}/>*/}
                    <Dice/>
                </div>


            </>
        )
    }

    onMouseOver = (target: IPlayer) => {
        this.setState({target})
    };
}
