import React from "react";
import {Houses, HouseUI} from "./HouseUI";
import {DefaultTile} from "../DefaultTile";
import {IStreet} from "monocommon";

export class Street extends DefaultTile {

    render() {
        return (
            <div className="tile">
                {this.getTitle()}
                <Bar info={this.props.info as IStreet}/>
            </div>
        )
    }

}

export class Bar extends React.Component<{ info: IStreet }> {
    render() {

        const info = this.props.info;
        return (
            <div className="bar" style={{background: info.color}}>
                <Houses level={info.level}/>
                <HouseUI info={info}/>
            </div>
        );
    }
}
