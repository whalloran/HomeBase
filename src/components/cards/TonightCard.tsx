import type { ReactNode } from 'react'
import { ShoppingCart, Trash2, Utensils } from 'lucide-react'
import DashboardCard, { CardListItem } from '../DashboardCard/DashboardCard'
import SoccerBallIcon from '../icons/SoccerBallIcon'
import { tonightItems, type TonightKind } from '../../data/mockData'

const tonightIcons: Record<TonightKind, ReactNode> = {
  dinner: <Utensils size={24} color="#7a5b3e" strokeWidth={2} />,
  trash: <Trash2 size={24} color="#3f4757" strokeWidth={1.8} />,
  soccer: <SoccerBallIcon size={24} color="#1b2233" />,
}

function TonightCard() {
  return (
    <DashboardCard
      title="Tonight"
      variant="blue"
      icon={<ShoppingCart size={22} fill="currentColor" strokeWidth={1.6} />}
    >
      {tonightItems.map((item) => (
        <CardListItem
          key={item.title}
          leading={tonightIcons[item.kind]}
          title={item.title}
          subtitle={item.time}
        />
      ))}
    </DashboardCard>
  )
}

export default TonightCard
