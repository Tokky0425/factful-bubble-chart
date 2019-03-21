## What is Factful Bubble Chart?
Factful Bubble Chart is the bubble chart with 5 dimensions,
1. X axis
1. Y axis
1. Time
1. Size
1. Group

which is inspired by [Hans Rosling](https://www.ted.com/talks/hans_rosling_shows_the_best_stats_you_ve_ever_seen)'s analysis method and his book titled "Factfulness". 

See demo page: [https://Tokky0425.github.io/factful-bubble-chart/](https://Tokky0425.github.io/factful-bubble-chart/)

## Installation
```bash
$ npm install --save factful-bubble-chart
```
## Basic usage
### 1. Get your data ready
**data.json**
```json
// Should be like...
[
  {
    "name": "Afghanistan",
    "group": "Asia",
    "content": {
      "1950": {
        "size": 7752.0,
        "x": 7.45,
        "y": 28.61
      },
      "1951": {
        "size": 7840.0,
        "x": 7.45,
        "y": 29.11
      }
    }
  },
  {
    "name": "Albania",
    "group": "Europe",
    "content": {
      "1950": {
        "size": 1263.0,
        "x": 6.23,
        "y": 55.26
      },
      "1951": {
        "size": 1287.0,
        "x": 6.29,
        "y": 56.07
      }
    }
  }
]
```

**Fields**

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | `string` | Set unique name of the item. (e.g. country name) |
| `group` | `string` | Set value if you want to identify certain groups by coloring. (e.g. area name)<br>Not Required. |
| `content` | `object` | Add statistical data here.<br>Each child object needs to have same number of data with same keys as other set of items. |
| `size` | `number`, `float` | Size of plot. (e.g. population) |
| `x` | `number`, `float` | Position of plot on x axis. (e.g. fertility rate) |
| `y` | `number`, `float` | Position of plot on y axis. (e.g. life expectancy) |

### 2. Create the component with the data
**index.js**

```javascript
import React from 'react';
import {render} from 'react-dom';
import FactfulBubbleChart from 'factful-bubble-chart';

fetch('data.json')
  .then(response => response.json())
  .then(rawData => {
    const config = {
      x: {
        min: 0,
        max: 9,
        interval: 1,
      },
      y: {
        min: 20,
        max: 90,
        interval: 10,
      },
    };

    const App = () => {
      const timeKey = 1950; // Note that timeKey should be controllable in the real usage.
      return (
        <FactfulBubbleChart config={config} rawData={rawData} timeKey={timeKey}/>
      )
    };
    
    render(<App/>, document.getElementById('root'));
  });
```

**Config**

| Name | Type | Default value | Description | Required |
| ---- | ---- | ------------- | ----------- | -------- |
| `x`, `y` | `object` | - | Configuration for x and y axis | **True** |
| `x.item`, `y.item` | `string` | - | Axis title | False |
| `x.min`, `y.min` | `number`, `float` | - | Minimum number of axis | **True** |
| `x.max`, `y.max` | `number`, `float` | - | Maximum number of axis | **True** |
| `x.interval`, `y.interval` | `number, float` | - | Interval number between each division on axis | **True** |
| `x.unit`, `y.unit` | `string` | - | Unit of axis | False |
| `normalizeType` | `string` | - | Try to set `min-max` if the sizes of the bubbles are not well balanced | False |
| `chartWidth` | `number` | `760` | `max-width` of chart | False |
| `chartHeight` | `number` | `480` | `height` of chart | False |
| `maxPlotSize` | `number, float` | `40` | Maximum size of the largest plot of all | False |
| `minPlotSize` | `number, float` | `1.5` | Minimum size of the largest plot of all | False |
| `chartFrameStyle` | `object` | - | Custom style for chart frame | False |
| `chartTimeVisible` | `boolean` | `true` | Set false to hide time key behind plots | False |
| `chartTimeStyle` | `object` | - | Custom style for time key behind plots | False |
| `axisColor` | `string` | `#333` | Color code for axis | False |
| `groupColor` | `object` | - | Object that has children that have corresponding name as its key to the `group` field of the raw data | False |
| `groupColor[$goupName].fill` | `string` | - | Plot's color of given group | False |
| `groupColor[$goupName].stroke` | `string` | - | Plot's border color of given group | False |
| `onChartDidMount` | `function` | - | Callback called after the first mount | False |
| `onChartDidUpdate` | `function` | - | Callback called every time chart and plots are updated | False |
| `onPlotMouseEnter` | `function` | - | Callback called when mouse pointer is hovered on plot | False |
| `onPlotMouseLeave` | `function` | - | Callback called when mouse pointer is left from plot | False |
| `onPlotClick` | `function` | - | Callback called when plot is clicked | False |

**Callback arguments**

| Callback | Arguments |
| ---- | ---- |
| `onChartDidMount`,<br>`onChartDidUpdate` | `ref`: DOM of chart element<br>`timeKey`: Current time key |
| `onPlotMouseEnter`,<br>`onPlotMouseLeave`,<br>`onPlotClick` | `ref`: DOM of plot element<br>`data`: Object that has fields below<br>`data.name`: Plot's identifiable name<br>`data.group`: Plot's group<br>`data.x`: Plot's value of x<br>`data.y`: Plot's value of y<br>`data.size`: Plot's value of size<br>`data.positionX`: Plot's position in 'px'<br>`data.positionY`: Plot's position in 'px' |

### 3. Add your controller
Probably you want to add a controller that can update `timeKey` field to move the plots.

In the example below, Slider from [Material-UI](https://material-ui.com/lab/slider/) is used.

**index.js**

```javascript
import React, {Fragment, useState} from 'react';
import {render} from 'react-dom';
import FactfulBubbleChart from 'factful-bubble-chart';
import Slider from '@material-ui/lab/Slider'; // Add this as your controller

fetch('data.json')
  .then(response => response.json())
  .then(rawData => {
    const config = {
      x: {
        min: 0,
        max: 9,
        interval: 1,
      },
      y: {
        min: 20,
        max: 90,
        interval: 10,
      },
    };

    const App = () => {
      const timeMin = 1950;
      const timeMax = 2015;
      const [timeKey, setTimeKey] = useState(timeMin);
      
      return (
        <Fragment>
          <FactfulBubbleChart config={config} rawData={rawData} timeKey={Math.round(timeKey)}/>
          <Slider min={timeMin} max={timeMax} value={timeKey} onChange={(e, val) => setTimeKey(val)}/>
        </Fragment>
      )
    };
    
    render(<App/>, document.getElementById('root'));
  });
```

### 3. That's it!
Enjoy Seeing the facts of the world.

Examples can be found in the [demo page](https://Tokky0425.github.io/factful-bubble-chart/).

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details
