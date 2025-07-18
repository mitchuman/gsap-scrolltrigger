import Link from 'next/link'

const links: {
	label: string
	href: string
}[] = [
	{ label: 'Pinned Sections', href: '/pinned-sections' },
	{ label: 'C5 Landing Page', href: '/c5-landing-page' },
]

export default function () {
	return (
		<>
			<h1>GSAP Scroll Trigger</h1>

			<nav>
				<ul className="list-disc pl-4">
					{links.map((link) => (
						<li key={link.href}>
							<Link className="underline" href={link.href}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</>
	)
}
