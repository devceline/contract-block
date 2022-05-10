import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Editor from './Editor'
import MyContracts from './MyContracts'

interface BodyProps {
  className?: string
}

const Body: React.FC<BodyProps> = (props) => {

  const { className } = props

  return (
    <div className='Body'>
      <Routes>
        <Route path='/' element={<Editor />} />
        <Route path='/create-contract' element={<Editor />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/my-contracts' element={<MyContracts />} />
      </Routes>
    </div>
  )
}

export default Body