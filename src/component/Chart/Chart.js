import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import classes from './chart.module.css'

class Chart extends  Component {

  constructor(props) {
    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
    
    super(props);

    this.state = {

      labels: ['1', '2', '3',
      '4', '5'],
      datasets: [
      {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: '#414568',
      borderColor: '#D2469A',
      borderWidth: 1,
      data: [65, 59, 80, 81, 56]
      }
      ]
      
    }

}
render() {

  return(
    <div className={classes.chart}>
       <Line
          data={this.state}
          options={{
            responsive: true, 
             hover: {
              mode: 'index',
              intersec: false
            },
          }}
        />
    </div>

  )
}
}

export default Chart;