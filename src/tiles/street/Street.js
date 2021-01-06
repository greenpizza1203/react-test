"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bar = exports.Street = void 0;
const react_1 = __importDefault(require("react"));
const HouseUI_1 = require("./HouseUI");
const DefaultTile_1 = require("../DefaultTile");
class Street extends DefaultTile_1.DefaultTile {
    render() {
        return (react_1.default.createElement("div", { className: "tile" },
            this.getTitle(),
            react_1.default.createElement(Bar, { info: this.props.info })));
    }
}
exports.Street = Street;
class Bar extends react_1.default.Component {
    render() {
        const info = this.props.info;
        return (react_1.default.createElement("div", { className: "bar", style: { background: info.color } },
            react_1.default.createElement(HouseUI_1.Houses, { level: info.level }),
            react_1.default.createElement(HouseUI_1.HouseUI, { info: info })));
    }
}
exports.Bar = Bar;
