import { LayoutDashboard } from 'lucide-react'

interface DashboardHeaderProps {
  period?: string
}

export function DashboardHeader({ period = '2024 — Full Year' }: DashboardHeaderProps) {
  return (
    <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div className="flex items-center gap-3">
        <span aria-hidden="true">
          <LayoutDashboard size={20} alt="Dashboard icon" />
        </span>
        <div>
          <h1 className="text-xl font-semibold text-foreground tracking-tight">Financial Overview</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Executive metrics dashboard</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span aria-label="Reporting period" tabindex="0">
          {period}
        </span>
      </div>
    </header>
  )
}
