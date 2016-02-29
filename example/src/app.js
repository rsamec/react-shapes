import React from 'react';
import ReactDOM from 'react-dom';
import PropertyEditor from 'react-property-editor';
import {Tabs as TabbedArea,Tab as TabPane} from 'react-bootstrap';

import Shapes from 'react-shapes';

class ShapeExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {widgetProps: props.widget.metaData.props || {}};
    }

    widgetPropsChanged(value) {
        this.setState({widgetProps: value.props});
    }

    render() {
        var widget = React.createElement(this.props.widget, this.state.widgetProps);
        return (
            <div className="row">
                <div className="col-md-8">
                    {widget}
                </div>
                <div className="col-md-4">
                    <PropertyEditor value={{props: this.state.widgetProps} } settings={this.props.widget.metaData.settings}
                                    onChange={ this.widgetPropsChanged.bind(this) }/>
                    <hr/>
                    <pre>{JSON.stringify(this.state.widgetProps, null, 2)}</pre>
                </div>
            </div>
        )
    }
}
class App extends React.Component
{
    render() {
        return (
            <TabbedArea defaultActiveKey={1}>
                <TabPane eventKey={1} title='Rectangle'>
                    <ShapeExample widget={Shapes.Rectangle}/>
                </TabPane>
                <TabPane eventKey={2} title='Circle'>
                    <ShapeExample widget={Shapes.Circle}/>
                </TabPane>
                <TabPane eventKey={3} title='Ellipse'>
                    <ShapeExample widget={Shapes.Ellipse}/>
                </TabPane>
                <TabPane eventKey={4} title='Line'>
                    <ShapeExample widget={Shapes.Line}/>
                </TabPane>
                <TabPane eventKey={5} title='Polyline'>
                    <ShapeExample widget={Shapes.Polyline}/>
                </TabPane>
                <TabPane eventKey={6} title='CornerBox'>
                    <ShapeExample widget={Shapes.CornerBox}/>
                </TabPane>
                <TabPane eventKey={7} title='Triangle'>
                    <ShapeExample widget={Shapes.Triangle}/>
                </TabPane>
                <TabPane eventKey={8} title='Dimension'>
                    <ShapeExample widget={Shapes.Dimension}/>
                </TabPane>
            </TabbedArea>

        )
    }
};

ReactDOM.render(<App />, document.getElementById('app'));
