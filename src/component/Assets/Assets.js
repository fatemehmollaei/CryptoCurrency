

import classes from './Assets.module.css';
import React from 'react';
import Link from '../UI/Link/Link'
import Title from '../Ttitle/Title'
import IconBackground from '../../assets/image/BTC.svg'
const Assets = (props) => {

   const ListAsset = props.assets.map((asset)=>{
        

        return <Link key={asset.id} link={"/currency/"+asset.id} >
                  <Title key={asset.id} background={IconBackground} name={asset.name}  price={parseFloat(asset.priceUsd).toFixed(2)}  percent={parseFloat(asset.changePercent24Hr).toFixed(2)} size="13vw"/>
                  <hr></hr>
              </Link>
        

     })

  

  return (
    <>
     <h2 className={classes.Assettitle}>CryptoCurrency List</h2>
         <div className={classes.AssetItem}>
              {ListAsset}
        </div>
   </>
  );

};
 
export default Assets;


