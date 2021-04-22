import React from 'react';
import './Style/HomeStyle.css'

const Home = ()=>{
    return (
        <div>
        <div className="Add_to_cart">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGh28j-bujrxUN6548q8_MscVbqumGURgCg&usqp=CAU" />
        </div>
        <h1> Happy Shree Ram Navami</h1>,
        <div className="main_wrapper">
        <div className="cart-wrapper">
        <div className="image-wrapper item">
           <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9awAaHl7Yu6aZj4yRkRJ4MYi0ws_05UOShw&usqp=CAU" />
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
           <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9awAaHl7Yu6aZj4yRkRJ4MYi0ws_05UOShw&usqp=CAU" />
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
           <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9awAaHl7Yu6aZj4yRkRJ4MYi0ws_05UOShw&usqp=CAU" />
        </div>
        <div className="text-wrapper item">
        <span>Shree Ram Wall Frame</span>
        <span>Price: $200</span>
     </div>
     <div className="btn-wrapper item">
     <button>Add To Cart</button>
  </div>
        </div>
        
        </div>
        </div>
    )
}

export default Home;