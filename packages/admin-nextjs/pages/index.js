import Link from 'next/link'

export default function IndexPage() {
  return (
    <div>
      Hello World Trello Tasks with timedoctor trial.{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  )
}
