import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import axios from '../../axios-orders'
import * as CurrencyActions from '../../store/actions/Currency'
import BoxChart from '../../component/BoxChart/BoxChart'
import Balance from '../../component/balance/Balance.'

class CurrencyBuilder extends Component {
    
    componentWillMount(){
         const id = this.props.match.params.id
         this.props.getCurrency(id)
     }

    render() {

         let boxChart =  null

        if(this.props.currency && this.props.currencyDay && this.props.currencyMonth && this.props.currencyYear)
            boxChart =<> <BoxChart currency={this.props.currency} currencyDay={this.props.currencyDay}  currencyMonth={this.props.currencyMonth} currencyYear={this.props.currencyYear} /> <Balance />  </> 

        return (
            <Wrapper>
                   {boxChart}
                   
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {

    return {
        currency : state.Currency.currency,
        currencyDay : state.Currency.currencyDay,
        currencyMonth : state.Currency.currencyMonth,
        currencyYear : state.Currency.currencyYear,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCurrency: (id) => {
            dispatch(CurrencyActions.currency(id))
            dispatch(CurrencyActions.currencyDay(id))
            dispatch(CurrencyActions.currencyMonth(id))
            dispatch(CurrencyActions.currencyYear(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyBuilder, axios)