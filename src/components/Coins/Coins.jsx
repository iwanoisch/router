import * as React from "react";
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import {fetchCoins} from '../../shared/redux/actions/coinsActions'


const Coins = ({coins}) => {

};

const mapStateToProps = ({coins}) => ({
    coins
});

const mapDispatchToProps = dispatch => bindActionCreators({
        fetchCoins
}, dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Coins);
