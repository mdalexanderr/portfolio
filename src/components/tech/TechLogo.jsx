/**
 * Technology logos — real SVG brand marks.
 *
 * These are the authentic logo SVGs (Simple Icons set) stored as real
 * image files in src/assets/logos and served via <img>, so they render
 * exactly like the official marks at any size.
 */
import python from '../../assets/logos/python.svg'
import flask from '../../assets/logos/flask.svg'
import javascript from '../../assets/logos/javascript.svg'
import typescript from '../../assets/logos/typescript.svg'
import tailwindcss from '../../assets/logos/tailwindcss.svg'
import html5 from '../../assets/logos/html5.svg'
import css3 from '../../assets/logos/css3.svg'
import postgresql from '../../assets/logos/postgresql.svg'
import git from '../../assets/logos/git.svg'
import docker from '../../assets/logos/docker.svg'

const LOGOS = {
  python,
  flask,
  javascript,
  typescript,
  tailwind: tailwindcss,
  tailwindcss,
  html5,
  css3,
  postgresql,
  git,
  docker,
}

export default function TechLogo({ name, className = 'h-4 w-4', alt }) {
  const src = LOGOS[name.toLowerCase()]
  if (!src) return null
  return <img src={src} alt={alt ?? name} className={className} loading="lazy" />
}

