import { ClientPresence } from '#components'
import type { LanyardEventData } from '#types'

export async function ServerPresence() {
  const lanyardResponse = await fetch(
    `https://api.lanyard.rest/v1/users/${process.env.DISCORD_ID}`,
    {
      cache: 'no-store'
    }
  )
  const lanyardJson = (await lanyardResponse.json()) as {
    data: LanyardEventData
  }
  const initialPresence = lanyardJson.data

  return (
    <ClientPresence initialPresence={initialPresence} userId={process.env.DISCORD_ID} />
  )
}