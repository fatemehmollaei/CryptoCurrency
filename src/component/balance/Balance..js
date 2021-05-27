

import classes from './Balance.module.css';
import React from 'react';
import DataCome from '../DataCome/DataCome'
import upArrow from '../../assets/image/upArrow.svg'
import downArrow from '../../assets/image/downArrow.svg'
import ProgresBalancs from './progressBalance'
const Balance = () => {
    return (
           <div className={classes.Balance}>
             <div className={classes.BalanceTitle}>
               <span>Balance</span>
               <span>$4.680</span>
             </div>
             <ProgresBalancs value="" price="" />

             <div className = {classes.dataCome}> 
                    <DataCome background={upArrow}  price="3,138,84"  name="income" />
                    <DataCome background={downArrow}  price="3,138,84"  name="outcome" />
             </div>
            
           </div>

  
         
    );
};
 
export default Balance;


