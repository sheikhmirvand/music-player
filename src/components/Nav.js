import React from 'react'

const Nav = ({setLiBaz,liBaz}) => {
  return (
    <div>
        <nav className='nav'>
            <h1>ma music</h1>
            <h1 onClick={()=>setLiBaz(!liBaz)}>Library</h1>
        </nav>
    </div>
  )
}

export default Nav