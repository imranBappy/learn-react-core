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

  // let productElement = product.map(p => <Product product={p} />)

  return (
    <div className="App">
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

    </div>
  );
}

export default App;
