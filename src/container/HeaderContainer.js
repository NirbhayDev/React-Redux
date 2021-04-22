import {connect} from 'react-redux';
import Header from '../components/Header';
// import {addToCart} from '../Services/Actions/Action'

const mapStateToProps = state =>({
    data : state
})

const dispatchToProps =dispatch => ({
    // addToCartHandler: data => dispatch(addToCart(data)),
})

// export default Home;

export default connect(mapStateToProps, dispatchToProps)(Header);