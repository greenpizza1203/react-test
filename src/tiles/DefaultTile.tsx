import {ITile} from "monocommon";
import React from "react";


export abstract class DefaultTile extends React.Component<{ info: ITile }> {

    render() {
        return (
            <div className="tile">
                {this.getTitle()}
            </div>
        )
    }

    getTitle() {
        return <span>{this.props.info.split_name}</span>
    }
}
