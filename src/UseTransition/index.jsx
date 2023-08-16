import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useTransition } from 'react'
import data from './data.json'
const UseTransition = () => {
  const [isPending, startTransition] = useTransition()
  const [val, setVal] = useState("")
  const [val2, setVal2] = useState("")

  const handleChange = (e) => {
    let v = e.target.value
    startTransition(async () => {
      let x = data.filter((a) => a.about.includes(v))[0]
      setVal2(x?.about)
      setVal(v)
    })
  }
  console.log(isPending)
  return (
    <div>
      <p>component paragraph</p>
      {isPending && <p>loadi...</p>}
      <p>{val}</p>
      <p>{val2}</p>
      <input value={val} onChange={handleChange} />
      {/* <input value={val2} onChange={(e) => setVal2(e.target.value)} /> */}
    </div>
  )
}

export default UseTransition
