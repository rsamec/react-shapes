import React from 'react';
import _  from 'lodash';
import styleSvg from './utils/styleSvg';

export class SVGComponent extends React.Component {
    render() {
        return <svg {...this.props}>{this.props.children}</svg>
    }
}
export class Rectangle extends React.Component {
    render() {
        var strokeWidth = this.props.strokeWidth || 0;

        var height = (this.props.height || 0) + 2 * strokeWidth;
        var width = (this.props.width || 0) + 2 * strokeWidth;
        var props = styleSvg(_.omit(this.props, 'style'),this.props);

        return (
            <SVGComponent height={height} width={width}>
                <rect {...props} x={strokeWidth / 2} y={strokeWidth / 2}>{this.props.children}</rect>
            </SVGComponent>)
    }
}
export class Circle extends React.Component {
    render() {
        var strokeWidth = this.props.strokeWidth || 0;
        var r = this.props.r || 0;

        var height = (r * 2) + 2 * strokeWidth;
        var width = (r * 2) + 2 * strokeWidth;

        var cx = r + (strokeWidth / 2);
        var cy = r + (strokeWidth / 2);
        var props = styleSvg(_.omit(this.props, 'style'),this.props);
        return (
            <SVGComponent height={height} width={width}>
                <circle {...props} cx={cx} cy={cy}>{this.props.children}</circle>
            </SVGComponent>)

    }
}
export class Ellipse extends React.Component {
    render() {
        var strokeWidth = this.props.strokeWidth || 0;
        var rx = this.props.rx || 0;
        var ry = this.props.ry || 0;

        var height = (ry * 2) + 2 * strokeWidth;
        var width = (rx * 2) + 2 * strokeWidth;

        var cx = rx + (strokeWidth / 2);
        var cy = ry + (strokeWidth / 2);

        var props = styleSvg(_.omit(this.props, 'style'),this.props);
        return (
            <SVGComponent height={height} width={width}>
                <ellipse {...props} cx={cx} cy={cy}>{this.props.children}</ellipse>
            </SVGComponent>)

    }
}

export class Line extends React.Component {
    render() {

        var strokeWidth = this.props.strokeWidth || 0;
        var x = _.max([this.props.x1, this.props.x2]);
        var y = _.max([this.props.y1, this.props.y2]);

        var height = y + (2 * strokeWidth);
        var width = x + (2 * strokeWidth);

        var props = styleSvg(_.omit(this.props, 'style'),this.props);
        return (
            <SVGComponent height={height} width={width}>
                <line {...props}>{this.props.children}</line>
            </SVGComponent>)
    }
}
export class Polyline extends React.Component {
    render() {
        var strokeWidth = this.props.strokeWidth || 0;

        var points = _.map(this.props.points.split(' '),function(point){
            var xy = point.split(',');
            return {x:parseInt(xy[0],10),y:parseInt(xy[1],10)};
        });
        var x = _.max(_.map(points,function(point){return point.x}));
        var y = _.max(_.map(points,function(point){return point.y}));

        var height = y + (2 * strokeWidth);
        var width = x + (2 * strokeWidth);

        var props = styleSvg(_.omit(this.props, 'style'),this.props);
        return (
            <SVGComponent height={height} width={width}>
                <polyline {...props}>{this.props.children}</polyline>
            </SVGComponent>)
    }
}
export class Triangle extends React.Component {
    render() {
        var strokeWidth = this.props.strokeWidth || 0;
        var height      = this.props.height || 0;
        var width       = this.props.width || 0;

        var innerHeight = height - strokeWidth / 2;
        var innerWidth  = width  - strokeWidth / 2;

        var points = ['0,' + innerHeight, innerWidth / 2 + ',0', innerWidth + ',' + innerHeight];

        var props = styleSvg(_.omit(this.props, 'style'),this.props);
        return (
            <SVGComponent height={height + strokeWidth} width={width + strokeWidth}>
                <polygon transform={'translate(' + 3 * strokeWidth / 4 + ',' + 11 * strokeWidth / 10 + ')'}
                         points={points.join(' ')}
                    {...props}>
                    {this.props.children}
                </polygon>
            </SVGComponent>)
    }
}

export class CornerLine extends React.Component {
    render() {

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
        var points = _.reduce(point, function (memo, num) {
            return memo + " " + num[0] + "," + num[1];
        }, "");

        var text = this.props.text;

        var x = this.props.x || max;
        var y = this.props.y || max;

        var rotate = up ? 315 : 45;
        var transform = "rotate(" + rotate.toString() + ")";

        var props = styleSvg(_.omit(this.props, 'style'),this.props);

        return (
            <SVGComponent height={size} width={size}>
                <polyline points={points} {...props}></polyline>
                <text x={x} y={y} transform={transform}>{this.props.text}</text>
            </SVGComponent>)
    }
}

export class CornerBox extends React.Component {
    render() {

        var type = this.props.orientation;
        var up = (type === 'topLeft' || type === 'bottomRight') ? true : false;
//        var right = (type === 'topRight' || type == 'bottomRight')?true:false;

        var size = this.props.size;
        var cornerWidth = this.props.width;
        if (type === 'bottomLeft' || type === 'bottomRight') cornerWidth = -1 * cornerWidth;

        var offset = 20;
        var x = offset;
        var y = -1 * (cornerWidth / 2)

        if (up) {
            x = -1 * (cornerWidth / 2);
            y = size - offset;
        }
        var text = this.props.text;
        //var props = styleSvg(_.omit(this.props, 'style'),this.props);

        return (
            <CornerLine {...this.props} size={this.props.size} width={cornerWidth} text={this.props.text} x={x} y={y}
                                        up={up}/>)
    }
}

