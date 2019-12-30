import * as React from "react";
import { connect } from 'react-redux';
import {fetchCoins} from '../../shared/redux/actions/coinsActions'
import { array } from 'prop-types';

import './Coins.css'
import {isFirstRender} from '../../shared/utils/frontend'


class Coins extends React.Component{
    static propsTypes = {
        fetchCoins: typeof fetchCoins,
        coins: array
    };

    componentDidMount() {
       // const fetchCoins =
        this.props.fetchCoins();
        // const { fetchCoins } = this.props;

       // fetchCoins();
    }

    render() {
        const coins = this.props.coins.coins;
        console.log('coins', coins);

        //const { coins: { coins } } = this.props;

        // if (isFirstRender(coins)) {
        //     return null;
        // }
        return(
            <div className="Coins">
                <h1>Top 100 Coins</h1>
                <ul>
                    {coins && coins.map(
                        (coin) => {
                            if (coin){
                                return(
                                    <li key={coin.id}>
                                        <span className='left'>
                                            {coin.rank}
                                            {coin.name}
                                            {coin.symbol}
                                        </span>
                                        <span className="right">{coin.price_usd}</span>
                                    </li>)
                            }

                        }
                    )}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        coins: state.coins.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCoins: () => dispatch(fetchCoins())
    }
}

// const mapStateToProps = ({coins}) => ({
//     coins
// });

// const mapDispatchToProps = dispatch => ({
//     fetchCoins: () => dispatch(fetchCoins())
//
// });

// const mapDispatchToProps = dispatch => bindActionCreators(
//     {
//         fetchCoins
//     },
//     dispatch
// );

export default connect(mapStateToProps,mapDispatchToProps)(Coins);
