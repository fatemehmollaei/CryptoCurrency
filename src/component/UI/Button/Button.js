import React, { useState } from 'react';
import classes from './Button.module.css'
import { useHistory } from "react-router";

const Button = (props) => {

  const [selected, setSelected] = useState(false);
  const history = useHistory();

  const handleClicked = ()=>{

    setSelected(!selected)
   
    history.push(props.link);

  }
 
  return (
    <div className={classes.shapButton}>
      <button
        className={selected ? classes.selected : classes.notSelected}
        onClick={() => handleClicked() }
       style={{backgroundImage: 'url('+props.background+')'}}
      ></button>
    </div>
  );

};
 
export default Button;