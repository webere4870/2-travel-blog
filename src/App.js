import React from 'react'
import Listing from './components/Listing'
import Navbar from './components/Navbar'
import data from './components/data'

function App()
{
  const jsxListings = data.map((temp)=>
  {
    return (
      <Listing
      key={temp.id}
      item={temp}
    />
    )
  })

  return (
    <div className='colFlex'>
      <Navbar/>
      {jsxListings}
    </div>
  )
}

export default App