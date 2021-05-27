import classes from './Footer.module.css'
import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Button from '../../component/UI/Button/Button'
import setting from '../../assets/image/setting.svg'
import chart from '../../assets/image/chart.svg'
import main from '../../assets/image/main.svg'

const footer = ()=>  {
        return (
            <Wrapper>
                <footer className={classes.footer} >
                  <div className={classes.footerButton}>

                        <Button link="/setting" active="true" background={setting}/>
                        <Button link="/currency" active="false" background={chart}/>
                        <Button link="/" active="false" background={main}/>
                        
                  </div>
                </footer>
            </Wrapper>
        )
 }
export default footer