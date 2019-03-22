import React, {useState} from 'react';
import {render} from 'react-dom';
import Sample1 from './Sample1';
import Sample2 from './Sample2';
import Sample3 from './Sample3';
import Sample4 from './Sample4';
import Box from './Box';

const loadData = urls => Promise.all(urls.map(url => fetch(url)));

(async () => {
  const urls = ['./data/sample1.json', './data/sample2.json', './data/sample3.json', './data/sample4.json'];
  const responses = await loadData(urls);
  const rawData1 =　await responses[0].json();
  const rawData2 =　await responses[1].json();
  const rawData3 =　await responses[2].json();
  const rawData4 =　await responses[3].json();

  const App = () => {
    const [data1Selected, setData1Selected] = useState({name: '', x:'', y:''});
    const [data2Selected, setData2Selected] = useState({name: '', x:'', y:''});
    const [data3Selected, setData3Selected] = useState({name: '', x:'', y:''});
    const [data4Selected, setData4Selected] = useState({name: '', x:'', y:''});

    const groupConfig = {
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
    };

    const config1 = {
      x: {
        item: 'Birth rate',
        min: 0, // required
        max: 9, // required
        interval: 1, // required
      },
      y: {
        item: 'Life expectancy',
        min: 20, // required
        max: 90, // required
        interval: 10, // required
        unit: 'years',
      },
      groupColor: groupConfig,
      onPlotMouseEnter: (ref, data) => {
        setData1Selected({name: data.name, x: data.x, y: data.y});
      },
      onPlotClick: (ref, data) => {
        setData1Selected({name: data.name, x: data.x, y: data.y});
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
        item: 'Birth rate',
        min: 0, // required
        max: 9, // required
        interval: 1, // required
      },
      groupColor: groupConfig,
      onPlotMouseEnter: (ref, data) => {
        setData2Selected({name: data.name, x: data.x, y: data.y});
      },
      onPlotClick: (ref, data) => {
        setData2Selected({name: data.name, x: data.x, y: data.y});
      }
    };

    const config3 = {
      x: {
        item: 'Average income',
        min: 0, // required
        max: 50000, // required
        interval: 5000, // required
        unit: 'EURO',
      },
      y: {
        item: 'School enrollment',
        min: 0, // required
        max: 140, // required
        interval: 10, // required
        unit: '%',
      },
      groupColor: groupConfig,
      onPlotMouseEnter: (ref, data) => {
        setData3Selected({name: data.name, x: data.x, y: data.y});
      },
      onPlotClick: (ref, data) => {
        setData3Selected({name: data.name, x: data.x, y: data.y});
      }
    };

    const config4 = {
      x: {
        item: 'Average income',
        min: 0, // required
        max: 60000, // required
        interval: 5000, // required
        unit: 'EURO',
      },
      y: {
        item: 'Median age',
        min: 0, // required
        max: 50, // required
        interval: 5, // required
        unit: 'years',
      },
      groupColor: groupConfig,
      onPlotMouseEnter: (ref, data) => {
        setData4Selected({name: data.name, x: data.x, y: data.y});
      },
      onPlotClick: (ref, data) => {
        setData4Selected({name: data.name, x: data.x, y: data.y});
      }
    };

    return (
      <div>
        <h1 style={{textAlign: 'center'}}>What you can make</h1>
        <div style={{maxWidth: '760px', margin: '60px auto 100px'}}>
          <div>
            <Sample1 config={config1} rawData={rawData1} dataSelected={data1Selected}/>
            <p><a href="./data/sample1.json" download="birth_rate_and_life_expectancy.json">Download JSON file</a></p>
            <Box>
              <p><b>References</b></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Population/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Population/</a></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Fertility/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Fertility/</a></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Mortality/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Mortality/</a></p>
            </Box>
          </div>
          <div style={{marginTop: '80px'}}>
            <Sample2 config={config2} rawData={rawData2} dataSelected={data2Selected}/>
            <p><a href="./data/sample2.json" download="gdp_per_capita_and_birth_rate.json">Download JSON file</a></p>
            <Box>
              <p><b>References</b></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Population/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Population/</a></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Fertility/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Fertility/</a></p>
              <p><a href="https://data.worldbank.org/indicator/NY.GDP.PCAP.CD" target={'_blank'} rel={'noopener'}>https://data.worldbank.org/indicator/NY.GDP.PCAP.CD</a></p>
            </Box>
          </div>
          <div style={{marginTop: '80px'}}>
            <Sample3 config={config3} rawData={rawData3} dataSelected={data3Selected}/>
            <p><a href="./data/sample3.json" download="average_income_and_primary_school_enrollment.json">Download JSON file</a></p>
            <Box>
              <p><b>References</b></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Population/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Population/</a></p>
              <p><a href="https://wid.world/data/" target={'_blank'} rel={'noopener'}>https://wid.world/data/</a></p>
              <p><a href="https://data.worldbank.org/indicator/SE.PRM.ENRR" target={'_blank'} rel={'noopener'}>https://data.worldbank.org/indicator/SE.PRM.ENRR</a></p>
              <p><b>cf.</b> <a href="https://datahelpdesk.worldbank.org/knowledgebase/articles/114955-how-can-gross-school-enrollment-ratios-be-over-100" target={'_blank'} rel={'noopener'}>How can gross school enrollment ratios be over 100 percent?</a></p>
            </Box>
          </div>
          <div style={{marginTop: '80px'}}>
            <Sample4 config={config4} rawData={rawData4} dataSelected={data4Selected}/>
            <p><a href="./data/sample4.json" download="average_income_and_median_age.json">Download JSON file</a></p>
            <Box>
              <p><b>References</b></p>
              <p><a href="https://population.un.org/wpp/Download/Standard/Population/" target={'_blank'} rel={'noopener'}>https://population.un.org/wpp/Download/Standard/Population/</a></p>
              <p><a href="https://wid.world/data/" target={'_blank'} rel={'noopener'}>https://wid.world/data/</a></p>
            </Box>
          </div>
        </div>
        <h1 style={{textAlign: 'center'}}>How to use</h1>
        <div style={{maxWidth: '760px', margin: '60px auto 0'}}>
          <p style={{marginTop: '30px', textAlign: 'center'}}>See the <a href="https://github.com/tokky0425/factful-bubble-chart" target={'_blank'} rel={'noopener'}>document</a>.</p>
        </div>
      </div>
    )
  };
  render(<App />, document.getElementById('root'));
})();
