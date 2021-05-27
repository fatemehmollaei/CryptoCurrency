import React, { Component } from 'react'
import { connect } from 'react-redux'
import Wrapper from '../../hoc/Wrapper/Wrapper'
import axios from '../../axios-orders'
import * as AssetsActions from '../../store/actions/Assets'
import Assets from '../../component/Assets/Assets'
class AssetsBuilder extends Component {
    
    componentWillMount(){
 
           this.props.getAssets()
     }

    render() {
        return (
            <Wrapper>
                  { this.props.assets ? <Assets assets={this.props.assets} /> :null}
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
        getAssets: () => {
            dispatch(AssetsActions.assets())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetsBuilder, axios)