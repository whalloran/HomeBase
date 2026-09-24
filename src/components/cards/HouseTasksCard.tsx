import { House } from 'lucide-react'
import DashboardCard, { CardListItem } from '../DashboardCard/DashboardCard'
import { houseTasks } from '../../data/mockData'
import './cards.css'

function HouseTasksCard() {
  return (
    <DashboardCard
      title="House Tasks"
      variant="orange"
      icon={<House size={22} fill="currentColor" strokeWidth={1.6} />}
    >
      {houseTasks.map((task) => (
        <CardListItem
          key={task.title}
          leading={<span className="mock-radio" />}
          title={task.title}
          subtitle={task.due}
        />
      ))}
    </DashboardCard>
  )
}

export default HouseTasksCard
