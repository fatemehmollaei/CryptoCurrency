import React, { Component } from 'react'
import {Line} from 'react-chartjs-2';
import classes from './chart.module.css'

class Chart extends  Component {

  constructor(props) {
    
    super(props);

    this.state = {
       data:{
          labels: props.title,
          datasets: [
          {
            label: props.title,
            lineTension: 0.5,
            backgroundColor: '#414568',
            borderColor: '#D2469A',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56]
          }
          ]
       },
       options : {
        plugins: {
          legend: {
            title: {
              display: false,
            }
          }
        },
      interaction: {
        mode: 'index',
        intersect: false,
      },
      stacked: false,
      tooltips: {
          callbacks: {
             label: function(tooltipItem) {
                    return tooltipItem.yLabel;
             }
          }
      },
        responsive: true, 
         hover: {
          mode: 'index',
          intersec: true
        },
      
        scales: {
          x: {
            display: true,
           
            grid: {
              display: true,
              drawBorder: true,
              drawOnChartArea: true,
              drawTicks: true,
            },
            title: {
              display: false,
            }
          },
          y: {
            display: true,
            grid: {
              display: true,
              drawBorder: true,
              drawOnChartArea: true,
              drawTicks: true,
            },
            title: {
              display: false,
            }
          }
        }
    }
    }
    this.extractDataLable =()=>{

      const lable = []
      const data = []
    
      for(let i=0 ;i<props.currency.length;i++){
        data.push(props.currency[i].priceUsd)
        lable.push(i)

      }

       const chartData= {lable:lable,data:data}
       return chartData
    }

    this.excuteDataLable =()=>{
      const chartData = this.extractDataLable()
   
      const data={
       labels: chartData.lable,
       datasets: [
       {
         label:props.title,
         lineTension: 0.5,
         backgroundColor: '#414568',
         borderColor: '#D2469A',
         borderWidth: 1,
         data: chartData.data
       }
       ]
    }
     this.setState(() => {
        return { data: data} 
       })

    }
}


componentDidMount(){
     
    this.excuteDataLable()

}


render() {

  return(
    <div className={classes.chart}>
       <Line
          data={this.state.data}
          options={this.state.options}
        />
    </div>

  )
}
}

export default Chart;