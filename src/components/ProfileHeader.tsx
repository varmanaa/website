import { IconWithTooltip, ServerPresence, ThemeIcon, Time } from '#components'
import { GoMoon } from 'react-icons/go'
import { SiGithub } from 'react-icons/si'

export async function ProfileHeader() {
  return (
    <header>
      <h1 className="text-4xl font-bold">Hi, I'm Varmanaa!</h1>
      <div className="flex items-center gap-x-2 h-6">
        {process.env.DISCORD_ID && (
          <ServerPresence />
        )}
        <Time />
      </div>
      <ul className="flex flex-wrap gap-2 mt-1">
        <li>
          <IconWithTooltip
            href="https://github.com/varmanaa"
            icon={<SiGithub size={24} />}
            placement="bottom"
            text="GitHub"
          />
        </li>
        <li>
          <div className="h-full bg-[var(--foreground)] w-0.5 scale-70 opacity-10" />
        </li>
        <li>
          <ThemeIcon />
        </li>
      </ul>
    </header>
  )
}
