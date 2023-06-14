import React, { useEffect, useState } from 'react'

const AutomaticBaching = () => {
  let interval;
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    interval = setInterval(() => {
      setCount(count => count + 1);
      setToggle(r => !r)
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const handleCount = () => {
    setCount(0)
  }
  console.log(count, toggle)
  return (
    <div className='baching'>
      <h1>Automatic Baching</h1>
      <h2 style={{ color: toggle ? 'green' : 'black' }}>Counter: {count}</h2>
      <h3 style={{ color: toggle ? 'green' : 'black' }}>Color: {toggle ? 'green' : 'black'}</h3>
      <h3> Render: see console on both state change it render once!</h3>
      <button onClick={handleCount}>Restart</button>
    </div>
  )
}

export default AutomaticBaching
