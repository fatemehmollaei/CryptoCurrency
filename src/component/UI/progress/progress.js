import React, { useState, useRef, useEffect } from 'react'
import classes from './progress.module.css'

const Progress = (props) => {
  // initialization of ref with value only happens first time
  const value = props.value;
  const symbol = "%";
  const oldValue = useRef(value);
  const interval = useRef(null);
  const [display, setDisplay] = useState(oldValue.current);


  useEffect(() => {
    interval.current && clearInterval(interval.current);
    interval.current = setInterval(() => {
      setDisplay((val) => {
        console.log(val);
        if (val >= value) {
          oldValue.current = value;
          clearInterval(interval.current);
          return val;
        }
        return val + 1;
      });
    }, 50);

    return () => clearInterval(interval.current);
  }, [value]);

  return (
     <div>
          <progress value={value} max="100"></progress>
          <span> {display}{symbol}</span>
    </div>

  );
};

export default Progress