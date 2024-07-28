import {
  AboutMeSection,
  ProfileHeader,
  ProjectsSection,
  TechnologiesSection,
} from '#components'

export default function Page() {
  return (
    <div className="grow flex h-screen w-full items-center justify-center p-4">
      <div className="max-w-[600px] m-auto">
        <ProfileHeader />
        <main className="flex flex-col gap-y-3 my-3">
          <AboutMeSection />
          <ProjectsSection />
          <TechnologiesSection />
        </main>
      </div>
    </div>
  )
}