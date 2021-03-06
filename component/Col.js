Object.defineProperty(exports, "__esModule", { value: true });
exports.Col = void 0;
var tslib_1 = require("tslib");
var React = require("react");
var renderElement_1 = require("./renderElement");
var Col = (function (_super) {
    tslib_1.__extends(Col, _super);
    function Col() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hasError: false };
        return _this;
    }
    Col.getDerivedStateFromError = function () {
        return { hasError: true };
    };
    Col.prototype.render = function () {
        var _a = this.props, fallbackUI = _a.fallbackUI, props = tslib_1.__rest(_a, ["fallbackUI"]);
        if (this.state.hasError)
            return fallbackUI;
        return renderElement_1.renderElement('col', props);
    };
    return Col;
}(React.Component));
exports.Col = Col;
