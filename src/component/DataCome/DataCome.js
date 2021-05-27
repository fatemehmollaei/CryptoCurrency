

import classes from './DataCome.module.css';
import React from 'react';
import Title from  '../Ttitle/Title'
const DataCome = (props) => {
    return (
           <div className={classes.come}>
                <Title background={props.background} name={props.name} price={props.price}  percent={false} size="13vw"/>
           </div>
         
    );
};
 
export default DataCome;


