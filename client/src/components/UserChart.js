import React, { PureComponent } from 'react';
import { bar } from 'billboard.js';
import BillboardChart from 'react-billboardjs';

const CHART_DATA = {
  columns: [
    ['data1', 30, 200, 100, 400, 150, 250],

  ],
  types: {
    data1: bar(),

  },
};



const DOM_PROPS = {
  'data-type': 'bar',
};

class BarChart extends PureComponent {
  static displayName = 'BarChart';

  state = {
    data: CHART_DATA,
  };


  instance = null;

  getRef = (Instance) => {
    this.instance = Instance;

    console.log(Instance);
  };

  render(props) {
    const { data } = this.state;
    console.log(props)

    const CHART_AXIS = {
        rotated: false,
        y: {
          categories: ['First', 'Second', 'Thrd', 'Fourth', 'Fifth', 'Sixth'],
          type: 'category',
        },
      };

    if (!data) {
      return <p>Loading...</p>;
    }

    console.log(data);

    return (

      <BillboardChart
        axis={CHART_AXIS}
        className="bar"
        data={data}
        domProps={DOM_PROPS}
        ref={this.getRef}
      />

    );
  }
}

export default BarChart;