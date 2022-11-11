import React from 'react';
import mainLogo from './img/logo2.png';
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react';
import Order from './Order';

const showOrders = (props) => {

    let total = 0;
    props.orders.forEach(el => total += Number.parseFloat(el.price))

    return (
        <div>
            {props.orders.map(el => (
                <Order onDelete={props.onDelete} key={el.id} item={el} />
            ))}
            <p className='total'>Total: {new Intl.NumberFormat().format(total)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>The cart is empty</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

    return (
        <header className='header'>
            <div className='header__top'>
                <div className='header__top_box'>
                    <div className='header__logo'>
                        <img src={mainLogo} alt="logo" /><span>Street Store</span>
                    </div>
                    {/* <div className='header__search'>
                        <input type="text" />
                        <button>SEARCH</button>
                    </div> */}
                    <ul className='header__btns'>
                        <li>+382 7834 3232</li>
                        <li>Log-In</li>
                        <li><FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`header__cart_btn ${cartOpen && 'active'}`} /></li>
                        {cartOpen && (
                            <div className='header__cart_list'>
                                <h2 className='cart_title'>Cart</h2>
                                {props.orders.length > 0 ?
                                    showOrders(props) : showNothing()}
                            </div>
                        )}
                    </ul>
                </div>
            </div>

            <div className='header__bottom'>
                <div className='header__bottom_box'>
                    <ul className='header__cat'>
                        <li>CATALOG</li>
                    </ul>
                    <ul className='header__links'>
                        <li>ABOUT US</li>
                        <li>DELIVERY</li>
                        <li>CONTACTS</li>
                    </ul>
                </div>
            </div>

        </header>
    )
}
