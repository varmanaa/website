import type { LanyardEventData } from '#types'
import type {
  MouseEventHandler,
  ReactElement,
  ReactNode,
  SVGProps,
} from 'react'

interface BaseIconWithTooltipProps {
  icon: ReactElement<SVGProps<SVGElement>>
  placement: 'bottom' | 'top'
  text: string
}

export type IconWithTooltipProps =
  | BaseIconWithTooltipProps
  | InteractiveIconWithTooltipProps
  | LinkIconWithTooltipProps

interface InteractiveIconWithTooltipProps extends BaseIconWithTooltipProps {
  onClick: MouseEventHandler<HTMLElement>
}

interface LinkIconWithTooltipProps extends BaseIconWithTooltipProps {
  href: string
}

export interface ClientPresenceProps {
  initialPresence: LanyardEventData
  userId: string
}

export interface Repository {
  description: string
  forkCount: number
  name: string
  owner: {
    avatarUrl: string
    login: string
  }
  primaryLanguage: {
    color: string
    name: string
  }
  stargazerCount: number
  url: string
}

export interface RootLayoutProps {
  children: ReactNode
}