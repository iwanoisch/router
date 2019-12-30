import * as React from "react";
import { connect } from 'react-redux';
import {fetchCoins} from '../../shared/redux/actions/coinsActions'
import {array} from "prop-types";

import {isFirstRender} from '../../shared/utils/frontend'


class Coins extends React.Component{
    static propsTypes = {
        fetchCoins: typeof fetchCoins
    };

    componentDidMount() {
       // const fetchCoins =
            this.props.fetchCoins();
        // const { fetchCoins } = this.props;

        fetchCoins();
    }

    render() {
        const coins =this.props.coins;
        console.log(this.props.coins);
        console.log(this.props);
        // const { coins: { coins } } = this.props;
        //
        // if (isFirstRender(coins)) {
        //     return null;
        // }
        return(
            <div className="Coins">
                <h1>Top 100 Coins</h1>
                <ul>
                    {coins.map((coin, key) => (
                        <li key={key}>{coin}</li>
                        )
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    coins: state.coins.coins
});

const mapDispatchToProps = dispatch => ({
    fetchCoins: () => dispatch(fetchCoins())

});


export default connect(mapStateToProps,mapDispatchToProps)(Coins);
