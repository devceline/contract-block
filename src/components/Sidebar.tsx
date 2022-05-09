import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface SidebarProps {
  className?: string
}

const Sidebar: React.FC<SidebarProps> = (props) => {

  const { className } = props

  return (
    <div className='Sidebar'>
      <ul className="Sidebar__links">
        <li> <FontAwesomeIcon icon={'file-contract'} /> <span>My Contracts</span></li>
        <li> <FontAwesomeIcon icon="pencil" /> <span>Create Contracts</span></li>
        <li> <FontAwesomeIcon icon={'user-group'} /> <span>About us</span></li>
      </ul>
    </div>
  )
}

export default Sidebar