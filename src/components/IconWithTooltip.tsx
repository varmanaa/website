'use client'

import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from 'react-aria-components'
import type { IconWithTooltipProps } from '#types'

export function IconWithTooltip(props: IconWithTooltipProps) {
  const trigger =
    'href' in props ? (
      <a
        aria-label={props.text}
        className="w-10 h-10 flex items-center justify-center bg-[var(--backdrop)] rounded-xl"
        href={props.href}
        rel="noreferrer"
        target="_blank"
      >
        {props.icon}
      </a>
    ) : (
      <article
        className="w-10 h-10 flex items-center justify-center bg-[var(--backdrop)] rounded-xl"
        {...('onClick' in props && {
          onClick: props.onClick,
          style: { cursor: 'pointer' },
        })}
      >
        {props.icon}
      </article>
    )
  const directionArrow =
    props.placement === 'bottom' ? (
      <path d="M0 8 L4 4 L8 8" />
    ) : (
      <path d="M0 0 L4 4 L8 0" />
    )

  return (
    <TooltipTrigger closeDelay={0} delay={0}>
      <Button className="outline-none">{trigger}</Button>
      <Tooltip
        className="bg-[var(--tooltip-background)] py-1 px-2 my-2 rounded-[4px] fancy-box-shadow text-[var(--tooltip-foreground)]"
        placement={props.placement === 'bottom' ? 'bottom' : 'top'}
      >
        {props.text}
        <OverlayArrow>
          {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
          <svg
            height="8"
            viewBox="0 0 8 8"
            width="8"
            fill="var(--tooltip-background)"
          >
            {directionArrow}
          </svg>
        </OverlayArrow>
      </Tooltip>
    </TooltipTrigger>
  )
}
