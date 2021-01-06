import {IState} from "monocommon";
import React from "react";
import {Tile} from "./tiles/Tile";


export class Board extends React.Component<{ info: IState, mouseOver: (IPlayer) => void }> {

    render() {
        const tiles = this.props.info.tiles

        return (
            <div className="board">
                {
                    tiles.map((tile) => {
                        return <Tile key={tile.position} info={tile} mouseOver={this.props.mouseOver}/>;
                    })
                }
            </div>
        );
    }


}
