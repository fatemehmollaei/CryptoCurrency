import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import Footer from '../Footer/Footer'
//import classes from './Layout.module.css'

const Main = (props)=>  {
        return (
            <Wrapper>
                <main >
                    {props.children}
                </main>
                <Footer />
            </Wrapper>
        )
 }
export default Main