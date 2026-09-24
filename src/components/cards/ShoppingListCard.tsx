import { ShoppingCart } from 'lucide-react'
import DashboardCard, { CardListItem } from '../DashboardCard/DashboardCard'
import { shoppingItems } from '../../data/mockData'
import './cards.css'

function ShoppingListCard() {
  return (
    <DashboardCard
      title="Shopping List"
      variant="green"
      icon={<ShoppingCart size={22} fill="currentColor" strokeWidth={1.6} />}
    >
      {shoppingItems.map((item) => (
        <CardListItem key={item} leading={<span className="mock-checkbox" />} title={item} />
      ))}
    </DashboardCard>
  )
}

export default ShoppingListCard
