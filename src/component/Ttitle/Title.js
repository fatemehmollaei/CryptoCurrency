import classes from './Title.module.css';
import React from 'react';
import Icon from '../UI/Icon/Icon'

import Progress from  '../UI/progress/progress'

const Title = (props) => {
    return (
      <div className={classes.titleChart}>
             <Icon background={props.background} size={props.size} />
              <div className={classes.boardChart}>
                  <p className={classes.name}> {props.name}</p>
                  <p className={classes.price}> 
                    <span>{props.price}</span>
                      {props.percent ?<span> (+{props.percent}%)</span> :null}  
                  </p>
              </div>

            {/*   <Progress value={props.changePercent24Hr}/> */}
       </div>
    );
};
 
export default Title;


