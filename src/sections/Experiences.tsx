const experiences = [
  {
    orgName: 'RISTEK',
    position: 'People Operations of Data Science & AI',
    date: 'Mar 2026 - Present',
  },
  {
    orgName: 'COMPFEST',
    position: 'Data Science Academy Expert Staff',
    date: 'Jan 2026 - Present',
  },
]

export default function Experiences() {
  return (
    <div className="flex flex-col items-center gap-8 py-16 w-full">
      <h2 className="text-size-500 md:text-size-700">Experiences</h2>
      <ul className="flex flex-col items-center md:items-start px-16 w-full">
        {experiences.map((experience) => (
          <li
            key={experience.orgName}
            className="flex flex-col md:flex-row justify-between gap-2 md:gap-8 items-center
            w-full border-b-white border-b-2 last:border-0 py-6 md:py-8 text-size-500 md:text-size-600"
          >
            <p>{experience.orgName}</p>
            <div className="flex flex-col text-center md:text-right text-size-100 md:text-size-200">
              <p>{experience.position}</p>
              <p>{experience.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
