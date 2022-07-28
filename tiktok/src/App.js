import { useState, useMemo, useRef } from'react'

function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [products, setProducts] = useState([])

  const nameRef = useRef()

  const handleAdd = () => {
    setProducts([...products, {
      name, 
      price: parseInt(price)
    }])
    setName('')
    setPrice('')

    nameRef.current.focus()
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
        ref={nameRef}
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
