import React, { useState } from 'react';
import classes from './Button.module.css'
import { useHistory } from "react-router";

const Button = (props) => {

  const [selected, setSelected] = useState(false);
  const history = useHistory();

  const handleClicked = ()=>{

    setSelected(!selected)
    props.onclick()
    history.push(props.link);

  }
  console.log(props.active)
  return (
    <div className={classes.shapButton}>
      <button
        className={props.active ? classes.selected : classes.notSelected}
        onClick={() => handleClicked() }
       style={{backgroundImage: 'url('+props.background+')'}}
      ></button>
    </div>
  );

};
 
export default Button;