'use client'

import {
  type ClientPresenceProps,
  type LanyardEvent,
  type LanyardEventData,
  LanyardEventEvent,
  LanyardOpcode,
} from '#types'
import { useEffect, useRef, useState } from 'react'

export function ClientPresence(props: ClientPresenceProps) {
  const [data, setData] = useState<LanyardEventData>()
  const webSocketRef = useRef<WebSocket>()
  const [waitingToReconnect, setWaitingToReconnect] = useState(false)

  useEffect(() => {
    if (waitingToReconnect) return
    if (!webSocketRef.current) {
      const webSocket = new WebSocket('wss://api.lanyard.rest/socket')

      webSocketRef.current = webSocket

      let interval: NodeJS.Timeout

      webSocket.onclose = () => {
        if (!webSocketRef.current) return
        if (waitingToReconnect) return

        setWaitingToReconnect(true)
        setTimeout(() => setWaitingToReconnect(false), 5_000)
      }

      webSocket.onmessage = (ev: MessageEvent<string>) => {
        const data: LanyardEvent = JSON.parse(ev.data)

        if (data.op === LanyardOpcode.Hello) {
          interval = setInterval(() => {
            if (webSocket.readyState === webSocket.OPEN)
              webSocket.send(
                JSON.stringify({
                  op: LanyardOpcode.Heartbeat,
                }),
              )
          }, data.d?.heartbeat_interval)

          if (webSocket.readyState === webSocket.OPEN)
            webSocket.send(
              JSON.stringify({
                d: { subscribe_to_id: props.userId },
                op: LanyardOpcode.Initialize,
              }),
            )
        }
        if (data.op === LanyardOpcode.Event) {
          if (data.t === LanyardEventEvent.InitState) setData(data.d)
          if (data.t === LanyardEventEvent.PresenceUpdate) setData(data.d)
        }
      }

      return () => {
        clearInterval(interval)
        webSocketRef.current = null

        if (webSocket.readyState !== webSocket.CONNECTING) webSocket.close()
      }
    }
  }, [waitingToReconnect, props.userId])

  const status = data?.discord_status ?? props.initialPresence.discord_status
  let statusText: string

  switch (status) {
    case 'dnd': {
      statusText = 'Do Not Disturb'

      break
    }
    case 'idle': {
      statusText = 'Idle'

      break
    }
    case 'offline': {
      statusText = 'Offline'

      break
    }
    case 'online': {
      statusText = 'Online'

      break
    }
  }

  return (
    <>
      <div className="flex items-center gap-x-1">
        <span className={`${status}-status`} />
        {statusText}
      </div>
      <span>&mdash;</span>
    </>
  )
}
