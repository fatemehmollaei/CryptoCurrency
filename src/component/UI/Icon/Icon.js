import React from 'react';
import classes from './Icon.module.css'

const Icon = (props) => {
 
  return (
    <div className={classes.shapIcon}

         style={{backgroundImage: 'url('+props.background+')' , width: props.size , height:props.size}}
   
    ></div>
  );

};
 
export default Icon;