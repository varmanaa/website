export enum LanyardOpcode {
  Event = 0,
  Hello = 1,
  Initialize = 2,
  Heartbeat = 3,
}

export enum LanyardErrorCode {
  InvalidUnknownOpcode = 4_004,
  OpcodeRequiresData = 4_005,
  InvalidPayload = 4_006,
}

export enum LanyardEventEvent {
  InitState = 'INIT_STATE',
  PresenceUpdate = 'PRESENCE_UPDATE',
}

export interface LanyardEventData {
  active_on_discord_desktop: boolean
  active_on_discord_mobile: boolean
  active_on_discord_web: boolean
  activities: unknown
  discord_status: 'dnd' | 'idle' | 'offline' | 'online'
  discord_user: {
    avatar: string
    avatar_decoration_data?: {
      asset: string
      sku_id: string
    }
    bot?: boolean
    clan?: boolean
    discriminator: string
    display_name
    global_name?: string
    id: string
    public_flags?: number
    username: string
  }
  kv: Record<string, string>
  listening_to_spotify: boolean
  spotify: unknown
}

export interface LanyardHelloEvent {
  d: {
    heartbeat_interval?: number
  }
  op: LanyardOpcode.Hello
}

export interface LanyardInitStateEvent {
  d: LanyardEventData
  op: LanyardOpcode.Event
  t: LanyardEventEvent.InitState
}

export interface LanyardPresenceUpdateEvent {
  d: LanyardEventData
  op: LanyardOpcode.Event
  t: LanyardEventEvent.PresenceUpdate
}

export type LanyardEvent =
  | LanyardHelloEvent
  | LanyardInitStateEvent
  | LanyardPresenceUpdateEvent
