import Link from 'next/link'
import Sections from './sections'

export default function () {
	return (
		<>
			<header className="sticky top-0 z-1 bg-blue-300 p-4">
				<Link href="/">Header</Link>
			</header>

			<Sections />

			<footer className="bg-green-300 p-4">Footer</footer>
		</>
	)
}
