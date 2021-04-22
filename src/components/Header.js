import React from 'react';
import './Style/HomeStyle.css'
const a=20;
const Header = (props)=>{
   console.log('home',(props.data.cardItems).length);
   const itemsAdded =((props.data.cardItems).length);
   console.log(itemsAdded);
    return (
        <div>
        <div className="Add_to_cart">
        <span className="cart_count">{itemsAdded}</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiGh28j-bujrxUN6548q8_MscVbqumGURgCg&usqp=CAU" />
        </div>
        
        </div>
    )
}

export default Header;