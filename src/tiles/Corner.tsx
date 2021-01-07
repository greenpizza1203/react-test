import {ICorner} from "monocommon";
import React from "react";
import pass_go from "../../assets/images/corners/pass_go.svg"
import go_to_jail from "../../assets/images/corners/go_to_jail.svg"
import in_jail from "../../assets/images/corners/in_jail.svg"
import free_parking from "../../assets/images/corners/free_parking.svg"

const corners = {
    pass_go,
    in_jail,
    go_to_jail,
    free_parking
}

export abstract class Corner extends React.Component<{ info: ICorner }> {
    render() {
        let filename = this.props.info.split_name;
        let Corner = corners[filename];
        return <Corner className={filename}/>
    }


}

