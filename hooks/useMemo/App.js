import { useState, useMemo } from'react'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const handleAdd = () => {
    setProducts([...products, {
      name, 
      price: parseInt(price)
    }])
    console.log('HandleAdd');
    setName('')
    setPrice('')
  }

  const total = useMemo(() => {
    const result = products.reduce((result, product) => {
      console.log('Tinh toan lai');

      return result + product.price 
    }, 0)

    return result
  }, [products])

  return (
    <div style={{padding: 32}}>
      <input 
        value={name} 
        placeholder="Enter name..."
        onChange={e => setName(e.target.value)}
      />
      <input 
        value={price} 
        placeholder="Enter price..."
        onChange={e => setPrice(e.target.value)}
      />
      <button
        onClick={handleAdd}
      >
        Add
      </button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
