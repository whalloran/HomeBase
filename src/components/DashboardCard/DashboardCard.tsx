import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import './DashboardCard.css'

export type CardVariant = 'blue' | 'green' | 'orange' | 'purple'

interface DashboardCardProps {
  title: string
  icon: ReactNode
  variant: CardVariant
  children: ReactNode
}

function DashboardCard({ title, icon, variant, children }: DashboardCardProps) {
  return (
    <section className={`dashboard-card dashboard-card--${variant}`}>
      <header className="dashboard-card__header">
        <h2 className="dashboard-card__title">
          <span className="dashboard-card__title-icon">{icon}</span>
          {title}
        </h2>
        <a href="#" className="dashboard-card__view-all" onClick={(e) => e.preventDefault()}>
          View all <ArrowRight size={14} strokeWidth={2} />
        </a>
      </header>
      <ul className="dashboard-card__list">{children}</ul>
    </section>
  )
}

interface CardListItemProps {
  leading: ReactNode
  title: string
  subtitle?: string
}

export function CardListItem({ leading, title, subtitle }: CardListItemProps) {
  return (
    <li className={`card-list-item${subtitle ? '' : ' card-list-item--single'}`}>
      <span className="card-list-item__leading">{leading}</span>
      <span className="card-list-item__text">
        <span className="card-list-item__title">{title}</span>
        {subtitle && <span className="card-list-item__subtitle">{subtitle}</span>}
      </span>
    </li>
  )
}

export default DashboardCard
