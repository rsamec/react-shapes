import React from 'react';
import PropertyEditor from 'react-property-editor';
import {TabbedArea, TabPane} from 'react-bootstrap';

import Shapes from 'react-shapes';
//import {Rectangle,Circle,Ellipse,Line, Polyline, CornerBox} from 'react-shapes';

class ShapeExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {widgetProps: props.widget.metaData.props};
    }

    widgetPropsChanged(value) {
        this.setState({widgetProps: value});
    }

    render() {
        var widget = React.createElement(this.props.widget, this.state.widgetProps);
        return (
            <div className="row">
                <div className="col-md-8">
                    {widget}
                </div>
                <div className="col-md-4">
                    <PropertyEditor value={ this.state.widgetProps } settings={this.props.widget.metaData.settings}
                                    onChange={ this.widgetPropsChanged.bind(this) }/>
                    <hr/>
                    <pre>{JSON.stringify(this.state.widgetProps, null, 2)}</pre>
                </div>
            </div>
        )
    }
}
var App = React.createClass({
    render() {
        return (
            <TabbedArea defaultActiveKey={1}>
                <TabPane eventKey={1} tab='Rectangle'>
                    <ShapeExample widget={Shapes.Rectangle}/>
                </TabPane>
                <TabPane eventKey={2} tab='Circle'>
                    <ShapeExample widget={Shapes.Circle}/>
                </TabPane>
                <TabPane eventKey={3} tab='Ellipse'>
                    <ShapeExample widget={Shapes.Ellipse}/>
                </TabPane>
                <TabPane eventKey={4} tab='Line'>
                    <ShapeExample widget={Shapes.Line}/>
                </TabPane>
                <TabPane eventKey={5} tab='Polyline'>
                    <ShapeExample widget={Shapes.Polyline}/>
                </TabPane>
                <TabPane eventKey={6} tab='CornerBox'>
                    <ShapeExample widget={Shapes.CornerBox}/>
                </TabPane>
                <TabPane eventKey={7} tab='Triangle'>
                    <ShapeExample widget={Shapes.Triangle}/>
                </TabPane>
                <TabPane eventKey={8} tab='Dimension'>
                    <ShapeExample widget={Shapes.Dimension}/>
                </TabPane>
            </TabbedArea>

        )
    }
});

React.render(<App />, document.getElementById('app'));
