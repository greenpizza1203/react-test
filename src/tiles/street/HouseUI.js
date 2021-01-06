"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Houses = exports.HouseUI = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("../../utils");
const hotel_svg_1 = __importDefault(require("../../../assets/images/street/hotel.svg"));
const house_svg_1 = __importDefault(require("../../../assets/images/street/house.svg"));
const upgrade_svg_1 = __importDefault(require("../../../assets/images/street/upgrade.svg"));
const downgrade_svg_1 = __importDefault(require("../../../assets/images/street/downgrade.svg"));
class HouseUI extends react_1.default.Component {
    render() {
        const info = this.props.info;
        return (react_1.default.createElement("div", { className: "ui" },
            react_1.default.createElement(HouseUIButton, { action: "upgrade", info: info }),
            react_1.default.createElement("div", { className: "level" },
                react_1.default.createElement("div", null, info.level)),
            react_1.default.createElement(HouseUIButton, { action: "downgrade", info: info })));
    }
}
exports.HouseUI = HouseUI;
class Houses extends react_1.default.Component {
    render() {
        const images = (this.props.level == 5) ? ['hotel'] : utils_1.array(this.props.level, 'house');
        const map = { house: house_svg_1.default, hotel: hotel_svg_1.default };
        return (react_1.default.createElement("div", { className: "houses" }, images.map((image, index) => react_1.default.createElement("img", { src: map[image], className: image, key: index }))));
    }
}
exports.Houses = Houses;
class HouseUIButton extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.onClick = () => {
            console.log(this.props);
        };
    }
    render() {
        const image = (this.props.action == "upgrade") ? upgrade_svg_1.default : downgrade_svg_1.default;
        return (react_1.default.createElement("img", { src: image, onClick: this.onClick }));
    }
}
