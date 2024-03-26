import HeaderStyle from "./Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons'; 


const Header = () => {
  return (
    <header className={HeaderStyle.header}>
        <FontAwesomeIcon className={HeaderStyle.icon} icon={faBell}/>
        <h1 className={HeaderStyle.h1}> Lesson Reminder</h1>
    </header>
  )
}

export default Header
