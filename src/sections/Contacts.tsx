const LINKS = [
  {
    text: 'Email',
    link: 'mailto:risyad.athaya@ristek.cs.ui.ac.id',
  },
  {
    text: 'LinkedIn',
    link: 'https://www.linkedin.com/in/risyadathaya/',
  },
  {
    text: 'Github',
    link: 'https://github.com/RisyadAthaya',
  },
]

export default function Contacts() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:justify-between w-full px-16 py-8">
      <p className="text-center text-size-100">
        Created by Risyad Athaya M. © 2026 - All Rights Reserved
      </p>
      <ul className="flex flex-row flex-wrap items-center justify-between gap-8">
        {LINKS.map((link) => (
          <li key={link.text}>
            <a href={link.link} target="_blank">
              <p className="text-white hover:text-gray-400">{link.text}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
