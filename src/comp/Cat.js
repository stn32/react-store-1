import React, { Component } from 'react'

export class Cat extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'All products'
                },
                {
                    key: 't-shirt',
                    name: 'T-Shirts'
                },
                {
                    key: 'hoody',
                    name: 'Hoodys'
                },
                {
                    key: 'cap',
                    name: 'Caps'
                },
            ]
        }
    }

    render() {
        return (
            <div className='categories'>
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        )
    }
}

export default Cat