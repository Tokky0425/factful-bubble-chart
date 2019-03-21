import React, {useState} from 'react';
import {render} from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample3 from './Sample3';

const loadData = urls => Promise.all(urls.map(url => fetch(url)));

(async () => {
  const urls = ['./data/sample1.json', './data/sample2.json', './data/sample3.json'];
  const responses = await loadData(urls);
  const rawData1 =　await responses[0].json();
  const rawData2 =　await responses[1].json();
  const rawData3 =　await responses[2].json();

  const App = () => {
    const [data1Selected, setData1Selected] = useState({name: '', x:'', y:''});
    const [data2Selected, setData2Selected] = useState({name: '', x:'', y:''});
    const [data3Selected, setData3Selected] = useState({name: '', x:'', y:''});

    const config1 = {
      x: {
        item: 'Birth Rate',
        min: 0, // required
        max: 9, // required
        interval: 1, // required
      },
      y: {
        item: 'Life Expectancy',
        min: 20, // required
        max: 90, // required
        interval: 10, // required
        unit: 'years',
      },
      normalizeType: 'min-max',
      chartWidth: 760,
      chartHeight: 480,
      chartFrameStyle: {
        backgroundColor: '#fff',
      },
      chartTimeVisible: true,
      chartTimeStyle: {
        color: '#dcdcdc',
      },
      maxPlotSize: 40,
      minPlotSize: 1.5,
      axisColor: '#333',
      groupColor: {
        'Asia': {
          fill: 'rgb(255, 88, 114)',
          stroke: '#333',
        },
        'Europe': {
          fill: 'rgb(255, 231, 0)',
          stroke: '#333',
        },
        'Africa': {
          fill: 'rgb(0, 213, 233)',
          stroke: '#333',
        },
        'Americas': {
          fill: 'rgb(127, 235, 0)',
          stroke: '#333',
        },
        'Oceania': {
          fill: 'rgb(255,127,80)',
          stroke: '#333',
        },
      },
      onChartDidMount: (ref, timeKey) => {
        // console.log(ref, timeKey);
      },
      onChartDidUpdate: (ref, timeKey) => {
        // console.log(ref, timeKey);
      },
      onPlotMouseEnter: (ref, data) => {
        setData1Selected({name: data.name, x: data.x, y: data.y});
        // console.log(ref, `${data.name}, group:${data.group}, x:${data.x}, y:${data.y}', size:${data.r}px, positionX:${data.positionX}px, positionY:${data.positionY}px`);
      },
      onPlotMouseLeave: (ref, data) => {
        // console.log(ref, `${data.name}, group:${data.group}, x:${data.x}, y:${data.y}', size:${data.r}px, positionX:${data.positionX}px, positionY:${data.positionY}px`);
      },
      onPlotClick: (ref, data) => {
        setData1Selected({name: data.name, x: data.x, y: data.y});
        // console.log(ref, `${data.name}, group:${data.group}, x:${data.x}, y:${data.y}', size:${data.r}px, positionX:${data.positionX}px, positionY:${data.positionY}px`);
      }
    };

    const config2 = {
      x: {
        item: 'GDP per capita',
        min: -10000, // required
        max: 100000, // required
        interval: 10000, // required
        unit: 'US dollars',
      },
      y: {
        item: 'Birth Rate',
        min: 0, // required
        max: 9, // required
        interval: 1, // required
      },
      groupColor: {
        'Asia': {
          fill: 'rgb(255, 88, 114)',
          stroke: '#333',
        },
        'Europe': {
          fill: 'rgb(255, 231, 0)',
          stroke: '#333',
        },
        'Africa': {
          fill: 'rgb(0, 213, 233)',
          stroke: '#333',
        },
        'Americas': {
          fill: 'rgb(127, 235, 0)',
          stroke: '#333',
        },
        'Oceania': {
          fill: 'rgb(255,127,80)',
          stroke: '#333',
        },
      },
      onPlotMouseEnter: (ref, data) => {
        setData2Selected({name: data.name, x: data.x, y: data.y});
      },
      onPlotClick: (ref, data) => {
        setData2Selected({name: data.name, x: data.x, y: data.y});
      }
    };

    const config3 = {
      x: {
        item: 'School enrollment',
        min: 0, // required
        max: 140, // required
        interval: 10, // required
        unit: '%',
      },
      y: {
        item: 'GDP per capita',
        min: -10000, // required
        max: 100000, // required
        interval: 10000, // required
        unit: 'US dollars',
      },
      groupColor: {
        'Asia': {
          fill: 'rgb(255, 88, 114)',
          stroke: '#333',
        },
        'Europe': {
          fill: 'rgb(255, 231, 0)',
          stroke: '#333',
        },
        'Africa': {
          fill: 'rgb(0, 213, 233)',
          stroke: '#333',
        },
        'Americas': {
          fill: 'rgb(127, 235, 0)',
          stroke: '#333',
        },
        'Oceania': {
          fill: 'rgb(255,127,80)',
          stroke: '#333',
        },
      },
      onPlotMouseEnter: (ref, data) => {
        setData3Selected({name: data.name, x: data.x, y: data.y});
      },
      onPlotClick: (ref, data) => {
        setData3Selected({name: data.name, x: data.x, y: data.y});
      }
    };

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>What you can make</h1>
        <div style={{maxWidth: '760px', margin: '60px auto 100px'}}>
          <div>
            <Sample1 config={config1} rawData={rawData1} dataSelected={data1Selected}/>
            <p><a href="./data/sample1.json" download="sample1.json">Download JSON file</a></p>
          </div>
          <div style={{marginTop: '80px'}}>
            <Sample2 config={config2} rawData={rawData2} dataSelected={data2Selected}/>
            <p><a href="./data/sample2.json" download="sample2.json">Download JSON file</a></p>
          </div>
          <div style={{marginTop: '80px'}}>
            <Sample3 config={config3} rawData={rawData3} dataSelected={data3Selected}/>
            <p><a href="./data/sample3.json" download="sample3.json">Download JSON file</a></p>
          </div>
        </div>
        <h1 style={{textAlign: 'center'}}>Config</h1>
        <div style={{maxWidth: '760px', margin: '60px auto 0'}}>
          <h2>Minimum config</h2>
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
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
            `}
          </SyntaxHighlighter>
          <h2>All config</h2>
          <SyntaxHighlighter language='javascript' style={docco}>
            {`
const config1 = {
  x: {
    item: 'Birth Rate',
    min: 0, // required
    max: 9, // required
    interval: 1, // required
  },
  y: {
    item: 'Life Expectancy',
    min: 20, // required
    max: 90, // required
    interval: 10, // required
    unit: 'years',
  },
  normalizeType: 'min-max',
  chartWidth: 760,
  chartHeight: 540,
  chartFrameStyle: {
    backgroundColor: '#fff',
  },
  chartTimeVisible: true,
  chartTimeStyle: {
    color: '#dcdcdc',
  },
  maxPlotSize: 40,
  minPlotSize: 1.5,
  axisColor: '#333',
  groupColor: {
    'Asia': {
      fill: 'rgb(255, 88, 114)',
      stroke: '#333',
    },
    'Europe': {
      fill: 'rgb(255, 231, 0)',
      stroke: '#333',
    },
    'Africa': {
      fill: 'rgb(0, 213, 233)',
      stroke: '#333',
    },
    'Americas': {
      fill: 'rgb(127, 235, 0)',
      stroke: '#333',
    },
    'Oceania': {
      fill: 'rgb(255,127,80)',
      stroke: '#333',
    },
  },
  onChartDidMount: (ref, timeKey) => {
    console.log(ref, timeKey);
  },
  onChartDidUpdate: (ref, timeKey) => {
    console.log(ref, timeKey);
  },
  onPlotMouseEnter: (ref, data) => {
    console.log(ref, \`\${data.name}, group:\${data.group}, x:\${data.x}, y:\${data.y}', size:\${data.r}px, positionX:\${data.positionX}px, positionY:\${data.positionY}px\`);
  },
  onPlotMouseLeave: (ref, data) => {
    console.log(ref, \`\${data.name}, group:\${data.group}, x:\${data.x}, y:\${data.y}', size:\${data.r}px, positionX:\${data.positionX}px, positionY:\${data.positionY}px\`);
  },
  onPlotClick: (ref, data) => {
    console.log(ref, \`\${data.name}, group:\${data.group}, x:\${data.x}, y:\${data.y}', size:\${data.r}px, positionX:\${data.positionX}px, positionY:\${data.positionY}px\`);
  }
};
            `}
          </SyntaxHighlighter>
          <p style={{marginTop: '30px'}}>See more info in the <a href="https://github.com/Tokky0425/factful-bubble-chart" target={'_blank'} rel={'noopener'}>document</a>.</p>
        </div>
      </div>
    )
  };
  render(<App />, document.getElementById('root'));
})();
