import {connect} from 'react-redux';
import Home from '../components/Home';
import {addToCart, removeToCart} from '../Services/Actions/Action'

const mapStateToProps = state =>({
    data : state
})

const dispatchToProps =dispatch => ({
    addToCartHandler: data => dispatch(addToCart(data)),
    removeToCartHandler: data => dispatch(removeToCart(data)),
})

// export default Home;

export default connect(mapStateToProps, dispatchToProps)(Home);