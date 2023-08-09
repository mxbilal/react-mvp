import React from 'react'
import { useState } from 'react'

//src
import codeImage from '../assets/img/currying.png'

const Currying = () => {
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [count, setCount] = useState(0)

  const handleChange = (setState) => (event) => {
    setState(event.target.value)
  }
  return (
    <div>
      <div>
        <input value={name} onChange={handleChange(setName)} />
        <input value={age} onChange={handleChange(setAge)} />
        <input value={count} onChange={handleChange(setCount)} />
      </div>
      <div>
        <img width={600} height={500} src={codeImage} />
      </div>
    </div>
  )
}

export default Currying
