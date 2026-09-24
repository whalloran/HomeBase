import {
  CalendarDays,
  CircleCheck,
  House,
  NotebookText,
  Settings,
  ShoppingCart,
  type LucideIcon,
} from 'lucide-react'

export const currentUser = {
  initials: 'SM',
  name: 'Smith',
}

export interface NavItem {
  label: string
  icon: LucideIcon
  active?: boolean
}

export const navItems: NavItem[] = [
  { label: 'Dashboard', icon: House, active: true },
  { label: 'Tasks', icon: CircleCheck },
  { label: 'Shopping', icon: ShoppingCart },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'House', icon: House },
  { label: 'Notes', icon: NotebookText },
  { label: 'Settings', icon: Settings },
]

export const greeting = {
  title: 'Good afternoon!',
  subtitle: '3 things need your attention today.',
  date: 'Mon, Jan 13, 2025',
  temperature: '68°',
}

export type TonightKind = 'dinner' | 'trash' | 'soccer'

export interface TonightItem {
  kind: TonightKind
  title: string
  time?: string
}

export const tonightItems: TonightItem[] = [
  { kind: 'dinner', title: 'Dinner: Chicken pasta', time: '6:00 PM' },
  { kind: 'trash', title: 'Trash night' },
  { kind: 'soccer', title: 'Soccer practice', time: '7:00 PM' },
]

export const shoppingItems: string[] = ['Milk', 'Coffee', 'Greek yogurt', 'Bananas', 'Dog food']

export interface HouseTask {
  title: string
  due: string
}

export const houseTasks: HouseTask[] = [
  { title: 'Replace HVAC filter', due: 'Due this week' },
  { title: 'Water plants', due: 'Today' },
  { title: 'Clean bathroom', due: 'Sat, Jan 18' },
]

export type UpcomingKind = 'appointment' | 'game' | 'date'

export interface UpcomingEvent {
  kind: UpcomingKind
  title: string
  date: string
}

export const upcomingEvents: UpcomingEvent[] = [
  { kind: 'appointment', title: 'Dentist appointment', date: 'Thu, Jan 16' },
  { kind: 'game', title: 'Soccer game', date: 'Sat, Jan 18' },
  { kind: 'date', title: 'Date night', date: 'Sat, Jan 18' },
]
