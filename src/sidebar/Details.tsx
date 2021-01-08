import {IPlayer, ITile} from "monocommon";
import React from "react";
import {getPlayerSpecs, getTileSpecs} from "./details/Specs";
// @ts-ignore
import * as styles from '../../css/left/details.module.scss';

export class Details extends React.Component<{ target?: IPlayer | ITile }> {
    render() {
        let tile = this.props.target;
        if (!tile) return null;
        let borderColor = this.props.target['color'] ?? 'black';
        return (
            <div className={styles.details} style={{borderColor}}>
                <div className={styles.title}>{this.getTitle()}</div>
                <div className={styles.specs}>{this.getSpecs().join('\n')}</div>
            </div>
        )
    }

    isUser() {
        return ('username' in this.props.target)
    }

    getTitle() {
        return this.isUser() ? (this.props.target as IPlayer).username : (this.props.target as ITile).full_name;
    }

    getSpecs() {
        return this.isUser() ? getPlayerSpecs(this.props.target as IPlayer) : getTileSpecs(this.props.target as ITile);
    }


}
