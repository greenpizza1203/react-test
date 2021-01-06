import React from "react";
import {IStreet} from "monocommon"
import {array} from "../../utils";
import hotel from '../../../assets/images/street/hotel.svg';
import house from '../../../assets/images/street/house.svg';
import upgrade from '../../../assets/images/street/upgrade.svg';
import downgrade from '../../../assets/images/street/downgrade.svg';

export class HouseUI extends React.Component<{ info: IStreet }> {
    render() {
        const info = this.props.info;

        return (
            <div className="ui">
                <HouseUIButton action="upgrade" info={info}/>
                <div className="level">
                    <div>{info.level}</div>
                </div>
                <HouseUIButton action="downgrade" info={info}/>
            </div>
        )

    }
}

export class Houses extends React.Component<{ level: number }> {
    render() {
        const images: string[] = (this.props.level == 5) ? ['hotel'] : array(this.props.level, 'house')
        const map = {house, hotel}
        return (
            <div className="houses">
                {images.map((image, index) => <img src={map[image]} className={image} key={index}/>)}
            </div>

        )

    }
}

class HouseUIButton extends React.Component<{ action, info: IStreet }> {
    render() {
        const image = (this.props.action == "upgrade") ? upgrade : downgrade
        return (
            <img src={image} onClick={this.onClick}/>
        )
    }

    onClick = () => {
        console.log(this.props)
    };
}
