import { Bell, ChevronDown, House, Search } from 'lucide-react'
import { currentUser } from '../../data/mockData'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <House className="header__logo" size={40} strokeWidth={2} fill="currentColor" />
        <div>
          <div className="header__title">HomeBase</div>
          <div className="header__subtitle">A calmer home for busy lives.</div>
        </div>
      </div>

      <div className="header__search">
        <Search size={17} className="header__search-icon" />
        <input type="text" placeholder="Search tasks, items, or events..." aria-label="Search" />
      </div>

      <div className="header__actions">
        <button type="button" className="header__bell" aria-label="Notifications">
          <Bell size={22} strokeWidth={1.8} />
          <span className="header__bell-dot" />
        </button>
        <button type="button" className="header__user">
          <span className="header__avatar">{currentUser.initials}</span>
          <span className="header__user-name">{currentUser.name}</span>
          <ChevronDown size={18} strokeWidth={2} />
        </button>
      </div>
    </header>
  )
}

export default Header
