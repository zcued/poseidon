export interface LocalProps {
  daysShort: string[]
  monthsShort: string[]
  nextMonth: string
  nextYear: string
  prevYear: string
  prevMonth: string
  today: string
  clear: string
  renderYear: (y: number) => React.ReactNode
}
