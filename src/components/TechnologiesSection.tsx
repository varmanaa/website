import { IconWithTooltip } from '#components'
import {
  SiBootstrap,
  SiCloudflareworkers,
  SiGraphql,
  SiJavascript,
  SiJquery,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRust,
  SiSequelize,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

export function TechnologiesSection() {
  return (
    <section>
      <h2 className="font-2xl font-semibold">Technologies</h2>
      <div className="flex flex-wrap gap-2 mt-1">
        <IconWithTooltip
          icon={<SiBootstrap size={24} />}
          placement="top"
          text="Bootstrap"
        />
        <IconWithTooltip
          icon={<SiCloudflareworkers size={24} />}
          placement="top"
          text="Cloudflare Workers"
        />
        <IconWithTooltip
          icon={<SiGraphql size={24} />}
          placement="top"
          text="GraphQL"
        />
        <IconWithTooltip
          icon={<SiJavascript size={24} />}
          placement="top"
          text="JavaScript"
        />
        <IconWithTooltip
          icon={<SiJquery size={24} />}
          placement="top"
          text="JQuery"
        />
        <IconWithTooltip
          icon={<SiNextdotjs size={24} />}
          placement="top"
          text="Next.js"
        />
        <IconWithTooltip
          icon={<SiNodedotjs size={24} />}
          placement="top"
          text="Node.js"
        />
        <IconWithTooltip
          icon={<SiPostgresql size={24} />}
          placement="top"
          text="PostgreSQL"
        />
        <IconWithTooltip
          icon={<SiPrisma size={24} />}
          placement="top"
          text="Prisma"
        />
        <IconWithTooltip
          icon={<SiReact size={24} />}
          placement="top"
          text="React"
        />
        <IconWithTooltip
          icon={<SiRust size={24} />}
          placement="top"
          text="Rust"
        />
        <IconWithTooltip
          icon={<SiSequelize size={24} />}
          placement="top"
          text="Sequelize"
        />
        <IconWithTooltip
          icon={<SiTailwindcss size={24} />}
          placement="top"
          text="Tailwind CSS"
        />
        <IconWithTooltip
          icon={<SiTypescript size={24} />}
          placement="top"
          text="TypeScript"
        />
        <IconWithTooltip
          icon={<SiVercel size={24} />}
          placement="top"
          text="Vercel"
        />
      </div>
    </section>
  )
}