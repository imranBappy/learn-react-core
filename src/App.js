import React, { useState } from 'react'

import './App.css';


function Person(props) {
  const styles = {
    color: 'green',
    margin: 'auto',
    border: '1px solid',
    width: 300,
  }
  const { name, email, phone } = props.person
  return (
    <div style={styles} >
      <div style={{ margin: 15, padding: 10, border: '1px solid red' }}>
        <div style={{ margin: 3, padding: 3, border: '1px solid yellow' }}>
          <div style={{ margin: 3, padding: 3, border: '1px solid blue' }}>
            <div style={{ margin: 3, padding: 3, border: '1px solid red' }}>
              <div style={{ margin: 3, padding: 3, border: '1px solid gray' }}>
                <strong>{name}</strong>
                <p>{phone}</p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    margin: 'auto',
    color: 'green',
    width: 300,
    border: '1px solid'
  }
  let { name, price } = props.product

  return (
    <div style={productStyle}>
      <h5>Name: {name}</h5>
      <h6>Price: {price}</h6>
    </div>
  )

}


function App() {
  let person = {
    name: 'Imran Hossen',
    email: 'imran@gmail.com',
    phone: '01724825061'
  }


  let product = [
    { name: 'iPhone', price: 1000, },
    { name: 'Realme', price: 1200, },
    { name: 'Nokia', price: 500, },
    { name: 'iPhone', price: 1000, },
    { name: 'Realme', price: 1200, },
    { name: 'Nokia', price: 500, },
  ]

  let productElement = product.map(p => <Product product={p} />)


  function Counter() {
    let style = { margin: 20, fontSize: 20, color: 'green', border: '1px solid blue', padding: 10 }
    const [count, setCount] = useState(0)
    let handlerPlus = () => setCount(count + 1)
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={handlerPlus} style={style} >Plus + </button>
        <button onClick={() => setCount(count - 1)} style={style} >Minus - </button>

      </div>
    )
  }


  return (
    <div className="App">


      <Counter />




      <Person person={person} />
      <Person person={person} />
      <Person person={person} />
      <Person person={person} />

      {/* <Product product={product[0]} />
      <Product product={product[1]} />
      <Product product={product[2]} /> */}

      {
        product.map(p => <h1>{p.name}</h1>)
      }

      {
        product.map(p => <Product product={p} />)
      }

    </div>
  );
}

export default App;
