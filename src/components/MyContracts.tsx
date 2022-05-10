import React from 'react'

interface MyContractsProps {
  className?: string
}

const MyContracts: React.FC<MyContractsProps> = (props) => {

  const { className } = props
  return (
    <div className='MyContracts'>
      <ul className="MyContracts__contracts">
        <li>Contract 1</li>
        <li>Contract 2</li>
        <li>Contract 3</li>
      </ul>
    </div>
  )
}

export default MyContracts