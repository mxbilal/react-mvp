import React from 'react'
import { useSearchParams } from 'react-router-dom'

const list = [
  'book',
  'computer',
  'mouse',
  'speaker',
  'pen',
  'tissue',
]
const UseSearchParams = () => {
  const [param, setParam] = useSearchParams({
    q: '',
    checked: false
  })

  const q = param.get('q')
  const checked = param.get('checked') === 'true'

  const items = list.filter(item => {
    return (
      item.toLowerCase().includes(q.toLowerCase())
    )
  })
  return (
    <div>
      <input type="text" value={q}
        onChange={(e) => setParam(prev => {
          prev.set('q', e.target.value)
          return prev
        },
          { replace: true }
        )} />
      <input type="checkbox" value={checked}
        onChange={(e) => setParam(prev => {
          prev.set('checked', e.target.checked)
          return prev
        },
          { replace: true }
        )} />

      <div>
        {
          items.map(item =>
            <p>{item}</p>
          )
        }
      </div>

      <div>
        <p>With the help of this fantastic React hook, you can easily
          manage and synchronize URL query parameters with the state
          of your app. No more difficult URL parsing; everything is
          neatly packaged for you!
        </p>
        <p>I discovered the following advantages to utilizing it.</p>
        <ul>
          <li>Since useState was not used, rendering issues were resolved.</li>
          <li> The filters will still be used because they are in the URL if you
            want to return to a page and then visit it again.</li>
          <li> It's really beneficial to share filtered results with others.</li>
        </ul>
      </div>
    </div>
  )
}

export default UseSearchParams
