import React, { Component } from 'react'

export class Item extends Component {
    render() {
        return (
            <div className='item'>
                <div className='item__img' onClick={() => this.props.onShowItem(this.props.item)}>
                    <img src={"./img/" + this.props.item.img} alt="" />
                </div>
                <div className='item__txt'>
                    <h2>{this.props.item.title}</h2>
                    <h3>{this.props.item.category}</h3>
                    <p>{this.props.item.desc}</p>
                    <div className='add_to_cart'>
                        <b>{this.props.item.price}$</b>
                        <div onClick={() => this.props.onAdd(this.props.item)}>+</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item