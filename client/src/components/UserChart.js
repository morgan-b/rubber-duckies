import React, { PureComponent, useState } from "react";
import { bar } from "billboard.js";
import BillboardChart from "react-billboardjs";



export default class BarChart extends PureComponent {

  static displayName = "BarChart";

  instance = null;

  getRef = (ChartInstance) => {
    
    this.chartInstance = ChartInstance;
    this.chartInstance.destroyChart();
    console.log(ChartInstance);
  };

  

  render() {

    const dataz=[]
    let userData = this.props.data;
    console.log(userData);
    const timeStamp = [];
    const actionData = [];
    
   
    var i;
    for (i = 0; i < userData.length; i++) {
      timeStamp.push(userData[i].date_created);
      actionData.push(userData[i].userInput);
    }
    console.log(timeStamp);
    console.log(actionData);

  actionData.reduce(function (obj, b) {
      obj[b] = ++obj[b] || 1;
      dataz.push(obj[b]);
      return obj;
    }, {});
    console.log(dataz);

    const CHART_DATA = {
    
      columns: 

        [dataz],
      type: bar(),
    };

    const CHART_AXIS = {
      x: {
        type: "category",
        categories: actionData,
      },
    };

    if (!CHART_DATA) {
      return <p>Loading...</p>;
    }
  
    return (
      <>
        <BillboardChart
         
         
          axis={CHART_AXIS}
          className="bar"
          data={CHART_DATA}
          ref={this.getRef}
        ></BillboardChart>
      </>
    );
  }
}



