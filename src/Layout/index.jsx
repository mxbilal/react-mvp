import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({ children }) => {
  return (
    <div className='layout-main'>
      <header>
        <h2>My Docs</h2>
      </header>
      <div className='layout-middle'>
        <div className='sidebar'>
          <Link to="/" >HomePage</Link>
          <Link to='/automatic-batching' >Automatic Batching</Link>
          <Link to='/web-workers' >Web Workers</Link>
          <Link to='/intersection-observers' >Intersection Observers</Link>
          <Link to='/general' >General Docs</Link>
          <Link to='/currying' >Currying</Link>
          <Link to='/usetransition' >Use Transition</Link>
          <Link to='/use-search-param' >Use Search Param</Link>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Layout
