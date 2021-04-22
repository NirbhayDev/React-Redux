import React from 'react';
import './Style/HomeStyle.css'
const a=20;
const Home = (props)=>{
   console.log('home',(props.data.cardItems).length);
   const itemsAdded =((props.data.cardItems).length);
   console.log(itemsAdded);
   console.log('Home', {props})
    return (
        <div>
      <div className='master_wrapper'>
      
        <h1>React Redux Shopping Cart</h1>,
        <div className="main_wrapper">
        <div className="cart-wrapper">
        <div className="image-wrapper item">
           <img src=" https://img.tatacliq.com/images/i7/437Wx649H/MP000000009108758_437Wx649H_202103181758171.jpeg" />
        </div>
        <div className="text-wrapper item">
        <span>Shree Ram Wall Frame</span>
        <span>Price: $200</span>
     </div>
     <div className="btn-wrapper item">
     <button>Add To Cart</button>
  </div>
        </div>
        <div className="cart-wrapper">
        <div className="image-wrapper item">
           <img src=" https://img.tatacliq.com/images/i7/437Wx649H/MP000000009108758_437Wx649H_202103181758171.jpeg" />
        </div>
        <div className="text-wrapper item">
        <span>Shree Ram Wall Frame</span>
        <span>Price: $200</span>
     </div>
     <div className="btn-wrapper item">
     <button>Add To Cart</button>
  </div>
        </div>
        <div className="cart-wrapper">
        <div className="image-wrapper item">
           <img src=" https://img.tatacliq.com/images/i7/437Wx649H/MP000000009108758_437Wx649H_202103181758171.jpeg" />
        </div>
        <div className="text-wrapper item">
        <span>Shree Ram Wall Frame</span>
        <span>Price: $200</span>
     </div>
     <div className="btn-wrapper item">
     <button 
     onClick= {()=>props.addToCartHandler({price: 1000, name: 'Shree Ram'})}
     >
     Add To Cart
     </button>
     <button 
     onClick= {()=>props.removeToCartHandler()}
     >
     Remove To Cart
     </button>
  </div>
        </div>
        
        </div>
        </div>
        </div>
    )
}

export default Home;