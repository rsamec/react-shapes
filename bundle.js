require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"react-shapes":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var SVGComponent = (function (_React$Component) {
    _inherits(SVGComponent, _React$Component);

    function SVGComponent() {
        _classCallCheck(this, SVGComponent);

        _get(Object.getPrototypeOf(SVGComponent.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(SVGComponent, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'svg',
                this.props,
                this.props.children
            );
        }
    }]);

    return SVGComponent;
})(_react2['default'].Component);

exports.SVGComponent = SVGComponent;

var Rectangle = (function (_React$Component2) {
    _inherits(Rectangle, _React$Component2);

    function Rectangle() {
        _classCallCheck(this, Rectangle);

        _get(Object.getPrototypeOf(Rectangle.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Rectangle, [{
        key: 'render',
        value: function render() {
            var strokeWidth = this.props.strokeWidth || 0;

            var height = (this.props.height || 0) + 2 * strokeWidth;
            var width = (this.props.width || 0) + 2 * strokeWidth;
            var props = _underscore2['default'].omit(this.props, 'style');

            return _react2['default'].createElement(
                SVGComponent,
                { height: height, width: width },
                _react2['default'].createElement(
                    'rect',
                    _extends({}, props, { x: strokeWidth, y: strokeWidth }),
                    this.props.children
                )
            );
        }
    }]);

    return Rectangle;
})(_react2['default'].Component);

exports.Rectangle = Rectangle;

var Circle = (function (_React$Component3) {
    _inherits(Circle, _React$Component3);

    function Circle() {
        _classCallCheck(this, Circle);

        _get(Object.getPrototypeOf(Circle.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Circle, [{
        key: 'render',
        value: function render() {
            var strokeWidth = this.props.strokeWidth || 0;
            var r = this.props.r || 0;

            var height = r * 2 + 2 * strokeWidth;
            var width = r * 2 + 2 * strokeWidth;

            var cx = r + strokeWidth;
            var cy = r + strokeWidth;
            var props = _underscore2['default'].omit(this.props, 'style');
            return _react2['default'].createElement(
                SVGComponent,
                { height: height, width: width },
                _react2['default'].createElement(
                    'circle',
                    _extends({}, props, { cx: cx, cy: cy }),
                    this.props.children
                )
            );
        }
    }]);

    return Circle;
})(_react2['default'].Component);

exports.Circle = Circle;

var Ellipse = (function (_React$Component4) {
    _inherits(Ellipse, _React$Component4);

    function Ellipse() {
        _classCallCheck(this, Ellipse);

        _get(Object.getPrototypeOf(Ellipse.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Ellipse, [{
        key: 'render',
        value: function render() {
            var strokeWidth = this.props.strokeWidth || 0;
            var rx = this.props.rx || 0;
            var ry = this.props.ry || 0;

            var height = ry * 2 + 2 * strokeWidth;
            var width = rx * 2 + 2 * strokeWidth;

            var cx = rx + strokeWidth;
            var cy = ry + strokeWidth;
            var props = _underscore2['default'].omit(this.props, 'style');
            return _react2['default'].createElement(
                SVGComponent,
                { height: height, width: width },
                _react2['default'].createElement(
                    'ellipse',
                    _extends({}, props, { cx: cx, cy: cy }),
                    this.props.children
                )
            );
        }
    }]);

    return Ellipse;
})(_react2['default'].Component);

exports.Ellipse = Ellipse;

var Line = (function (_React$Component5) {
    _inherits(Line, _React$Component5);

    function Line() {
        _classCallCheck(this, Line);

        _get(Object.getPrototypeOf(Line.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Line, [{
        key: 'render',
        value: function render() {

            var strokeWidth = this.props.strokeWidth || 0;
            var x = _underscore2['default'].max([this.props.x1, this.props.x2]);
            var y = _underscore2['default'].max([this.props.y1, this.props.y2]);

            var height = y + 2 * strokeWidth;
            var width = x + 2 * strokeWidth;

            var props = _underscore2['default'].omit(this.props, 'style');
            return _react2['default'].createElement(
                SVGComponent,
                { height: height, width: width },
                _react2['default'].createElement(
                    'line',
                    props,
                    this.props.children
                )
            );
        }
    }]);

    return Line;
})(_react2['default'].Component);

exports.Line = Line;

var Polyline = (function (_React$Component6) {
    _inherits(Polyline, _React$Component6);

    function Polyline() {
        _classCallCheck(this, Polyline);

        _get(Object.getPrototypeOf(Polyline.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Polyline, [{
        key: 'render',
        value: function render() {
            var strokeWidth = this.props.strokeWidth || 0;

            var points = _underscore2['default'].map(this.props.points.split(' '), function (point) {
                var xy = point.split(',');
                return { x: parseInt(xy[0], 10), y: parseInt(xy[1], 10) };
            });
            var x = _underscore2['default'].max(_underscore2['default'].map(points, function (point) {
                return point.x;
            }));
            var y = _underscore2['default'].max(_underscore2['default'].map(points, function (point) {
                return point.y;
            }));

            console.log(points);

            var height = y + 2 * strokeWidth;
            var width = x + 2 * strokeWidth;
            console.log(height + ", " + width);
            var props = _underscore2['default'].omit(this.props, 'style');
            return _react2['default'].createElement(
                SVGComponent,
                { height: height, width: width },
                _react2['default'].createElement(
                    'polyline',
                    props,
                    this.props.children
                )
            );
        }
    }]);

    return Polyline;
})(_react2['default'].Component);

exports.Polyline = Polyline;

var CornerLine = (function (_React$Component7) {
    _inherits(CornerLine, _React$Component7);

    function CornerLine() {
        _classCallCheck(this, CornerLine);

        _get(Object.getPrototypeOf(CornerLine.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CornerLine, [{
        key: 'render',
        value: function render() {

            var size = this.props.size || 150;
            var cornerWidth = this.props.width || 50;
            var strokeWidth = this.props.strokeWidth || 0;

            //var height = _.max([this.props.style.height, size]);
            //var width = _.max([this.props.style.width, size]);

            var max = size;
            var min = 0;
            var diff = max - cornerWidth;

            var up = this.props.up ? true : false;

            var point = up ? [[max, min], [min, max], [min, diff], [diff, min], [max, min]] : [[max, max], [min, min], [cornerWidth, min], [max, diff], [max, max]];
            var points = _underscore2['default'].reduce(point, function (memo, num) {
                return memo + " " + num[0] + "," + num[1];
            }, "");

            var text = this.props.text;

            var x = this.props.x || max;
            var y = this.props.y || max;

            var rotate = up ? 315 : 45;
            var transform = "rotate(" + rotate.toString() + ")";

            return _react2['default'].createElement(
                SVGComponent,
                { height: size, width: size },
                _react2['default'].createElement('polyline', _extends({ points: points }, this.props)),
                _react2['default'].createElement(
                    'text',
                    { x: x, y: y, transform: transform },
                    this.props.text
                )
            );
        }
    }]);

    return CornerLine;
})(_react2['default'].Component);

exports.CornerLine = CornerLine;

var CornerBox = (function (_React$Component8) {
    _inherits(CornerBox, _React$Component8);

    function CornerBox() {
        _classCallCheck(this, CornerBox);

        _get(Object.getPrototypeOf(CornerBox.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(CornerBox, [{
        key: 'render',
        value: function render() {

            var type = this.props.orientation;
            var up = type === 'topLeft' || type === 'bottomRight' ? true : false;
            //        var right = (type === 'topRight' || type == 'bottomRight')?true:false;

            var size = this.props.size;
            var cornerWidth = this.props.width;
            if (type === 'bottomLeft' || type === 'bottomRight') cornerWidth = -1 * cornerWidth;

            var offset = 20;
            var x = offset;
            var y = -1 * (cornerWidth / 2);

            if (up) {
                x = -1 * (cornerWidth / 2);
                y = size - offset;
            }
            var text = this.props.text;

            return _react2['default'].createElement(CornerLine, _extends({}, this.props, { size: this.props.size, width: cornerWidth, text: this.props.text, x: x, y: y,
                up: up }));
        }
    }]);

    return CornerBox;
})(_react2['default'].Component);

exports.CornerBox = CornerBox;

var sharedShapeMetaData = {
    defaultColors: {
        fill: '#2409ba',
        stroke: '#E65243',
        strokeWidth: 20
    }
};
exports['default'] = {
    SVGComponent: SVGComponent,
    Rectangle: _underscore2['default'].extend(Rectangle, {
        metaData: {
            props: _underscore2['default'].extend({
                width: 500,
                height: 300
            }, sharedShapeMetaData.defaultColors)
        }
    }),
    Circle: _underscore2['default'].extend(Circle, {
        metaData: {
            props: _underscore2['default'].extend({
                r: 200
            }, sharedShapeMetaData.defaultColors)
        }
    }),
    Ellipse: _underscore2['default'].extend(Ellipse, {
        metaData: {
            props: _underscore2['default'].extend({
                rx: 300,
                ry: 100
            }, sharedShapeMetaData.defaultColors)
        }
    }),
    Line: _underscore2['default'].extend(Line, {
        metaData: {
            props: _underscore2['default'].extend({
                x1: 25,
                y1: 25,
                x2: 350,
                y2: 350
            }, sharedShapeMetaData.defaultColors)
        }
    }),
    Polyline: _underscore2['default'].extend(Polyline, {
        metaData: {
            props: _underscore2['default'].extend({
                points: '25,25 25,350 500,350 500,500 305,250 20,15'
            }, sharedShapeMetaData.defaultColors)
        }
    }),
    CornerBox: _underscore2['default'].extend(CornerBox, {
        metaData: {
            props: _underscore2['default'].extend({
                size: 400,
                width: 150,
                text: 'type your text',
                orientation: 'topLeft'
            }, sharedShapeMetaData.defaultColors),
            settings: {
                fields: {
                    orientation: {
                        type: 'select',
                        settings: { options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] }
                    }
                }
            }
        }
    }),
    CornerLine: _underscore2['default'].extend(CornerLine, {
        metaData: {
            props: _underscore2['default'].extend({
                size: 150,
                width: 50,
                text: 'type your text',
                x: 25,
                y: 25,
                up: false
            }, sharedShapeMetaData.defaultColors)
        }
    })
};


},{"react":undefined,"underscore":undefined}]},{},[]);