export class Dimension extends React.Component {
    render() {

        var strokeWidth = this.props.strokeWidth || 0;

        var height = (this.props.height || 0) + 2 * strokeWidth;
        var width = (this.props.width || 0) + 2 * strokeWidth;

        //var viewBox = [0,0,20,20].join(' ');

        //var markerArrow = <marker viewBox={viewBox}  id="markerArrow" markerWidth={5} markerHeight={5}
        //                     orient="auto">
        //    <path d="M2,2 L2,11 L10,6 L2,2" style={{fill: '#000000'}} />
        //</marker>;

        //var markerSquare = <marker viewBox={viewBox} id="markerSquare" markerWidth={markerWidth} markerHeight={markerHeight}
        //                          orient="auto">
        //    <rect x="0" y="0" width={markerWidth} height={markerHeight} style={{stroke: 'none', fill:'#000000'}}/>
        //</marker>;


        var l = [strokeWidth,this.props.height];
        var x = [strokeWidth,strokeWidth];
        var y = [this.props.width,strokeWidth];
        var r = [this.props.width,this.props.height];


        var d= "M" + l.join(',') +  " L" + x.join(',') + " L" + y.join(', ') + " L" + r.join(', ');
        //console.log(d);
        var props = styleSvg(_.omit(this.props, 'style'),this.props);

        var style = {
            strokeWidth: this.props.strokeWidth,
            fill:'none',
            stroke:this.props.stroke
        };

        return (
            <SVGComponent height={height} width={width}>
                <path {...props} style={style} d={d}></path>
            </SVGComponent>)
    }
}

var sharedFields = {
    fill: {type: 'colorPicker'},
    stroke: {type: 'colorPicker'},
    strokeWidth: {type: 'number'}
}
var sharedShapeMetaData = {
    defaultColors: {
        fill: {color:'#2409ba'},
        stroke: {color:'#E65243'},
        strokeWidth: 20
    }
}
export default {
    SVGComponent: SVGComponent,
    Rectangle: _.extend(Rectangle, {
        metaData: {
            props: _.extend({
                width: 500,
                height: 300
            }, sharedShapeMetaData.defaultColors),
            settings:{fields:_.extend({
                width:{type:'number'},
                height:{type:'number'}
            },sharedFields)}
        }
    }),
    Circle: _.extend(Circle, {
        metaData: {
            props: _.extend({
                r: 200
            }, sharedShapeMetaData.defaultColors),
            settings:{fields:_.extend({
                r:{type:'number'},
            },sharedFields)}
        }
    }),
    Ellipse: _.extend(Ellipse, {
        metaData: {
            props: _.extend({
                rx: 300,
                ry: 100
            }, sharedShapeMetaData.defaultColors),
            settings:{fields:_.extend({
                rx:{type:'number'},
                ry:{type:'number'},
            },sharedFields)}

        }
    }),
    Line: _.extend(Line, {
        metaData: {
            props: _.omit(_.extend({
                x1: 25,
                y1: 25,
                x2: 350,
                y2: 350
            }, sharedShapeMetaData.defaultColors),'fill'),
            settings:{fields:_.extend({
                x1:{type:'number'},
                y1:{type:'number'},
                x2:{type:'number'},
                y2:{type:'number'},
            },sharedFields)}
        }
    }),
    Polyline: _.extend(Polyline, {
        metaData: {
            props: _.extend({
                points: '25,25 25,350 500,350 500,500 305,250 20,15'
            }, sharedShapeMetaData.defaultColors),
            settings:{fields:sharedFields}
        }
    }),
    Triangle: _.extend(Triangle, {
        metaData: {
            props: _.extend({
                width: 200,
                height: 200,
            }, sharedShapeMetaData.defaultColors),
            settings:{fields:_.extend({
                width:{type:'number'},
                height:{type:'number'}
            },sharedFields)}
        }
    }),
    CornerBox: _.extend(CornerBox, {
        metaData: {
            props: _.extend({
                size: 400,
                width: 150,
                text: 'type your text',
                orientation: 'topLeft'
            }, sharedShapeMetaData.defaultColors),
            settings:{fields:_.extend({
                width:{type:'number'},
                size:{type:'number'},
                orientation: {
                    type: 'select',
                    settings: {options: ['topRight', 'topLeft', 'bottomRight', 'bottomLeft']}
                }
            },sharedFields)}
        }
    }),
    CornerLine: _.extend(CornerLine, {
        metaData: {
            props: _.extend({
                size: 150,
                width: 50,
                text: 'type your text',
                x: 25,
                y: 25,
                up: false,
            }, sharedShapeMetaData.defaultColors),
            settings: {fields:_.extend({
                width:{type:'number'},
                size:{type:'number'},
                x:{type:'number'},
                y:{type:'number'},
                up:{type:'boolean'},
            },sharedFields)}
        }
    }),
    Dimension: _.extend(Dimension, {
        metaData: {
            props: _.omit(_.extend({
                width: 250,
                height:100,
            }, sharedShapeMetaData.defaultColors),'fill'),
            settings:{fields:_.extend({
                width:{type:'number'},
                height:{type:'number'},
            },sharedFields)}
        }
    }),
};
