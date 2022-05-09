import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ReactNode } from 'react'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = (props) => {

  return (
    <div className="Header">
      <span className='Header__title'>ContractBlock</span>
      <ul className='Header__actions'>
        <li><FontAwesomeIcon icon="user" /></li>
        <li><FontAwesomeIcon icon="cogs" /></li>
      </ul>
    </div>
  )
}

export default Header