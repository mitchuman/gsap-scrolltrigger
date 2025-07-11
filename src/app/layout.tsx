import { Geist } from 'next/font/google'
import './app.css'
import type { Metadata } from 'next'

const fontSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'GSAP ScrollTrigger',
	description: 'Leraning Day',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	)
}
