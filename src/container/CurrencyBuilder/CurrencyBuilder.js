import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import axios from '../../axios-orders'
import * as CurrencyActions from '../../store/actions/Currency'
import BoxChart from '../../component/BoxChart/BoxChart'
import Balance from '../../component/balance/Balance.'

class CurrencyBuilder extends Component {
    
    componentWillMount(){
          // this.props.getCurrency()
     }

    render() {
        return (
            <Wrapper>
                  {/* { this.props.assets ? <BoxChart assets={this.props.assets} /> :null} */}

                  <BoxChart />
                   <Balance />
                   
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {

    return {
        assets : state.Assets.assets
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrency: () => {
            dispatch(CurrencyActions.currencyDay())
            dispatch(CurrencyActions.currencyMonth())
            dispatch(CurrencyActions.currencyYear())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBuilder, axios)