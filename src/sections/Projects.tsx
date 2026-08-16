import ProjectsCarousel from "@/src/components/projects/ProjectsCarousel";

export default function Projects() {
  return (
    <section className="flex flex-col items-center w-full mb-2">
      <h2 className="text-size-500 md:text-size-600">Projects</h2>
      <ProjectsCarousel />
    </section>
  )
}