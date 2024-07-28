import type { Repository } from '#types'
import Image from 'next/image'
import { GoRepoForked, GoStar } from 'react-icons/go'

export async function ProjectsSection() {
  const body = {
    query: `
      query {
        viewer {
          repositories(first: 10, visibility: PUBLIC) {
            nodes {
              description
              forkCount
              name
              owner {
                avatarUrl
                login
              }
              primaryLanguage {
                color
                name
              }
              stargazerCount
              url
            }
          }
        }
      }
    `,
  }
  const response = await fetch('https://api.github.com/graphql', {
    body: JSON.stringify(body),
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
    method: 'POST',
  })
  const responseBody = await response.json()
  const repositories: Repository[] =
    responseBody?.data?.viewer?.repositories?.nodes ?? []

  if (!repositories.length) return null

  const columns = 2
  const orderedRepositories: Repository[] = []

  for (const [index, repository] of repositories.entries()) {
    const quotient = Math.floor(index / columns)
    const remainder = Math.floor(index % columns)
    const newIndex = remainder * columns + quotient + Math.min(remainder, 1)

    orderedRepositories[newIndex] = repository
  }

  const humanize = (num: number) => {
    if (num < 1_000) return num.toString()

    const whole = Math.floor(num / 1000)
    const fraction = Math.ceil((num % 1000) / 100)

    return `${whole}.${fraction}k`
  }
  const projects = orderedRepositories.map(repository => {
    return (
      <div
        className="inline-block w-full mb-3 transition ease duration-500"
        key={`${repository.owner.login}/${repository.name}`}
      >
        <div className="bg-[var(--backdrop)] p-3 rounded-md flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <Image
              alt="Owner avatar picture"
              aria-label="Owner avatar picture"
              className="rounded-full"
              height={24}
              src={repository.owner.avatarUrl}
              width={24}
            />
            <a
              className="hover:underline"
              href={repository.url}
              rel="noreferrer"
              target="_blank"
            >
              <span className="text-sm">
                {repository.owner.login}/
                <span className="font-bold">{repository.name}</span>
              </span>
            </a>
          </div>
          <p className="text-xs grow multiline-ellipsis h-full">
            {repository.description}
          </p>
          <div className="flex gap-x-2 text-xs">
            {repository.primaryLanguage && (
              <span className="flex items-center gap-x-1">
                <span
                  className="w-[10px] h-[10px] rounded-full"
                  style={{ backgroundColor: repository.primaryLanguage.color }}
                />
                <span>{repository.primaryLanguage.name}</span>
              </span>
            )}
            {repository.stargazerCount > 0 && (
              <span className="flex items-center gap-x-1">
                <GoStar />
                <span>{humanize(repository.stargazerCount)}</span>
              </span>
            )}
            {repository.forkCount > 0 && (
              <span className="flex items-center gap-x-1">
                <GoRepoForked />
                <span>{humanize(repository.forkCount)}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    )
  })

  return (
    <section>
      <h2 className="font-2xl font-semibold">Projects</h2>
      <div className="md:columns-2 gap-x-3 mt-1">{projects}</div>
    </section>
  )
}