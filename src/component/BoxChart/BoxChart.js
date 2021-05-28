import React from 'react'
import classes from './BoxChart.module.css'
import Chart from '../Chart/Chart'
import Title from '../Ttitle/Title'
import IconBackground from '../../assets/image/BTC.svg'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
const BoxChart = (props) =>{


   const options={ 
        pauseOnHover:true,
        pauseOnFocus:true,
        arrows : false,
    } 


  return(
    <div className={classes.boxChart}>
        <Title background={IconBackground} name={props.currency.name}  price={parseFloat(props.currency.priceUsd).toFixed(2)}  percent={parseFloat(props.currency.changePercent24Hr).toFixed(2)} size="16vw"/>


        <Splide options={options}>

            <SplideSlide>
              <Chart currency={props.currencyDay} title="Daily"/>
            </SplideSlide>

            <SplideSlide>
              <Chart   currency={props.currencyMonth}  title="Monthly"/>
            </SplideSlide>

            <SplideSlide>
              <Chart  currency={props.currencyYear} title="Yearly"/>
            </SplideSlide>

        </Splide>
       
    </div>

  )

}
export default BoxChart;