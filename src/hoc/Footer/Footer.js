import classes from './Footer.module.css'
import React, { useState } from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Button from '../../component/UI/Button/Button'
import setting from '../../assets/image/setting.svg'
import chart from '../../assets/image/chart.svg'
import main from '../../assets/image/main.svg'

const Footer = ()=>  {
 
  const [activeState, setActivated] = useState([true,false,false]);
    const active = (state)=>{
      
    switch(state){
      case 1 : {setActivated([true,false,false]);
                break}
                  
      case 2 : {setActivated([false,true,false]);
                break}

      case 3 : {setActivated([false,false,true]);
               break}

       default:{setActivated([true,false,false]);
        break}   
      }
     
      console.log(activeState)
  }
   
        return (
            <Wrapper>
                <footer className={classes.footer} >
                  <div className={classes.footerButton}>

                        <Button link="/" active={activeState[0]} background={setting} onclick={()=>active(1)}/>
                        <Button link="/" active={activeState[1]} background={chart} onclick={()=>active(2)}/>
                        <Button link="/" active={activeState[2]} background={main} onclick={()=>active(3)}/>
                        
                  </div>
                </footer>
            </Wrapper>
        )
 }
export default Footer