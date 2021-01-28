import React, { useState, useEffect } from 'react'

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
    const [message, setMessage] = useState('')

    let handlerPlus = () => setCount(count + 1)



    return (
      <div>
        <h1>{count}</h1>

        <button onClick={() => setCount(count - 1)} style={style} >Minus - </button>
        <button onClick={handlerPlus} style={style} >Plus + </button>
        <button onKeyDown={() => setCount(count + 1)} > onKeyDown</button>
        <button onKeyPress={() => setCount(count - 1)} >onKeyPress</button>
        {(message)}
        <textarea onCopy={() => setMessage("Text Coped!")} name="" id="" cols="30" rows="10">
          Text Coped Text Coped Text Coped Text Coped
      </textarea>

        <textarea onCut={() => setMessage("Text Cut!")} name="" id="" cols="30" rows="10">
          Text Cut  Text Cut  Text Cut  Text Cut  Text Cut  Text Cut  Text Cut
      </textarea>
        <textarea onPaste={() => setMessage("Text Paste!")} name="" id="" cols="30" rows="10">
          Text Paste Text Paste Text Paste Text Paste Text Paste
      </textarea>

        <button onScroll={() => setCount(count + 1)} > onScroll</button>

      </div>
    )
  }



  // window.addEventListener('scroll', () => console.log(200))

  function ScrollAwareDiv() {

    const [scroll, setScroll] = useState(0)

    function onScrolls() {
      setScroll(scroll + 1)
    }

    return (
      <div
        onScroll={onScrolls}
        style={{
          border: '1px solid black',
          width: '600px',
          height: '100px',
          overflow: 'scroll',
        }} >
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scroll}</p>
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scroll}</p>
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scroll}</p>
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scroll}</p>
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scroll}</p>
        <p>This demonstrates how to get the scrollTop position within a scrollable react component.</p>
        <p>ScrollTop is {scroll}</p>
      </div>
    )
  }


  function Users() {
    const [myCount, setMyCount] = useState('')

    const [user, setUser] = useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          setUser(data)
        })
    }, [])

    function change(e) {
      setMyCount(e.target.value)

    }

    return (
      <>
        <ul>
          <p>myCount: {myCount}</p>
          <input onChange={change} type="text" />
          {user.map(user => {
            return <>
              <div style={{ margin: 10, padding: 10, border: '1px solid green' }}>
                <ol>Name: {user.name}</ol>
                <ol>Email: {user.email}</ol>
                <ol>Phone: {user.phone}</ol>
                <ol>Address: {user.address.city}</ol>

              </div>
            </>
          })}
        </ul>

      </>
    )
  }


  return (
    <div className="App" >


      <h3>Dynamic Users</h3>
      <Users />

      {/* <ScrollAwareDiv />
      <Counter />
      <Person person={person} />
      <Person person={person} />
      <Person person={person} />
      <Person person={person} /> */}

      {/* <Product product={product[0]} />
      <Product product={product[1]} />
      <Product product={product[2]} /> */}

      {/* {
        product.map(p => <h1>{p.name}</h1>)
      }

      {
        product.map(p => <Product product={p} />)
      } */}

    </div >
  );
}

export default App;
