import React from 'react'
import classes from './BoxChart.module.css'
import Chart from '../Chart/Chart'
import Title from '../Ttitle/Title'
import IconBackground from '../../assets/image/BTC.svg'
const BoxChart = (props) =>{

  return(
    <div className={classes.boxChart}>
        <Title background={IconBackground} name="ETH / USD "  price="$2,330.84"  percent="1.00" size="16vw"/>
        <Chart />
    </div>

  )

}

export default BoxChart;