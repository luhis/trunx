Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames = require("classnames");
var React = require("react");
var modifiers_1 = require("./modifiers");
var B = (function (_super) {
    tslib_1.__extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.render = function () {
        var _a = this.props, children = _a.children, props = tslib_1.__rest(_a, ["children"]);
        var className = classnames(modifiers_1.backgroundColorHelpersPropsToClassnames(props), modifiers_1.textColorHelpersPropsToClassnames(props));
        return (React.createElement("b", { className: className }, children));
    };
    return B;
}(React.Component));
exports.default = B;