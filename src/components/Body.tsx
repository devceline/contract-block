import React from 'react'

interface BodyProps {
  className?: string
}

const Body: React.FC<BodyProps> = (props) => {

  const { className } = props
  return (
    <div className='Body'>
      Hello!
    </div>
  )
}

export default Body