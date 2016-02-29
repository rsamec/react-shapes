React shapes
=======================

React shapes uses svg to draw basic shapes.

+   Rectangle 
+   Circle 
+   Ellipse
+   Line
+   PolyLine
+   CornerBox (experimental)
+   Triangle (experimental)


## Demo & Examples

[Live demo](http://rsamec.github.io/react-shapes/)

To build the examples locally, run:

```
npm install
gulp dev
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use this component is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-shapes.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-shapes --save
```


## Usage

```
import {Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';

<Rectangle width={100} height={100} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
<Circle r={50} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
<Ellipse rx={300} ry={100} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
<Line x1={25} x2={350} y1={25} y2={350}  stroke={{color:'#E65243'}} strokeWidth={3} />
<Polyline points='25,25 25,350 500,350 500,500 305,250 20,15' fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />
<CornerBox size={400} width={150} orientation='topLeft' fill={{color:'#2409ba'}} stroke={{color:'#E65243'}}strokeWidth={3} />
<Triangle width={150} height={150} fill={{color:'#2409ba'}} stroke={{color:'#E65243'}} strokeWidth={3} />

```

### Properties

See the demo.

### Notes



### License

MIT. Copyright (c) 2015 Roman Samec

