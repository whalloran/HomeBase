import { Sun } from 'lucide-react'
import TonightCard from '../../components/cards/TonightCard'
import ShoppingListCard from '../../components/cards/ShoppingListCard'
import HouseTasksCard from '../../components/cards/HouseTasksCard'
import UpcomingCard from '../../components/cards/UpcomingCard'
import { greeting } from '../../data/mockData'
import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__intro">
        <div>
          <h1 className="dashboard__title">{greeting.title}</h1>
          <p className="dashboard__subtitle">{greeting.subtitle}</p>
        </div>
        <div className="dashboard__meta">
          <div className="dashboard__date">{greeting.date}</div>
          <div className="dashboard__weather">
            <Sun size={28} color="var(--color-sun)" fill="var(--color-sun)" strokeWidth={2} />
            <span>{greeting.temperature}</span>
          </div>
        </div>
      </div>

      <div className="dashboard__grid">
        <TonightCard />
        <ShoppingListCard />
        <HouseTasksCard />
        <UpcomingCard />
      </div>
    </div>
  )
}

export default Dashboard
