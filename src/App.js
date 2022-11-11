import React from "react";
import Header from "./comp/Header";
import Content from "./comp/Content";
import Footer from "./comp/Footer";
import Items from "./comp/Items";
import Cat from "./comp/Cat";
import ShowFullItem from "./comp/ShowFullItem";
import './index.scss';
import './comp/scss/header.scss';
import './comp/scss/content.scss';
import './comp/scss/cat.scss';
import './comp/scss/items.scss';
import './comp/scss/footer.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 't-shirt 1',
          img: 'img6.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam',
          category: 't-shirt',
          price: '10.99'
        },
        {
          id: 2,
          title: 'hoody 1',
          img: 'img1.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam',
          category: 'hoody',
          price: '48.99'
        },
        {
          id: 3,
          title: 'hoody 2',
          img: 'img4.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam',
          category: 'hoody',
          price: '38.99'
        },
        {
          id: 4,
          title: 'Cap 1',
          img: 'img2.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam',
          category: 'cap',
          price: '18.99'
        },
        {
          id: 5,
          title: 'Cap 2',
          img: 'img3.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam',
          category: 'cap',
          price: '19.99'
        },
        {
          id: 6,
          title: 'T-shirt',
          img: 'img5.png',
          desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nam',
          category: 't-shirt',
          price: '19.99'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Content />
        <Cat chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} item={this.state.fullItem} onAdd={this.addToOrder} />}
        <Footer />
      </div>
    )
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === 'all') {
      this.setState({ currentItems: this.state.items })
      return
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] })
    }
  }
}

export default App;
