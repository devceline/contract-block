import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const { className } = props

  return (
    <div className='Sidebar'>
      <ul className="Sidebar__links">
        <li><Link to='/my-contracts'>  <FontAwesomeIcon icon={'file-contract'} /> <span>My Contracts</span></Link></li>
        <li><Link to='/create-contract'> <FontAwesomeIcon icon="pencil" /> <span>Create Contracts</span></Link></li>
        <li><Link to='/about-us'> <FontAwesomeIcon icon={'user-group'} /> <span>About us</span></Link></li>
      </ul>
    </div>
  )
}

export default Sidebar