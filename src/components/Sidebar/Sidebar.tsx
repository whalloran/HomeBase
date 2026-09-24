import { navItems } from '../../data/mockData'
import './Sidebar.css'

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        {navItems.map(({ label, icon: Icon, active }) => (
          <li key={label}>
            <a
              href="#"
              className={`sidebar__link${active ? ' sidebar__link--active' : ''}`}
              onClick={(e) => e.preventDefault()}
            >
              <Icon size={19} strokeWidth={active ? 2.2 : 1.8} fill={active ? 'currentColor' : 'none'} />
              <span>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
