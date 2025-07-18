import Link from 'next/link'

export default function () {
	return (
		<header className="text-c5-darkgreen fixed inset-x-0 top-0 z-10 flex items-center justify-between gap-4 p-4">
			<Link
				href="/c5-landing-page"
				id="header-logo"
				className="max-w-min leading-none font-bold"
			>
				Scroll Adventures
			</Link>

			<Link href="/c5-landing-page/portfolio" className="header-link">
				Explore
			</Link>
		</header>
	)
}
