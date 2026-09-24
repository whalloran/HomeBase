import type { ReactNode } from 'react'
import { CalendarDays, Heart } from 'lucide-react'
import DashboardCard, { CardListItem } from '../DashboardCard/DashboardCard'
import IconBadge from '../icons/IconBadge'
import SoccerBallIcon from '../icons/SoccerBallIcon'
import { upcomingEvents, type UpcomingKind } from '../../data/mockData'

const upcomingIcons: Record<UpcomingKind, ReactNode> = {
  appointment: <IconBadge icon={CalendarDays} color="#3b82f6" size={24} />,
  game: (
    <span className="icon-badge icon-badge--round" style={{ background: '#3b82f6', width: 26, height: 26 }}>
      <SoccerBallIcon size={18} color="#fff" />
    </span>
  ),
  date: <Heart size={26} color="#6b4fe0" fill="#6b4fe0" />,
}

function UpcomingCard() {
  return (
    <DashboardCard
      title="Upcoming"
      variant="purple"
      icon={<IconBadge icon={CalendarDays} color="var(--card-purple-accent)" />}
    >
      {upcomingEvents.map((event) => (
        <CardListItem
          key={event.title}
          leading={upcomingIcons[event.kind]}
          title={event.title}
          subtitle={event.date}
        />
      ))}
    </DashboardCard>
  )
}

export default UpcomingCard
