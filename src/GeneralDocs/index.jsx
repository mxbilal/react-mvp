import React from 'react'

const GeneralDocs = () => {
  const handleMore = () => {
    let dot = document.getElementById('dot')
    let more = document.getElementById('more')
    if (dot.style.display === 'none') {

    }
    else {
      dot.style.display = 'none'
      more.style.display = 'inline'
    }
  }
  return (
    <div className='main-general'>
      <div className='post'>
        <h3>Ionic Developement</h3>
        <p>Ionic apps are built using the languages of the web:
          HTML, CSS, and JavaScript. Thus, if you know how to build a basic web app,
          <span id='dot' onClick={handleMore}>{'  '}  read more...</span>
          <span id='more'>you already know how to build with Ionic. With Ionic, you can deploy a native
            iOS or Android app, native desktop app, or web app, all from a single, shared codebase.</span> </p>
      </div>

      <div className='post'>
        <h3>Isomorphic React</h3>
        <p>Isomorphic React, a fancy phrase that simply means React that runs on the server. </p>
      </div>
    </div>
  )
}

export default GeneralDocs
